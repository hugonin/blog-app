import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArticles, reset } from "../features/articles/articleSlice";

import Spinner from "../components/Spinner";
import ArticleItem from "../components/ArticleItem";

function ArticleList() {
  const { articles, isLoading, isSuccess } = useSelector(
    (state) => state.articles
  );

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) dispatch(reset);
    };
  }, [isSuccess, dispatch]);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
      <section className="pt-32 lg:pt-40">
        <h2 className="text-left mx-4 uppercase md:mx-0 font-medium md:text-center text-gray-600">
          Latest Articles
        </h2>
        <ul className="mx-4 -mt-12 md:mx-auto md:w-11/12 lg:mx-auto lg:w-1/2">
          {articles.map((article, id) => (
            <ArticleItem key={id} article={article} />
          ))}
        </ul>
      </section>
  );
}

export default ArticleList;
