import React, {Component} from 'react';
import * as PropTypes from "prop-types";
import classNames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons'

import Button from "../button/Button";
import styles from './dropdown.module.scss';

const closedIcon = <div className={styles.controlIcons}>
  <FontAwesomeIcon icon={faCaretUp}/>
  <FontAwesomeIcon icon={faCaretDown}/>
</div>;

const openIcon = <div className={styles.controlIcons}>
  <FontAwesomeIcon icon={faCaretDown}/>
</div>;

class Dropdown extends Component {
  constructor(props) {
    super(props);

    const mayBeSelectedOptionIndex = props.options.findIndex(o => o.value === props.selectedValue);
    const selectedOptionIndex = mayBeSelectedOptionIndex === -1 ? 0 : mayBeSelectedOptionIndex;

    this.state = {
      isOpen: true,
      selectedOptionIndex,
      expandOptionsToFullWidth: false,
    };
  }

  componentDidMount() {
    const {maxOptions} = this.props;

    const optionHeight = this.optionsRef.children[0].clientHeight;
    const maxOptionWidth = Array.from(this.optionsRef.children)
        .map(o => o.clientWidth)

        .reduce((max, value) => max > value ? max : value, 0);

    this.optionsRef.style.maxHeight = `${(maxOptions * optionHeight) + optionHeight / 2}px`;
    this.containerRef.style.minWidth = `${maxOptionWidth + 30}px`;
    this.setState({isOpen: false, expandOptionsToFullWidth: true });
  }

  toggleOpen = () => {
    const {isOpen} = this.state;
    this.setState({isOpen: !isOpen}, () => {
      if (this.state.isOpen) {
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
    if (e.key === 'Escape') {
      this.toggleOpen(e)
    }
  };

  selectOption = (e, index) => {
    const {
      options,
      onClick,
    } = this.props;

    this.setState({selectedOptionIndex: index}, this.toggleOpen);
    onClick && onClick(options[index].value, index);
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
      expandOptionsToFullWidth,
    } = this.state;

    const effectivePlaceholder = placeHolder || options[selectedOptionIndex].label;

    return (
        <div
            className={classNames(styles.select, className)}
            ref={ref => {this.containerRef = ref;}}
        >
          <Button
              className={classNames(styles.placeholder, { [styles.fullWidth]: expandOptionsToFullWidth })}
              onClick={this.toggleOpen}
          >
            <div className={styles.placeholderLabel}>{effectivePlaceholder}</div>
            {isOpen ? openIcon : closedIcon}
          </Button>
          <div
              className={classNames(styles.options, {[styles.isOpen]: isOpen})}
              ref={ref => {
                this.optionsRef = ref;
              }}
          >
            {options.map((option, index) =>
                <Button
                    key={option.value}
                    className={classNames(styles.option, { [styles.fullWidth]: expandOptionsToFullWidth })}
                    onClick={(e) => this.selectOption(e, index)}
                >
                  {option.label}
                </Button>
            )}
          </div>
        </div>
    )
  }
}
Dropdown.defaultProps = {
  maxOptions: 5,
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.node,
  })),
  selectedValue: PropTypes.string,
  className: PropTypes.string,
  maxOptions: PropTypes.number.isRequired,
};

export default Dropdown;
