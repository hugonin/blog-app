import { Link } from "react-router-dom";

function ArticleItem({ article }) {
  return (
    <div className="relative">
      <Link
        to={`/article/${article._id}`}
        className="flex flex-col md:flex-row gap-x-12 p-2 md:h-60 my-20 rounded-sm overflow-hidden shadow-sm hover:shadow-md border-gray-200 bg-white custom_color_border"
      >
        <div className="">
          <div className="mt-2">
            <span className="text-gray-400 mx-2 font-medium text-sm">
              {" "}
              {new Date(article.createdAt).toLocaleDateString("fr-FR")}
            </span>
          </div>
          <h2 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
            {article.title}
          </h2>
          <p className="text-sm mb-6 flex-grow max-w-prose text-gray-600">
            {article.content.substring(0, 200) + `...`}
          </p>
          <Link
            to={`/article/${article._id}`}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </Link>
    </div>
  );
}

export default ArticleItem;
