import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../store/actions/alertActions";
import { setLoading, getWeather } from "../store/actions/weatherActions";

const Search: FC = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim() === "") return dispatch(setAlert("City is required"));
    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity("");
  };

  return (
    <div className="hero is-light has-text-centered">
      <div className="hero-body">
        <form className="py-5" onSubmit={handleSubmit}>
          <input
            className="input has-text-left"
            type="text"
            placeholder="e.g. Paris"
            value={city}
            onChange={handleChange}
            style={{ maxWidth: 300 }}
          />
          <button className="button is-primary ml-1">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
