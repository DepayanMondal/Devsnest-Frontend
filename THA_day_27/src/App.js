import React from "react";
import styled from "styled-components";

import { CalorieContainer, Card, AddCalorieCard } from "./CalorieCard";

import { useSelector } from "react-redux";

const AppContainer = styled.div`
  height: 100vh;
  position: relative;
`;

function App() {
  const todos = useSelector((state) => state.todo);
  return (
    <AppContainer>
      <CalorieContainer>
        <AddCalorieCard isEditing></AddCalorieCard>
        {todos.map((el) => (
          <Card
            key={el.id}
            id={el.id}
            todoTitle={el.todoTitle}
            todoStatus={el.isDone}
          />
        ))}
      </CalorieContainer>
    </AppContainer>
  );
}

export default App;
