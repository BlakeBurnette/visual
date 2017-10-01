import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class CuriousIcons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "erlang-logo",
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
    const images = ["erlang-logo", "python-logo"]
    var imageIncrement = this.state.imageIncrement < images.length - 1 ? this.state.imageIncrement + 1 : 0
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
  <CuriousIcons />,
  document.getElementById('curious-logos')
);
