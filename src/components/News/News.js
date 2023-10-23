import React, { useState, useEffect } from 'react';
import styles from './News.module.css';

const News = () => {
  const [getNews, setGetNews] = useState('');
  const [date, setDate] = useState('');
  const [random] = useState(Math.ceil(Math.random() * 10));
  const options = {
    hour: 'numeric',
    minute: 'numeric',
  };
  // console.log(options);
  // console.log(getNews);

  useEffect(() => {
    const getNewsfetch = async () => {
      await fetch(
        'https://newsdata.io/api/1/news?apikey=pub_31277b6f72c6fa355598f9ad10565fe208a70&q=pizza'
      )
        .then(async (data) => await data.json())
        .then((res) => setGetNews(res.results[random]));
      // console.log(getNewsfetch);
    };
    getNewsfetch();
  }, []);

  useEffect(() => {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();

    const format = dd + '-' + mm + '-' + yyyy;
    setDate(format);
  }, []);
  return (
    <div className={styles.NewsContainer}>
      <div
        className={styles.NewsImg}
        alt="NewsImg"
        style={{ backgroundImage: `url(${getNews.image_url})` }}
      >
        <div className={styles.NewsTitle}>
          {getNews.title}
          <div className={styles.NewsTime}>
            <span>{date} |</span>
            {new Date(getNews.pubDate).toLocaleTimeString('en-us', options)}
          </div>
        </div>
      </div>
      <div className={styles.NewsDescription}>{getNews.description}</div>
    </div>
  );
};

export default News;
