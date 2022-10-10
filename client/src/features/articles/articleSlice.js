import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import articleService from "./articleService";

const initialState = {
  articles: [],
  article: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Create new article
export const createArticle = createAsyncThunk(
  "articles/create",
  async (articleData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await articleService.createArticle(articleData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Get user articles
export const getArticles = createAsyncThunk(
  "articles/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await articleService.getArticles(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);




//Get user article
export const getArticle = createAsyncThunk(
  "article/get",
  async (articleId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await articleService.getArticle(articleId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Updatearticle
export const updateArticle = createAsyncThunk(
  "article/update",
  async (articleId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await articleService.updateArticle(articleId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createArticle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createArticle.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createArticle.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getArticles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.articles = action.payload;
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getArticle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getArticle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.article = action.payload;
      })
      .addCase(getArticle.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateArticle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articles.map((article) =>
          article._id === action.payload
            ? (article.status = "updated")
            : article
        );
      });
  },
});

export const { reset } = articleSlice.actions;
export default articleSlice.reducer;
