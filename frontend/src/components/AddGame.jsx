import React, { useState } from "react";
import "./addgame.css"; 

const AddGame = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    rating: "",
    genre_id: "",
  });

  const [buttonText, setButtonText] = useState("Add Game");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setButtonText("Adding...");
      const response = await fetch("http://localhost:5555/actions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to add game");
      }
      const data = await response.json();
      console.log(data);
      setFormData({
        name: "",
        price: "",
        image: "",
        rating: "",
        genre_id: "",
      });
      setButtonText("Game Added");
    } catch (error) {
      console.error("Error adding game:", error);
      setButtonText("Add Game");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="page">
    <div className="add-game-container">
      <h2 className="add-game-title">Add a Game</h2>
      <form className="add-game-form" onSubmit={handleSubmit}>
        <label className="add-game-label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="add-game-input"
          />
        </label>
        <label className="add-game-label">
          Price:
          <input
            type="text"
            name="price"
            placeholder="Ksh..."
            value={formData.price}
            onChange={handleChange}
            className="add-game-input"
          />
        </label>
        <label className="add-game-label">
          Image URL:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="add-game-input"
          />
        </label>
        <label className="add-game-label">
          Rating:
          <input
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="add-game-input"
          />
        </label>
        <label className="add-game-label">
          Genre ID:
          <input
            type="text"
            name="genre_id"
            value={formData.genre_id}
            onChange={handleChange}
            placeholder="1-Action, 2-Adventure, 3-Racing, 4-Shooter"
            className="add-game-input"
          />
        </label>
        <button
          type="submit"
          className="add-game-button"
          disabled={buttonText !== "Add Game"}
        >
          {buttonText}
        </button>
      </form>
    </div>
    </div>
  );
};

export default AddGame;
