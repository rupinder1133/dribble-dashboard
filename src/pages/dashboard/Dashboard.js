import React, {Component} from 'react';
import classNames from 'classnames';
import Widget from "../../components/widget/Widget";
import styles from './dashboard.module.scss';
import Dropdown from "../../components/dropdown/Dropdown";
import DailyVisitorsChart from "../../components/dailyVisitorsChart/DailyVisitorsChart";
import Loader from "../../components/loader/Loader";
import SmallAreaChartWidget from "../../components/smallAreaChart/SmallAreaChartWidget";

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

class Dashboard extends Component {
  state = {
    selectedMonth: 11,
    selectedYear: 2,
    isDailyVisitChartLoading: true,
    dailyVisitData: [],
  };

  componentDidMount() {
    this.genDailyVisitData();
  }

  genDailyVisitData = () => {
    this.setState({
      dailyVisitData: [...Array(31)].map((e, index) => ({
        x: index + 1,
        y: Math.round(Math.random() * (8500 - 1500) + 1500),
      }))
    }, this.markLoaded)
  };

  updateFilters = (updatedState) => {
    this.setState(updatedState, this.genDailyVisitData)
  };

  markLoaded = () => {
    const timeout = Math.round(Math.random() * 2000);
    setTimeout(() => this.setState({
      isDailyVisitChartLoading: false,
    }), timeout)
  };

  render() {
    const {selectedMonth, selectedYear, isDailyVisitChartLoading, dailyVisitData} = this.state;

    return (
        <div>
          <Widget>
            <div className={styles.header}>
              <strong>Daily Visitors</strong>
              <div className={styles.filterOptions}>
                <Dropdown
                    options={months}
                    selectedValue={months[selectedMonth].value}
                    className={classNames(styles.filter, styles.months)}
                    onClick={(value, index) => this.updateFilters({selectedMonth: index, isDailyVisitChartLoading: true})}
                />
                <Dropdown
                    options={years}
                    selectedValue={years[2].value}
                    className={classNames(styles.filter)}
                    onClick={(value, index) => this.updateFilters({selectedYear: index, isDailyVisitChartLoading: true})}
                />
              </div>
            </div>
            <div className={styles.chartContainer}>
              <Loader isLoading={isDailyVisitChartLoading}>
                <DailyVisitorsChart
                    data={dailyVisitData}
                    month={months[selectedMonth].label}
                    year={years[selectedYear].label}
                    height={200}
                    ticks={[0, 3000, 6000, 9000]}
                    domain={[0, 9000]}
                />
              </Loader>
            </div>
          </Widget>

          <div className={styles.smallWidgets}>
              <SmallAreaChartWidget title="realtime users" value={56} swing={9.8} stroke="#1e69d4" fill="#e7eff9"/>
              <SmallAreaChartWidget title="total visits" value={Intl.NumberFormat('en-IN').format(54598)} swing={-11.9} stroke="#40ac4f" fill="#eaf6ec"/>
              <SmallAreaChartWidget title="bounce rate" value="73.67 %" swing={12.2} stroke="#7269f0" fill="#efeefd"/>
              <SmallAreaChartWidget title="visit duration" value="1m 4s" swing={19.6} stroke="#f9d169" fill="#fefaef"/>
          </div>
        </div>
    )
  }
}

export default Dashboard;
