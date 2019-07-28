import React from 'react';
import {Bar, BarChart, CartesianGrid, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import PropTypes from 'prop-types';
import styles from './dailyVisitorsChart.module.scss';

const gridColor = "#e2e5ee";
const barColor = "#1d68d5";
const tickColor = '#93949a';

const tickFormatter = (value) => value ? `${value / 1000}K` : '';

const RenderTooltip = ({active, payload, label, month, year}) => (
    <If condition={active}>
      <div className={styles.tooltipContainer}>
        <div className={styles.date}>{label} {month} {year}</div>
        <div className={styles.visitsContainer}>
          <div className={styles.legend}/>
          <div className={styles.label}>Visitors</div>
          <div><strong>{payload[0].value}</strong></div>
        </div>
      </div>
    </If>
);

const RenderCursor = (props) => (
    <Rectangle
        x={props.x + (props.width / 2) - 2}
        y={props.y}
        width={2}
        height={props.height}
        fill={gridColor}
    />
);

const DailyVisitorsChart = ({data, month, year, height, ticks, domain, barSize}) =>
    <ResponsiveContainer width="100%" height={height} className="dailyVisitorsChart">
      <BarChart data={data} barSize={barSize}>
        <CartesianGrid
            stroke={gridColor}
            vertical={false}
        />
        <XAxis
            dataKey="x"
            axisLine={false}
            tickLine={false}
            tick={{fill: tickColor, fontSize: 10}}
            tickMargin={5}
        />
        <YAxis
            ticks={ticks}
            tickFormatter={tickFormatter}
            orientation="right"
            axisLine={false}
            tickLine={{stroke: gridColor}}
            tickSize={18}
            width={25}
            tick={{fill: tickColor, fontSize: 10, dy: 15}}
            tickMargin={-16}
            domain={domain}
        />
        <Tooltip content={<RenderTooltip month={month} year={year}/>} cursor={<RenderCursor/>}/>
        <Bar dataKey="y" fill={barColor}/>
      </BarChart>
    </ResponsiveContainer>;


DailyVisitorsChart.defaultProps = {
  barSize: 12,
};
DailyVisitorsChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  })),
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  barSize: PropTypes.number.isRequired,
  ticks: PropTypes.arrayOf(PropTypes.number),
  domain: PropTypes.arrayOf(PropTypes.number),
};

export default DailyVisitorsChart;
