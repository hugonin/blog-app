
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="flex flex-col h-full">
      <header className="fixed w-full z-40 bg-gray-50">
        <nav
          className="max-w-screen-2xl flex flex-row flex-wrap justify-between my-3 ml-auto mr-auto "
          role="navigation"
        >
          <div className="flex items-center ml-3 mx-7 hover:text-gray-700 mb-2 lg:mb-0">
            <Link to="/">BLOG App</Link>
          </div>
          <div className="inline-block h-8 mr-3 lg:hidden">
            <button
              id="nav_toggle"
              className="h-full w-full"
              onClick={handleToggle}
            >
              {navbarOpen ? (
                <MdClose
                  style={{ width: "40px", height: "40px", color: "#4f46e5" }}
                />
              ) : (
                <FiMenu
                  style={{ width: "40px", height: "40px", color: "#4f46e5" }}
                />
              )}
            </button>
          </div>
          {/*Mobile menu */}
          <div
            id="nav_content"
            className="w-full py-8 mr-3 lg:flex lg:w-auto lg:py-0 lg:items-center hidden"
          >
            <ul
              className={`${
                navbarOpen
                  ? "hidden"
                  : "flex flex-col ml-auto text-md text-gray-500 font-semibold lg:flex-row"
              }`}
            >
              {user ? (
                <>
                  <li className="mx-6 w-mc hover:text-indigo-700 mb-4 lg:mb-0">
                    <Link to="/new-article">Create new article</Link>
                  </li>

                  <li className="mx-6 w-mc hover:text-indigo-700 mb-4 lg:mb-0">
                    <Link to="/articles">View my articles</Link>
                  </li>

                  <li
                    className="mx-6 w-mc hover:text-indigo-700 mb-4 lg:mb-0"
                    onClick={onLogout}
                  >
                    <button onClick={onLogout}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="mx-6 w-mc hover:text-indigo-700 mb-4 lg:mb-0">
                    <Link to="/login">
                      {" "}
                      
                      LOGIN
                    </Link>
                  </li>

                  <li className="mx-6 w-mc hover:text-indigo-700 mb-4 lg:mb-0">
                    <Link to="/register">
                      REGISTER
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          {/*Large screen menu */}
          <div
            id="nav_content"
            className={`${
              navbarOpen
                ? "w-full py-8 mr-3 lg:flex lg:w-auto lg:py-0 lg:items-center"
                : "hidden"
            }`}
          >
            <ul className="flex flex-col ml-auto text-md text-gray-500 font-semibold lg:flex-row">
              {user ? (
                <>
                  <li className="mx-6 w-mc hover:text-indigo-700 mb-4 lg:mb-0">
                    <Link to="/new-article">Create new article</Link>
                  </li>

                  <li className="mx-6 w-mc hover:text-indigo-700 mb-4 lg:mb-0">
                    <Link to="/articles">View my articles</Link>
                  </li>

                  <li className="mx-6 w-mc hover:text-indigo-700 mb-4 lg:mb-0">
                    <button onClick={onLogout}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="mx-6 w-mc hover:text-indigo-700 mb-4 lg:mb-0">
                    <Link to="/login">
                      {" "}
                      LOGIN
                    </Link>
                  </li>

                  <li className="mx-6 w-mc hover:text-indigo-700 mb-4 lg:mb-0">
                    <Link to="/register">
                   REGISTER
                    </Link>
                  </li>
                </>
              )}

            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;

