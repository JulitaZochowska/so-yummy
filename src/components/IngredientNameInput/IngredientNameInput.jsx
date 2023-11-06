import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as Arrow } from '../../images/dropdown-arrow-down.svg';
import css from './IngredientsNameInput.module.css';

const IngredientsNameInput = ({ options, onSelectionChange }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = event => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = options.filter(option =>
      option.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleOptionClick = value => {
    setInputValue(value.name);
    setIsOpen(false);
    onSelectionChange(value);
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleOutsideClick = event => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
  }, [filteredOptions]);

  return (
    <div className={css.itemArea} ref={inputRef}>
      <input
        className={css.inputName}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        placeholder="Name"
      />
      <Arrow className={css.dropdownIcon} onClick={handleInputFocus} />
      {isOpen && (
        <div className={css.categories}>
          {filteredOptions.map((option, index) => (
            <div key={index} onClick={() => handleOptionClick(option)}>
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IngredientsNameInput;
