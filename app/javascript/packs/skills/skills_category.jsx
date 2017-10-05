import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class SkillsCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <h5>{this.props.categoryName}</h5>
    );
  }
}
