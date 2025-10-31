import { useState } from "react";

import "./App.css";

function App() {
  const allItems = [
    {
      id: 1,
      title: "buttermilk pancakes",
      price: "15.99",
      description:
        "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
      addressImage: `./img/items-1.jpeg`,
      type: "Breakfast",
    },
    {
      id: 2,
      title: "buttermilk pancakes",
      price: "15.99",
      description:
        "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
      addressImage: `./img/items-1.jpeg`,
      type: "Lunch",
    },
    {
      id: 3,
      title: "buttermilk pancakes",
      price: "15.99",
      description:
        "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
      addressImage: `./img/items-1.jpeg`,
      type: "Breakfast",
    },
    {
      id: 4,
      title: "buttermilk pancakes",
      price: "15.99",
      description:
        "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
      addressImage: `./img/items-1.jpeg`,
      type: "Breakfast",
    },
    {
      id: 5,
      title: "buttermilk pancakes",
      price: "15.99",
      description:
        "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
      addressImage: `./img/items-1.jpeg`,
      type: "Lunch",
    },
    {
      id: 6,
      title: "buttermilk pancakes",
      price: "15.99",
      description:
        "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
      addressImage: `./img/items-1.jpeg`,
      type: "Shakes",
    },
    {
      id: 7,
      title: "buttermilk pancakes",
      price: "15.99",
      description:
        "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
      addressImage: `./img/items-1.jpeg`,
      type: "Breakfast",
    },
    {
      id: 8,
      title: "buttermilk pancakes",
      price: "15.99",
      description:
        "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
      addressImage: `./img/items-1.jpeg`,
      type: "Lunch",
    },
    {
      id: 9,
      title: "buttermilk pancakes",
      price: "15.99",
      description:
        "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
      addressImage: `./img/items-1.jpeg`,
      type: "Shakes",
    },
    {
      id: 10,
      title: "buttermilk pancakes",
      price: "15.99",
      description:
        "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
      addressImage: `./img/items-1.jpeg`,
      type: "Lunch",
    },
  ];
  const [items, setItems] = useState(allItems);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setItems(allItems);
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            const filterBreakfastItem = allItems.filter((item) => {
              return item.type === "Breakfast";
            });
            console.log(filterBreakfastItem);
            setItems(filterBreakfastItem);
          }}
        >
          Breakfast
        </button>
        <button></button>
        <button></button>
        <button></button>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
