import React, { FC } from "react";

const Header: FC = () => {
  return (
    <section className="hero has-text-centered is-dark is-bold">
      <div className="hero-body">
        <h1 className="title mb-3">Weather App</h1>
        <h2 className="subtitle mt-0">
          Enter city name and press search button.
        </h2>
      </div>
    </section>
  );
};

export default Header;
