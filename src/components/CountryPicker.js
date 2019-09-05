import React from "react";

const CountryPicker = ({ country, setCountry, toggleMenu, isExpanded }) => {
  const handleChange = e => {
    e.preventDefault();
    let country = e.target.value;
    //console.log(country)
    setCountry(country);
    toggleMenu(!isExpanded);
    return;
  };

  return (
    <select
      onChange={handleChange}
      value={country}
      className="dropdown_select block appearance-none border py-2 px-3 lg:ml-2 rounded leading-tight focus:outline-none"
    >
      <option value="us">US</option>
      <option value="gb">UK</option>
      <option value="ca">CAN</option>
      <option value="fr">FRA</option>
      <option value="de">GER</option>
      <option value="au">AUS</option>
    </select>
  );
};

export default CountryPicker;
