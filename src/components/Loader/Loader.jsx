import React from 'react';
import { ProgressBar } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';

export const Loader = () => (
  <div className={css.BoxForLoader}>
    <ProgressBar
      height="250px"
      width="250px"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="rgba(139, 170, 54, 1)"
      barColor="rgba(139, 170, 54, 1)"
    />
  </div>
);
