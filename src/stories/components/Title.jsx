import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

/**
 * Primary UI component for user interaction
 */
export const Title = ({title, description, titleColor}) => (
  <div className="container">
    <h1 style={{color: titleColor}} className="title">{title}</h1>
    <h3 className="description">{description}</h3>
  </div>
)

Title.propTypes = {
  /**
   * Title decription dssd
   */
  title: PropTypes.string,
    /**
   * description decription dssd
   */
  description: PropTypes.string,
  titleColor:  PropTypes.string,
}

Title.defaultProps = {
  title: "Title Here",
  description: "Description Here",
  titleColor: "#000000"
}