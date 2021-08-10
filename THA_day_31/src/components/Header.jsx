import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShoppingCartIcon,
  MenuAlt3Icon,
  XIcon,
} from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../store/cartSlice";

const Header = () => {
  const { pathname } = useLocation();
  const { itemsCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [mbMenu, setMbMenu] = useState(false);
  const linksStyles =
    "text-current opacity-60 hover:opacity-100 px-4 py-2 rounded-full";
  const activeLink = "text-purple-300 opacity-100 hover:none";

  const Links = () => {
    return (
      <>
        <ul className=" flex-grow justify-center items-center flex gap-12 font-semibold">
          <li
            className={`${pathname === "/" ? activeLink : null} ${linksStyles}`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`${
              pathname.indexOf("/products") === 0 ? activeLink : null
            } ${linksStyles}`}
          >
            <Link to="/products">Shop</Link>
          </li>
          <li
            className={`${
              pathname === "/about" ? activeLink : null
            } ${linksStyles}`}
          >
            <Link to="/about">About</Link>
          </li>
        </ul>
      </>
    );
  };

  const MobileMenu = () => {
    return (
      <div className="md:hidden">
        {mbMenu ? (
          <XIcon className="h-8" onClick={() => setMbMenu(false)} />
        ) : (
          <MenuAlt3Icon className="h-8" onClick={() => setMbMenu(true)} />
        )}
      </div>
    );
  };

  return (
    <div className="text-xl px-0 py-4">
      <div className="flex justify-between items-center">
        <div className="flex-none text-3xl font-bold md:w-1/4">
          <Link to="/">purple</Link>
        </div>
        <nav className="hidden md:block">
          <Links />
        </nav>

        <div className="flex-none text-3xl flex justify-end gap-4 md:w-1/4 md:gap-0">
          <div className="relative">
            <ShoppingCartIcon
              className="h-8"
              onClick={() => dispatch(toggleCart())}
            />
            {itemsCount ? (
              <span class="absolute top-0 right-0 flex h-4 w-4">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-300 opacity-75"></span>
                <span class="inline-flex rounded-full h-4 w-4 bg-purple-400 text-white text-xs justify-center">
                  {itemsCount}
                </span>
              </span>
            ) : null}
          </div>
          <MobileMenu />
        </div>
      </div>
      {mbMenu ? (
        <nav className="md:hidden min-w-full p-4 min-h-full">
          <Links />
        </nav>
      ) : null}
    </div>
  );
};

export default Header;
