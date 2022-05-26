import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDogById } from "../api";

const ItemDetail = () => {
  const [dog, setDog] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getDogById(id).then((data) => setDog(data));
  }, [id]);

  return (
    <section className="w-300 m-auto mt-20 border-solid border-2 mb-10">
      {Object.keys(dog).length > 0 && (
        <div className="p-10">
          <i className="text-center text-2xl font-bold block">{dog.name}</i>
          <img
            alt={dog.name}
            src={dog.image}
            className="w-54 m-auto mt-10 rounded-lg"
          />

          <p className="font-bold">Description :</p>
          <strong className="mt-1 text-center block text-slate-500 italic">
            {dog.description}
          </strong>

          <p className="font-bold mt-3">
            Height:
            <span className="font-light ml-2 text-slate-500 italic">
              {dog.height}
            </span>
          </p>
          <p className="font-bold mt-2">
            Origen:
            <span className="text-slate-500 font-light ml-2 italic">
              {dog.region}
            </span>
          </p>

          <div className="mt-2 flex items-center gap-4 flex-wrap">
            <strong className="block">Other Names:</strong>
            {dog.other_names.map((item, index) => (
              <span
                key={index}
                className="p-1 bg-blue-500 text-white rounded-lg font-light w-auto text-sm truncate ..."
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-4 flex-wrap">
            <strong>Qualites:</strong>
            {dog.qualities.map((item, index) => (
              <span
                key={index}
                className="p-1 bg-blue-500 text-white rounded-lg font-light w-auto text-sm truncate ..."
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ItemDetail;
