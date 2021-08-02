import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeEmail, changeUsername } from "./formSlice";

const Form = () => {
  const { username, email } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  return (
    <section id="input">
      <div>
        <input
          type="text"
          placeholder="Username eg. hugefix"
          value={username}
          onChange={(e) => dispatch(changeUsername(e.target.value))}
          autoFocus
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email eg. hugefix@bug.gg"
          value={email}
          onChange={(e) => dispatch(changeEmail(e.target.value))}
        />
      </div>
    </section>
  );
};

export default Form;
