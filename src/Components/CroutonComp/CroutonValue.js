// Component that take heading and content as props and display on the page accordingly
import React from 'react';
import './styles.css';
import PropTypes from 'prop-types'; // To mark proptyes reuired for this component.


const CroutonValue = (props) => {
  return (
    <div className="main">
      <h2 className="mainHeading">{props.heading}</h2>
      <p className="mainContent">{props.content}</p>
    </div>
  );
};

export default CroutonValue;

CroutonValue.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
