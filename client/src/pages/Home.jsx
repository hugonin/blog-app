import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/auth/authSlice";
import ArticleList from "../pages/ArticleList"

function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(reset);
  }, [dispatch]);

  return (
    <>
      {user ? (
        <ArticleList />
      ) : (
        <section className="pt-24 lg:py-52 -mt-8 mx-6 md:mx-32 lg:mx-auto max-w-screen-xl">
          <div>
            <div className="flex flex-col lg:mx-8 lg:flex-row">
              <div className="w-full mt-8 lg:mt-0">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Tell your story to </span>
                    <span className="block text-indigo-600 xl:inline">
                      {" "}
                      the world
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start mb-6">
                    <div className="rounded-md shadow">
                      <Link
                        to="/login"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                      >
                        Login
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link
                        to="/register"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full">
                <img
                  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                  alt="A small golden trophy"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Home;
