import React, { useState } from "react";
import { search } from "../api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Search = () => {
  const [value, setValue] = useState("");
  const [state, setState] = useState({ loading: false, error: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    setState({ loading: true, error: "" });
    
    search(value).then((data) => {
      if (!data.error) {
        dispatch({
          type: "SEARCH",
          payload: data,
        });
        navigate("/items/search");
        setState({ loading: false, error: "" });
      } else {
        setState({ loading: false, error: data.error });
      }
    });
  };

  return (
    <section className="p-10 w-300 mt-24 m-auto shadow-lg">
      <form onSubmit={handleSearch}>
        <div>
          <h3 className="mb-2">{state.error}</h3>
        </div>

        <input
          className="p-4 w-full border border-blue-300 border-solid"
          placeholder="Search by name ..."
          onChange={(e) => {
            setValue(e.target.value);
            setState({ ...state, error: "" });
          }}
          required
        />
        <button
          type="submit"
          className="p-2 w-full mt-4 rounded-lg bg-blue-300 text-white text-xl"
        >
          {state.loading ? "Loading ..." : "Search"}
        </button>
      </form>
    </section>
  );
};

export default Search;
