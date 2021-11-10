import React from 'react';
import PropTypes from 'prop-types';

function CheckBox({ boolean = false }) {
  return boolean && (<input type="checkbox" name="" id="" />);
}

CheckBox.propTypes = {
  boolean: PropTypes.bool.isRequired,
};

export default CheckBox;
