import React from "react";
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
const CalorieInput = styled(Input)`
  font-size: 1.2rem;
  font-weight: 500;
  color: #ffd369;
  width: 20%;
  text-align: right;
`;

export const CalorieCount = styled.div`
  font-size: 1.2em;
  font-weight: 500;
  color: #ffd369;
`;

// Card Component
export const Card = (props) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editItem, setEditItem] = React.useState("");
  const [editCal, setEditCal] = React.useState("");

  const ItemNameRef = React.useRef(null);
  const CalRef = React.useRef(null);

  const handleEditConfirm = () => {
    if (editItem === null || editItem === "")
      alert("Item Name can't be empty!");
    else if (editCal === null || editCal === "" || editCal === 0)
      alert("Item Calories can't be empty!");
    else {
      props.edit(props.id, editItem, parseFloat(editCal));
      setIsEditing(false);
    }
  };

  const handleEditing = () => {
    setIsEditing(true);
    setEditItem(ItemNameRef.current.innerText);
    setEditCal(CalRef.current.innerText);
  };
  return (
    <StyledCard>
      {isEditing ? (
        <>
          <ItemInput
            type="text"
            value={editItem}
            onChange={(e) => setEditItem(e.target.value)}
            autoFocus
          />
          <CalorieInput
            type="number"
            value={editCal}
            onChange={(e) => setEditCal(e.target.value)}
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
          <Item ref={ItemNameRef}>{props.item}</Item>
          <CalorieCount ref={CalRef}>{props.calories}</CalorieCount>
          <DelEdBtn>
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
            <EditDelBtn onClick={() => props.del(props.id)}>
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

export const AddCalorieCard = ({ addItem }) => {
  const [item, setitem] = React.useState("Item Name");
  const [cal, setcal] = React.useState(0);

  const itemInp = React.useRef(null);
  const calInp = React.useRef(null);

  const handleAdd = () => {
    //Validation
    if (item === "" || item === "Item Name") {
      alert("Enter the Item Name");
      return;
    }
    if (cal === 0 || cal === "" || cal === null) {
      alert("Enter the calories");
      return;
    }
    addItem(item, cal);
    setitem("Item Name");
    setcal(0);
  };
  return (
    <StyledAddCard>
      <ItemInput
        ref={itemInp}
        type="text"
        value={item}
        onChange={(e) => setitem(e.target.value)}
        autoFocus
      />
      <CalorieInput
        ref={calInp}
        type="number"
        value={cal}
        onChange={(e) => setcal(e.target.value)}
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
