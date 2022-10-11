import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArticles, reset } from "../features/articles/articleSlice";

import Spinner from "../components/Spinner";
import ArticleItem from "../components/ArticleItem";

function ArticleList() {
  const { articles, isLoading, isSuccess } = useSelector(
    (state) => state.articles
  )

  const dispatch = useDispatch()

  useEffect(() => {
    return() => {
      if (isSuccess) (
        dispatch(reset)
      )
    }
  },[isSuccess, dispatch])

  useEffect(() => {
    dispatch(getArticles())
  },[dispatch])

  if (isLoading) {
   return <Spinner />
  }
  return (
    <section className="pt-24 pb-40 lg:pt-40 lg:pb-60 flex justify-center">
    <ul className="mx-8 w-full md:mx-auto md:w-11/12 lg:mx-auto lg:w-2/3 xl:w-1/2">
        {articles.map((article, id) => (
         <ArticleItem key={id} article={article} />
        ))}
    </ul>
  </section>
  )
}

export default ArticleList
