import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import "../styles/list.css";

const List = () => {
  const [newResults, setNewResults] = useState([]);
  const state = useSelector((state) => state);

  useEffect(() => {
    const newResults = state.results.sort(() => 0.5 - Math.random());
    setNewResults(newResults.slice(0, 4));
  }, []);

  return (
    <section className="list-container">
      <p className="text-2xl mt-10 mb-10 font-bold">
        List of the first {newResults.length} results :
      </p>
      {newResults.length === 0 && (
        <p className="text-center mt-10">No se encontraron resultados.</p>
      )}
      <div className="grid justify-center sm:grid-cols-2 gap-20">
        {newResults.slice(0, 4).map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default List;
