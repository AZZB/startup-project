import React, { Component } from 'react';



const Authentication = (WrappedComponent) => class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
    };
  }

  componentDidMount() {
    this.setState({isLogged: this.props.isLogged})
  }

  render() {
    return <WrappedComponent isLogged={this.state.isLogged} {...this.props} />
  }

}
