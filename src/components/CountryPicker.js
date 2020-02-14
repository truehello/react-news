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
      className="dropdown_select italic tracking-tighter block appearance-none py-1 px-3 lg:mr-2 leading-tight focus:outline-none"
    >
      <option value="us">US Edition</option>
      <option value="gb">UK Edition</option>
      <option value="ca">CAN Edition</option>
      <option value="fr">FRA</option>
      <option value="de">GER</option>
      <option value="au">AUS Edition</option>
    </select>
  );
};

export default CountryPicker;
