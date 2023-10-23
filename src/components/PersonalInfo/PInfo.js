import React, { useState } from 'react';
import PImg from '../../assets/PImg.png';
import styles from './PInfo.module.css';

const PInfo = () => {
  const personalInfo = JSON.parse(localStorage.getItem('UserData'));
  const browse = JSON.parse(localStorage.getItem('category'));

  const Tags = ({ category }) => {
    return (
      <div
        className={styles.categoryContainer}
        style={{ overflowY: `${category.length > 4 ? 'scroll' : 'hidden'}` }}
      >
        {category.map((genre, index) => (
          <div key={index} className={styles.categoryTags}>
            {genre}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.PInfo}>
      <div className={styles.PInfoImg}>
        <img src={PImg} alt="PImg" />
      </div>
      <div className={styles.PInfodetails}>
        <p className={styles.PName}>{personalInfo.Name}</p>
        <p className={styles.PEmail}>{personalInfo.Email}</p>
        <p className={styles.PUser}>{personalInfo.UserName}</p>
        <Tags category={browse}></Tags>
      </div>
    </div>
  );
};

export default PInfo;
