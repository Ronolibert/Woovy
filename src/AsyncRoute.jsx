// @flow
import React, { Component } from 'react';

class AsyncRoute extends Component {
  state = {
    loaded: false
  };
  componentDidMount() {
    this.props.loadingPromise.then(module => {
      this.component = module.default;
      this.setState({ loaded: true });
    });
  }
  component = null;
  props: {
    props: mixed,
    loadingPromise: Promise<{ default: Class<React.Component<*, *, *>> }>
  };
  render() {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />;
    }
    return <h1>Loading...</h1>;
  }
}

export default AsyncRoute;
