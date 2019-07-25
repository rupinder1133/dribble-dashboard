import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import styles from './accordion.module.scss';
import Button from "../button/Button";

const closedIcon = <div className={styles.controlIcons}>
  <FontAwesomeIcon icon={faCaretUp}/>
  <FontAwesomeIcon icon={faCaretDown}/>
</div>;

const openIcon = <div className={styles.controlIcons}>
  <FontAwesomeIcon icon={faCaretDown}/>
</div>;

class Accordion extends Component {
  state = {
    isOpen: false,
    isContentVisible: false,
  };

  componentDidMount() {
    this.setState({
      isOpen: !!this.props.header.isOpen,
      isContentVisible: !!this.props.header.isOpen,
    });
  }

  toggleOpen = () => {
    const {isOpen} = this.state;
    this.setState({isOpen: !isOpen});
    if(isOpen){
      setTimeout(() => this.setState({ isContentVisible: !isOpen }), 300);
    } else {
      this.setState({ isContentVisible: !isOpen });
    }
  };

  render() {
    const {header, options} = this.props;
    const {isOpen, isContentVisible} = this.state;

    return (
        <div className={styles.container}>
          <Button
              className={classNames(styles.option, styles.header, {
                [styles.isOpen]: isOpen,
              })}
              onClick={this.toggleOpen}
          >
            <FontAwesomeIcon
                icon={header.icon}
                className={styles.headerIcon}
            />
            <div className={styles.headerLabel}>{header.label}</div>
            <If condition={options}>
              {isOpen ? openIcon : closedIcon}
            </If>
          </Button>
          <If condition={options}>
            <div className={classNames(styles.options, {
              [styles.isOpen]: isOpen,
              [styles.isContentVisible]: isContentVisible,
            })}>
              {
                options.map(option => (
                    <Button key={option.label} className={styles.option}>{option.label}</Button>
                ))
              }
            </div>
          </If>
        </div>
    );
  }
}

Accordion.propTypes = {
  header: PropTypes.shape({
    icon: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
  }))
};

export default Accordion;
