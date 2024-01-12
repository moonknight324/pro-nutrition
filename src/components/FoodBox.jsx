import React, { useState } from 'react';

const FoodBox = ({ food, onAddFood }) => {
  const [quan, setquan] = useState(1);

  const handleAdd = () => {
    onAddFood(food, quan);
    setquan(1);
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img className='food_images' src={food.img} alt={food.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{`${food.cal} cal`}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={quan}
                onChange={(e) => setquan(e.target.value)}
              />
            </div>
            <div>
              <button className="button is-info" onClick={handleAdd}>
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
