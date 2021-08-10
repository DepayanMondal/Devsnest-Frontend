import React from "react";
import { useDispatch } from "react-redux";
import { toggleCart } from "../store/cartSlice";
import { XIcon } from "@heroicons/react/outline";

export const Cart = () => {
  const dispatch = useDispatch();
  return (
    <div className="absolute top-0 right-0 h-screen w-2/3 md:w-1/3 bg-gray-400">
      <XIcon className="h-8 w-8" onClick={() => dispatch(toggleCart())} />
    </div>
  );
};
