import axios from "axios";

const API_URL = "/api/articles/";

//Create new article user
const createArticle = async (articleData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, articleData, config);

  return response.data;
};

//Get user articles
const getArticles = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};



//Get user article
const getArticle = async (articleId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + articleId, config);
  return response.data;
};

//Update article
const updateArticle = async (articleId, token) => {
    const config = {
        headers: {
            Authorization:  `Bearer ${token}`
        }
    }

    const response = await axios.put(API_URL + articleId, config, {status: "updated"} )
    return response.data
}

const articleService = { createArticle, getArticles, getArticle, updateArticle };

export default articleService;
