import React from 'react';
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import Widget from "../../components/widget/Widget";
import styles from './dashboard.module.scss';
import Dropdown from "../../components/dropdown/Dropdown";

const months = [
  {value: 'jan', label: 'January'},
  {value: 'feb', label: 'February'},
  {value: 'mar', label: 'March'},
  {value: 'apr', label: 'April'},
  {value: 'may', label: 'May'},
  {value: 'jun', label: 'June'},
  {value: 'jul', label: 'July'},
  {value: 'aug', label: 'August'},
  {value: 'sep', label: 'September'},
  {value: 'oct', label: 'October'},
  {value: 'nov', label: 'November'},
  {value: 'dec', label: 'December'},
];

const years = [
  {value: '15', label: '2015'},
  {value: '16', label: '2016'},
  {value: '18', label: '2018'},
  {value: '19', label: '2019'},
];

const data = [...Array(31)].map((e, index) => ({
  x: index + 1,
  y: Math.round(Math.random() * (8500 - 1500) + 1500),
}));


const tickFormatter = (value) => `${value / 1000}k`;

const Dashboard = () => {
  return (
      <div>
        <Widget className={styles.headerWidget}>
          <div className={styles.header}>
            <strong>Daily Visitors</strong>
            <div className={styles.filterOptions}>
              <Dropdown options={months} selectedValue={months[11].value} className={styles.months}/>
              <Dropdown options={years} selectedValue={years[2].value}/>
            </div>
          </div>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height={200} className="dailyVisitorsChartContainer">
              <BarChart data={data} barSize={12}>
                <CartesianGrid
                    stroke="#e2e5ee"
                    vertical={false}
                    className="ola"
                />
                <XAxis
                    dataKey="x"
                    axisLine={false}
                    tickLine={false}
                    tick={{fill: '#93949a', fontSize: 10}}
                    tickMargin={5}
                />
                <YAxis
                    ticks={[3000, 6000, 9000]}
                    tickFormatter={tickFormatter}
                    orientation="right"
                    axisLine={false}
                    tickLine={false}
                    width={20}
                    className={styles.font}
                    tick={{fill: '#93949a', fontSize: 10}}
                />
                <Tooltip cursor={false}/>
                <Bar dataKey="y" fill="#1D68D5"/>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Widget>
      </div>
  )
};

export default Dashboard;
