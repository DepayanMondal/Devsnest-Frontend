import React from "react";
import "../App.css";
import { useSelector } from "react-redux";

const Output = () => {
  const { username, email } = useSelector((state) => state.form);
  return (
    <section id="output">
      <p>
        <b>Username : </b>
        {username}
      </p>
      <p>
        <b>Email : </b>
        {email}
      </p>
    </section>
  );
};

export default Output;
