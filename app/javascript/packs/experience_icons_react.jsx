import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class ExperienceIcons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "javascript-logo",
      imageIncrement: 0
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.next(),
      1200
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  next() {
    const images = ["javascript-logo", "ruby-logo", "git-logo", "react-logo"]
    var imageIncrement = this.state.imageIncrement < 3 ? this.state.imageIncrement + 1 : 0
    this.setState({
      image: images[this.state.imageIncrement],
      imageIncrement: imageIncrement
    });
  }

  render() {
    return (
      <div className={this.state.image} />
    );
  }
}

ReactDOM.render(
  <ExperienceIcons />,
  document.getElementById('experience-logos')
);
