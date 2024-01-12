import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import './App.css';
import data from './components/Data';

const App = () => {
  const [foods, setFoods] = useState(data);
  const [selectedItems, setselectedItems] = useState([]);

  const handleAddItem = (food, quantity) => {
    const existingItemIndex = selectedItems.findIndex((item) => item.id === food.id);

    if (existingItemIndex !== -1) {
      const updatedselectedItems = [...selectedItems];
      updatedselectedItems[existingItemIndex].quantity += quantity;
      updatedselectedItems[existingItemIndex].totalCalories += food.cal * quantity;
      setselectedItems(updatedselectedItems);
    } else {
      const newSelectedFood = {
        id: food.id,
        name: food.name,
        quantity,
        totalCalories: food.cal * quantity,
      };
      setselectedItems([...selectedItems, newSelectedFood]);
    }
  };

  const handleResetItem = (foodId) => {
    const updatedselectedItems = selectedItems.map((food) =>
      food.id === foodId
        ? {
            ...food,
            quantity: 0,
            totalCalories: 0,
          }
        : food
    );
    setselectedItems(updatedselectedItems);
  };

  const handleFilterFoods = (searchText) => {
    const filteredFoods = data.filter((food) =>
      food.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFoods(filteredFoods);
  };

  return (
    <>
      <div className="search">
        <Search onSearch={handleFilterFoods} />
      </div>
      <div className="App">
        <div className="food-container">
          {foods.map((food) => (
            <FoodBox key={food.id} food={food} onAddFood={handleAddItem} />
          ))}
        </div>
        <div className="selected-foods">
          <ul>
            {selectedItems.map((selectedFood) => (
              <li key={selectedFood.id}>
                {`${selectedFood.quantity} ${selectedFood.name} = ${selectedFood.totalCalories} calories `}
                <button onClick={() => handleResetItem(selectedFood.id)}>Reset</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
