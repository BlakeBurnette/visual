import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class SkillsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const listItems = []

    this.props.skillsList.forEach((list) => {
      if (list.skillsList !== null) {
        listItems.push(
          <li>{list.name}</li>
        )
      }
    })

    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}
