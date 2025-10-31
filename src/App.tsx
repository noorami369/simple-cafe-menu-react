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
      title: "diner double",
      price: "13.99",
      description:
        "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
      addressImage: `./img/items-2.jpeg`,
      type: "Lunch",
    },
    {
      id: 3,
      title: "godzilla milkshake",
      price: "15.99",
      description:
        "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
      addressImage: `./img/items-3.jpeg`,
      type: "Shakes",
    },
    {
      id: 4,
      title: "country delight",
      price: "15.99",
      description:
        "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
      addressImage: `./img/items-4.jpeg`,
      type: "Breakfast",
    },
    {
      id: 5,
      title: "egg attack",
      price: "15.99",
      description:
        "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
      addressImage: `./img/items-5.jpeg`,
      type: "Lunch",
    },
    {
      id: 6,
      title: "oreo dream",
      price: "15.99",
      description:
        "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
      addressImage: `./img/items-6.jpeg`,
      type: "Shakes",
    },
    {
      id: 7,
      title: "bacon overflow",
      price: "15.99",
      description:
        "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
      addressImage: `./img/items-7.jpeg`,
      type: "Breakfast",
    },
    {
      id: 8,
      title: "american classic",
      price: "15.99",
      description:
        "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
      addressImage: `./img/items-8.jpeg`,
      type: "Lunch",
    },
    {
      id: 9,
      title: "quarantine buddy",
      price: "15.99",
      description:
        "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
      addressImage: `./img/items-9.jpeg`,
      type: "Shakes",
    },
    {
      id: 10,
      title: "bison steak",
      price: "15.99",
      description:
        "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
      addressImage: `./img/items-10.jpeg`,
      type: "Dinner",
    },
  ];
  const [items, setItems] = useState(allItems);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-[40px] text-[#102a42] leading-1 tracking-[4px] capitalize font-bold w-full block pb-7">
            our menu
          </h1>
          <div className="underline"></div>
        </div>
        <div className="flex gap-5 pt-7">
          <button
            className="bg-transparent border border-[#c59d5f] text-[#c59d5f] cursor-pointer capitalize px-3 py-1.5 transition-all duration-300 ease-linear hover:bg-[#c59d5f] hover:text-white box-border rounded-lg shadow-md shadow-black"
            onClick={() => {
              setItems(allItems);
            }}
          >
            All
          </button>
          <button
            className="bg-transparent border border-[#c59d5f] text-[#c59d5f] cursor-pointer capitalize px-3 py-1.5 transition-all duration-300 ease-linear hover:bg-[#c59d5f] hover:text-white box-border rounded-lg shadow-md shadow-black"
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
          <button
            className="bg-transparent border border-[#c59d5f] text-[#c59d5f] cursor-pointer capitalize px-3 py-1.5 transition-all duration-300 ease-linear hover:bg-[#c59d5f] hover:text-white box-border rounded-lg shadow-md shadow-black"
            onClick={() => {
              const filterLunchItem = allItems.filter((item) => {
                return item.type === "Lunch";
              });
              console.log(filterLunchItem);
              setItems(filterLunchItem);
            }}
          >
            Lunch
          </button>
          <button
            className="bg-transparent border border-[#c59d5f] text-[#c59d5f] cursor-pointer capitalize px-3 py-1.5 transition-all duration-300 ease-linear hover:bg-[#c59d5f] hover:text-white box-border rounded-lg shadow-md shadow-black"
            onClick={() => {
              const filterShakesItem = allItems.filter((item) => {
                return item.type === "Shakes";
              });
              console.log(filterShakesItem);
              setItems(filterShakesItem);
            }}
          >
            Shakes
          </button>
          <button
            className="bg-transparent border border-[#c59d5f] text-[#c59d5f] cursor-pointer capitalize px-3 py-1.5 transition-all duration-300 ease-linear hover:bg-[#c59d5f] hover:text-white box-border rounded-lg shadow-md shadow-black"
            onClick={() => {
              const filterDinnerItem = allItems.filter((item) => {
                return item.type === "Dinner";
              });
              console.log(filterDinnerItem);
              setItems(filterDinnerItem);
            }}
          >
            Dinner
          </button>
        </div>

        <ul className="grid grid-cols-2 pt-10 gap-x-8 gap-y-12">
          {items.map((item) => (
            <li className="" key={item.id}>
              <div className="flex gap-5 max-w-[450px]">
                <div className="border-4 border-[#c59d5f] rounded-lg">
                  <img src={item.addressImage} />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between pb-1">
                    <div className="tracking-[4px] capitalize font-bold">
                      {item.title}
                    </div>
                    <div>{item.price}</div>
                  </div>
                  <div className="dotted-border-buttom"></div>
                  <div className="pt-4 text-[#617d98]">{item.description}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
