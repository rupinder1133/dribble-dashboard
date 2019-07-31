import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Area, AreaChart} from "recharts";
import Widget from "../widget/Widget";
import Swing from "../swing/Swing";

import styles from './smallAreaChartWidget.module.scss'

const SmallAreaChartWidget = ({
                                title,
                                value,
                                swing,
                                stroke,
                                fill,
                              }) => {
  const data = [...Array(10)].map((e, index) => ({
    x: index + 1,
    y: Math.round(Math.random() * (100 - 50) + 50),
  }));

  return (
      <Widget className={styles.container}>
        <div className={classNames(styles.item, styles.title)}>{title}</div>
        <div className={classNames(styles.item, styles.value)}><strong>{value}</strong></div>
        <div className={classNames(styles.item)}><Swing swing={swing} /></div>
        <AreaChart
            width={150}
            height={40}
            data={data}
            className={styles.item}
        >
          <Area dataKey="y" stroke={stroke} fill={fill}/>
        </AreaChart>
      </Widget>
  );
};

SmallAreaChartWidget.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  swing: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

export default SmallAreaChartWidget;
