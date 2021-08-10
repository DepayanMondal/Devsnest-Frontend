import React from "react";
import { useDispatch } from "react-redux";
import {
  addTodo,
  editTodo,
  changeStatus,
  deleteTodo,
} from "./components/todoSlice";
import styled from "styled-components";

export const CalorieContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1em;
  overflow-x: hidden;
  overflow-y: scroll;

  width: 60vh;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DelEdBtn = styled.div`
  position: absolute;
  top: -1rem;
  right: -1rem;

  color: #393e46;
  font-size: 1.2rem;
  font-weight: 900;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const EditDelBtn = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: rgba(255, 211, 105, 1);
  display: grid;
  place-items: center;
`;

export const StyledCard = styled.div`
  background-color: #393e46;
  width: 80%;
  padding: 1.5em;
  margin-bottom: 2em;

  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
    rgba(255, 211, 105, 0.9) 0px 0px 0px 1px;

  &:hover {
    transition: box-shadow ease-in-out 0.4s;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0px inset,
      rgba(255, 211, 105, 0.5) 2px 2px 1px 2px;

    ${DelEdBtn} {
      opacity: 1;
    }
  }
  position: relative;
`;

const StyledAddCard = styled(StyledCard)`
  &:hover {
    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
      rgba(255, 211, 105, 0.9) 0px 0px 0px 1px;
  }
`;

export const Item = styled.div`
  font-size: 2em;
  font-weight: 700;
  color: #eeeeee;
`;

const Input = styled.input`
  font-size: 2rem;

  border: none;
  background-color: transparent;
  &:focus,
  &:active {
    box-shadow: none !important;
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    outline: none !important;
  }

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const ItemInput = styled(Input)`
  font-weight: 700;
  color: #eeeeee;
  width: 60%;
`;

export const CalorieCount = styled.div`
  font-size: 1.2em;
  font-weight: 500;
  color: #ffd369;
`;

// Card Component
export const Card = (props) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = React.useState(false);
  const [editTodoInput, setEditTodoInp] = React.useState("");
  const TodoNameRef = React.useRef(null);

  const handleEditing = () => {
    setIsEditing(true);
    setEditTodoInp(TodoNameRef.current.innerText);
  };

  const handleEditConfirm = () => {
    if (editTodo === null || editTodo === "")
      alert("Item Name can't be empty!");
    else {
      dispatch(editTodo({ id: props.id, newTitle: editTodoInput }));
      setIsEditing(false);
    }
  };

  return (
    <StyledCard>
      {isEditing ? (
        <>
          <ItemInput
            type="text"
            value={editTodoInput}
            onChange={(e) => setEditTodoInp(e.target.value)}
            autoFocus
          />
          <DelEdBtn>
            <EditDelBtn onClick={handleEditConfirm}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </EditDelBtn>
          </DelEdBtn>
        </>
      ) : (
        <>
          <Item ref={TodoNameRef}>{props.todoTitle}</Item>

          <DelEdBtn>
            {props.todoStatus ? null : (
              <>
                <EditDelBtn onClick={() => dispatch(changeStatus(props.id))}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </EditDelBtn>

                <EditDelBtn onClick={handleEditing}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-edit-2"
                  >
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                  </svg>
                </EditDelBtn>
              </>
            )}
            <EditDelBtn onClick={() => dispatch(deleteTodo(props.id))}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-trash"
              >
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </EditDelBtn>
          </DelEdBtn>
        </>
      )}
    </StyledCard>
  );
};

export const AddCalorieCard = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = React.useState("Todo Title");

  const todoInp = React.useRef(null);

  const handleAdd = () => {
    //Validation
    if (todo === "" || todo === "Todo Title") {
      alert("Enter the Todo Title");
      return;
    }
    console.log("handleAdd was called");
    dispatch(addTodo(todo));
    setTodo("Todo Title");
  };
  return (
    <StyledAddCard>
      <ItemInput
        ref={todoInp}
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        autoFocus
      />
      <DelEdBtn style={{ opacity: 1 }} onClick={handleAdd}>
        <EditDelBtn>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-plus"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </EditDelBtn>
      </DelEdBtn>
    </StyledAddCard>
  );
};
