import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createArticle, reset } from "../features/articles/articleSlice";
import { toast } from "react-toastify";

import Spinner from "../components/Spinner";

function NewArticle() {
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.articles
  );

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      dispatch(reset());
      //navigate("/articles");
    }

    dispatch(reset());
  }, [dispatch, isError, isSuccess, navigate, message]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createArticle({ title, content }));
    toast.success("Article Created");
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <section className="pt-24 pb-40 m-4 lg:pt-40 lg:pb-60 flex justify-center">
      <div className="w-full bg-white shadow-md px-4 py-8 rounded-md space-y-8 max-w-md ">
        <div className=" font-medium self-center text-xl sm:text-3xl text-gray-800">
          <h1 className="m-1 inline-block">Create new article</h1>
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Please fill out the form below
        </div>

        <form onSubmit={onSubmit}>
          <div className="flex flex-col mb-5">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your Article
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write an article..."
            ></textarea>
          </div>
          <div className="flex w-full">
            <button
              type="submit"
              className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-md py-2 w-full transition duration-150  ease-in"
            >
              <span className="mr-2 uppercase">Submit</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default NewArticle;
