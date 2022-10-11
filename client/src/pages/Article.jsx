import { useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { getArticle} from "../features/articles/articleSlice";
import { useParams } from "react-router-dom";

import Spinner from "../components/Spinner";


function Article() {
  const { article, isLoading, isError, message } = useSelector(
    (state) => state.articles
  );

  const dispatch = useDispatch();
  const { articleId } = useParams();


  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getArticle(articleId));
    //eslint-disable-next-line
  }, [isError, message, articleId]);


  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h3>Something went wrong!</h3>;
  }
  return (
    <section className="pt-24 lg:pt-18 lg:pb-32">
    <article>
      <div className="relative overflow-hidden h-1/6 lg:h-130 w-full mb-12 lg:mb-16">
        <div className="h-full w-full flex flex-col items-center justify-center">
          <div className="text-center lg:mb-2">
            <span className="uppercase tracking-wider font-semibold text-blue-500 text-sm">
              {article.status}
            </span>
            <span className="text-blue-500 mx-2 lg:mx-3 font-medium">
            {new Date(article.createdAt).toLocaleDateString("fr-FR")}
            </span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-semibold text-center mx-4 lg:mx-0 text-blue-500">
            {article.title}
          </h1>
        </div>
      </div>

      <div className="max-w-prose mx-6 lg:mx-auto text-gray-600">
        <p className="mb-4">{article.content}</p>
      </div>
    </article>
  </section>
  )
}

export default Article
