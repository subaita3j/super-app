import React, { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import sound from '../../assets/mixkit-bell-ring-buzzer-2962.wav';
import up from '../../assets/up.png';
import down from '../../assets/down.png';
import styles from './Timer.module.css';

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const increaseHour = () => {
    if (hours === 23) {
      return;
    }
    setHours((hours) => hours + 1);
  };
  const increaseMinute = () => {
    if (minutes === 59) {
      return;
    }
    setMinutes((minutes) => minutes + 1);
  };
  const increaseSecond = () => {
    if (seconds === 59) {
      return;
    }
    setSeconds((seconds) => seconds + 1);
  };
  const decreaseHour = () => {
    if (hours === 0) {
      return;
    }
    setHours((hours) => hours - 1);
  };
  const decreaseMinute = () => {
    if (minutes === 0) {
      return;
    }
    setMinutes((minutes) => minutes - 1);
  };
  const decreaseSecond = () => {
    if (seconds === 0) {
      return;
    }
    setSeconds((seconds) => seconds - 1);
  };

  const format = (value) => {
    return value < 10 ? `0${value}` : value;
  };
  const toHoursAndMinutes = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
  };
  const play = () => {
    new Audio(sound).play();
  };

  return (
    <div className={styles.timerContainer}>
      <div className={styles.timerCountdown}>
        <div className={styles.timerOuterCircle}></div>
        <CountdownCircleTimer
          key={completed ? 'playing' : 'stop'}
          isPlaying={playing}
          duration={seconds + minutes * 60 + hours * 60 * 60}
          colors={completed ? ['#fff'] : ['#FF6A6A']}
          strokeWidth="7"
          onComplete={() => {
            setPlaying(false);
            setCompleted(true);
            play();
          }}
        >
          {({ remainingTime }) => (
            <span className={styles.Time}>
              {completed ? 'OVER' : toHoursAndMinutes(remainingTime)}
            </span>
          )}
        </CountdownCircleTimer>
      </div>
      <div className={styles.TimerClockContainer}>
        <div className={styles.TimerClock}>
          <div className={styles.TimerCount}>
            <p>Hours</p>
            <img src={up} onClick={increaseHour} alt="up" />
            <p>{format(hours)}</p>
            <img src={down} onClick={decreaseHour} alt="down" />
          </div>
          <h1>:</h1>
          <div className={styles.TimerCount}>
            <p>Minutes</p>
            <img src={up} onClick={increaseMinute} alt="up" />
            <p>{format(minutes)}</p>
            <img src={down} onClick={decreaseMinute} alt="down" />
          </div>
          <h1>:</h1>
          <div className={styles.TimerCount}>
            <p>Seconds</p>
            <img src={up} onClick={increaseSecond} alt="up" />
            <p>{format(seconds)}</p>
            <img src={down} onClick={decreaseSecond} alt="down" />
          </div>
        </div>
      </div>
      <button
        className={styles.StartStop}
        onClick={() => {
          if (completed) {
            setCompleted(false);
            setPlaying(false);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
          } else {
            setPlaying((play) => !play);
          }
        }}
      >
        {completed ? <p>Reset</p> : playing ? <p>Pause</p> : <p>Start</p>}
      </button>
    </div>
  );
};

export default Timer;
