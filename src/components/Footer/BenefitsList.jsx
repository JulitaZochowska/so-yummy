import './Footer.styled.css';
import React from 'react';

const Preferences = () => {
  return (
    <ul className="BenefitsList">
      <li className="Benefits">
        <span className="BenefitsText">Database of recipes that can be replenished</span>
      </li>
      <li className="Benefits">
        <span className="BenefitsText">Flexible search for desired and unwanted ingredients</span>
      </li>
      <li className="Benefits">
        <span className="BenefitsText">Ability to add your own recipes with photos</span>
      </li>
      <li className="Benefits">
        <span className="BenefitsText">Convenient and easy to use</span>
      </li>
    </ul>
  );
};

export default Preferences;
