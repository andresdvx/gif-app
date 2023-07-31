import AddCategori from "./components/AddCategori";
import GifElement from "./components/GifElement";
import { useState } from "react";

const GifExpertApp = () => {
  const [category, setCategory] = useState([]);
  return (
    <>
      <h2 className="text-center">Gif App</h2>
      <hr />
      <AddCategori setCategory={setCategory} category={category} />
      <ul>
        {category.map((cat) => {
          return (
            <li key={cat}>
              <p className="mx-3 first-letter:uppercase ">{cat}</p>
              <div className="mt-5 mb-5 grid  grid-cols-1 px-3 sm:grid-cols-2 lg:grid-cols-3 gap-9 border-gray-700">
                <GifElement key={cat} category={cat} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default GifExpertApp;
