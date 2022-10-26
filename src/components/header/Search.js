import React from "react";

import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Search = ({ CartItem }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
  const { user, logout } = UserAuth();
  console.log(user);
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width cursor-pointer">
            <Link
              className=" text-[#0f3460] text-4xl tracking-wider font-semibold font"
              to="/the-treasure-chest"
            >
              The Treasure Chest
            </Link>
          </div>

          <div className="search-box f_flex ml-4 ">
            <i className="fa fa-search "></i>
            <input type="text" placeholder="Search and hit enter..." />
            <span>Search</span>
          </div>

          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart">
              <Link to="/the-treasure-chest/cart">
                <i className="fa fa-shopping-bag icon-circle "></i>
                <span className="bg-[#0f3460]">
                  {CartItem.length === 0 ? "" : CartItem.length}
                </span>
              </Link>
            </div>
          </div>
          {!user && (
            <>
              <div className="ml-3 inline-block text-sm px-4 py-2 mr-3 leading-none border rounded font-bold text-[#0f3460] border-black hover:bg-[#0f3460] hover:text-white mt-4 lg:mt-0">
                <Link to="/the-treasure-chest/login">
                  <button>Login</button>
                </Link>
              </div>
              <div className="ml-3 inline-block text-sm px-4 py-2 mr-3 leading-none border rounded font-bold text-[#0f3460] border-black hover:bg-[#0f3460] hover:text-white mt-4 lg:mt-0">
                <Link to="/the-treasure-chest/register">
                  <button>Register</button>
                </Link>
              </div>{" "}
            </>
          )}
          {user && (
            <>
              <div className="ml-3 inline-block text-sm px-4 py-2 mr-3 leading-none border rounded font-bold text-[#0f3460] border-black hover:bg-[#0f3460] hover:text-white mt-4 lg:mt-0">
                <Link to="/the-treasure-chest" onClick={logout}>
                  <button>Logout</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Search;
