import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <div>
             <button onClick={props.onClick}
                     type={props.type}
                     className={props.className}
                     aria-label={props.label}>
             </button>
        </div>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default Button;