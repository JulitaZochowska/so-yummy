import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as Arrow } from '../../images/dropdown-arrow-down.svg';
import css from './IngredientMeasureInput.module.css';

const IngredientsMeasureInput = ({ onMeasureChange }) => {
  const [measureValue, setMeasureValue] = useState('');
  const [measure, setMeasure] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const measures = ['tbs', 'tsp', 'kg', 'g', 'l', 'ml'];

  const handleMeasureValue = event => {
    const value = event.target.value;
    setMeasureValue(value);
  };

  const handleOptionClick = value => {
    setMeasure(value);
    setIsOpen(false);
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleOutsideClick = e => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    onMeasureChange(measureValue + ' ' + measure);
    document.addEventListener('click', handleOutsideClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, measure, measureValue]);

  return (
    <div className={css.itemArea}>
      <input
        className={css.inputMeasureValue}
        type="text"
        placeholder="4"
        name="value"
        onChange={handleMeasureValue}
        required
      ></input>
      <div ref={inputRef}>
        <input
          className={css.inputMeasure}
          type="text"
          placeholder="tbs"
          name="measure"
          value={measure}
          readOnly
          onFocus={handleInputFocus}
          required
        ></input>
        <Arrow className={css.dropdownIcon} onClick={handleInputFocus} />
      </div>
      {isOpen && (
        <div className={css.measures}>
          {measures.map((measure, index) => (
            <div key={index} onClick={() => handleOptionClick(measure)}>
              {measure}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IngredientsMeasureInput;
