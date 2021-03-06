import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

class Button extends Component {
  state = {
    inFocus: false,
  };

  onFocus = () => {
    this.setState({inFocus: true});
  };

  onBlur = () => {
    return this.setState({inFocus: false});
  };

  render() {
    const {children, className, onClick, onFocusClassName} = this.props;
    const {inFocus} = this.state;

    return (
        <button
            className={classNames(
                styles.button,
                className,
                {
                  [styles.btnFocus]: inFocus,
                  [onFocusClassName]: inFocus,
                },
            )}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onMouseUp={this.onBlur}
            onMouseDown={this.onFocus}
            onClick={onClick}
        >
          {children}
        </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  onFocusClassName: PropTypes.string,
};

export default Button;
