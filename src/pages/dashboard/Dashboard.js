import React from 'react';
import Widget from "../../components/widget/Widget";
import styles from './dashboard.module.scss';
import Dropdown from "../../components/dropdown/Dropdown";

const months = [
  { value: 'jan', label: 'January' },
  { value: 'feb', label: 'February' },
  { value: 'mar', label: 'March' },
  { value: 'apr', label: 'April' },
  { value: 'may', label: 'May' },
  { value: 'jun', label: 'June' },
  { value: 'jul', label: 'July' },
  { value: 'aug', label: 'August' },
  { value: 'sep', label: 'September' },
  { value: 'oct', label: 'October' },
  { value: 'nov', label: 'November' },
  { value: 'dec', label: 'December' },
];

const years = [
  { value: '15', label: '2015' },
  { value: '16', label: '2016' },
  { value: '18', label: '2018' },
  { value: '19', label: '2019' },
];

const Dashboard = () => {
  return (
      <div>
        <Widget className={styles.headerWidget}>
          <div className={styles.header}>
            <strong>Daily Visitors</strong>
            <div className={styles.filterOptions}>
              <Dropdown options={months} selectedValue={months[11].value} className={styles.months}/>
              <Dropdown options={years} selectedValue={years[2].value} />
            </div>
          </div>
        </Widget>
      </div>
  )
};

export default Dashboard;
