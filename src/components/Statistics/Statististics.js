import PropTypes from 'prop-types';
import s from './Statistics.mobile.css';

export const Statistics = ({ title, stats }) => {
    return <section className={s.statistics}>
    <h2 className={s.title}>{title}</h2>
  
    <ul className={s.stat-list}>
      <li className={s.item}>
        <span className={s.label}>.docx</span>
        <span className={s.percentage}>{stats}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>.mp3</span>
        <span className={s.percentage}>{stats}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>.pdf</span>
        <span className={s.percentage}>{stats}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>.mp4</span>
        <span className={s.percentage}>{stats}</span>
      </li>
    </ul>
  </section>
};

Statistics.PropTypes = {
title: PropTypes.string.isRequired,
stats: PropTypes.number,
};