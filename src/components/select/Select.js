import React, {Component} from 'react';
import * as PropTypes from "prop-types";
import classNames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'

import styles from './select.module.scss';

class Select extends Component {
  state = {
    isOpen: false,
    selectedOptionIndex: 0,
  };

  toggleOpen = () => {
    const {isOpen} = this.state;
    this.setState({isOpen: !isOpen}, () => {
      if(this.state.isOpen){
        document.addEventListener('click', this.handleOutsideClick);
        document.addEventListener('keydown', this.handleEsc);
      } else {
        document.removeEventListener('click', this.handleOutsideClick);
        document.removeEventListener('keydown', this.handleEsc);
      }
    });
  };

  handleOutsideClick = (e) => {
    this.toggleOpen(e);
  };

  handleEsc = (e) => {
    if(e.key === 'Escape') {
      this.toggleOpen(e)
    }
  };

  selectOption = (e, index) => {
    const {
      options,
      onClick,
    } = this.props;

    this.setState({selectedOptionIndex: index}, this.toggleOpen);
    onClick && onClick(e, options[index]);
  };

  render() {
    const {
      options,
      placeHolder,
      className
    } = this.props;

    const {
      selectedOptionIndex,
      isOpen,
    } = this.state;

    const effectivePlaceholder = placeHolder || options[selectedOptionIndex].label;

    return (
        <div className={classNames(styles.select, className)}>
          <button
              className={styles.placeholder}
              onClick={this.toggleOpen}
          >
            <div className={styles.placeholderLabel}>{effectivePlaceholder}</div>
            <FontAwesomeIcon icon={isOpen ? faAngleDown : faAngleUp}/>
          </button>
          <If condition={isOpen}>
            <div className={classNames(styles.options)}>
              {options.map((option, index) =>
                  <button
                      key={option.value}
                      className={styles.option}
                      onClick={(e) => this.selectOption(e, index)}
                  >
                    {option.label}
                  </button>
              )}
            </div>
          </If>
        </div>
    )
  }
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.node,
  })),
};

export default Select;
