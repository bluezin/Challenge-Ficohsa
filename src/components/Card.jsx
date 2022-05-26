import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ id, name, image, other_names, description, region, height }) => {
  const navigate = useNavigate();

  return (
    <div
      className="shadow-lg rounded-lg cursor-pointer"
      onClick={() => navigate(`/items/${id}`)}
    >
      <div>
        <img
          src={image}
          className="m-auto w-full h-72 rounded-t-xl"
        />
      </div>

      <div className="p-4">
        <p className="text-xl bg-blue-100 w-full font-bold mb-4 p-0.5">
          {name}
        </p>
        <i className="text-sm mb-4 block">{description}</i>
        {other_names.length > 0 && (
          <>
            <p className="font-bold">Other Names:</p>
            <div className="flex flex-wrap gap-2">
              {other_names.map((name, index) => (
                <span
                  key={index}
                  className="p-0.5 bg-blue-100 rounded-lg font-light w-auto text-sm truncate"
                >
                  {name}
                </span>
              ))}
            </div>
          </>
        )}

        <p className="mt-2 font-bold">
          Height:
          <span className="ml-2 text-sm font-light">{height}</span>
        </p>
        <p className="mt-2 font-bold">
          Origen:
          <span className="ml-2 text-sm font-light">{region}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
