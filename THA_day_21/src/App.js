import React from "react";
import styled from "styled-components";

import { CalorieContainer, Card, AddCalorieCard } from "./CalorieCard";

const AppContainer = styled.div`
  height: 100vh;
  position: relative;
`;

function App() {
  const [calories, setCalories] = React.useState([
    { id: 197, item: "Apple", calories: "62.3" },
    { id: 196, item: "Avocado", calories: "144.3" },
    { id: 195, item: "Strawberry", calories: "24.6" },
    { id: 194, item: "Pineapple", calories: "43" },
    { id: 193, item: "Papaya", calories: "23.9" },
    { id: 192, item: "Orange", calories: "37.2" },
  ]);

  const [renderCount, setRenderCount] = React.useState(0);

  const handleDelCalorie = (id) =>
    setCalories((prevCalories) => prevCalories.filter((el) => el.id !== id));

  const addItem = (title, calories) => {
    console.log(title, calories);
    let newItem = {
      id: new Date().getUTCMilliseconds(),
      item: title,
      calories: calories,
    };
    setCalories((prevState) => [newItem, ...prevState]);
  };

  const editItem = (id, newItem, newCal) => {
    let index = calories.findIndex((e) => e.id === id);
    if (
      calories[index].item !== newItem ||
      calories[index].calories !== newCal
    ) {
      calories[index].item = newItem;
      calories[index].calories = newCal;
      console.log(renderCount);
      setRenderCount((prev) => ++prev);
    } else return;
  };

  return (
    <AppContainer>
      <CalorieContainer>
        <AddCalorieCard isEditing addItem={addItem}></AddCalorieCard>
        {calories.map((el) => (
          <Card
            key={el.id}
            id={el.id}
            item={el.item}
            calories={el.calories}
            del={handleDelCalorie}
            edit={editItem}
          />
        ))}
      </CalorieContainer>
    </AppContainer>
  );
}

export default App;
