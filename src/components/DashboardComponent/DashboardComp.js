import React from 'react';
import PersonalInfo from '../PersonalInfo/PInfo';
import Weather from '../Weather/Weather';
import News from '../News/News';
import styles from './DashboardComp.module.css';
import Notes from '../Notes/Notes';
import Timer from '../Timer/Timer';
import { useNavigate } from 'react-router-dom';

const DashboardComp = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/entertainment');
  };
  return (
    <div className={styles.DashboardContainer}>
      <div>
        <PersonalInfo />
        <Weather />
        <Timer />
      </div>

      <Notes />

      <div className={styles.DashboardNews}>
        <News />
        <button className={styles.BrowseButton} onClick={handleClick}>
          Browse
        </button>
      </div>
    </div>
  );
};

export default DashboardComp;
