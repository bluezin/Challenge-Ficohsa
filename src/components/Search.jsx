import React, { useState } from "react";
import { search } from "../api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Search = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    search(value).then((data) => {
      if (!data.error) {
        dispatch({
          type: "SEARCH",
          payload: data,
        });
        navigate("/items/search");
      } else {
        setError(data.error);
      }
    });
  };

  return (
    <section className="p-10 w-300 mt-24 m-auto shadow-lg">
      <form onSubmit={handleSearch}>
        <div>
          <h3 className="mb-2">{error}</h3>
        </div>

        <input
          className="p-4 w-full border border-blue-300 border-solid"
          placeholder="Search by name ..."
          onChange={(e) => {
            setValue(e.target.value);
            setError("");
          }}
          required
        />
        <button
          type="submit"
          className="p-2 w-full mt-4 rounded-lg bg-blue-300 text-white text-xl"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default Search;
