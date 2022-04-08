/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

export default class ErrorBoundary extends Component {
  componentDidCatch(err) {
    // eslint-disable-next-line no-console
    console.error(err, 'Something went wrong');
  }

  render() {
    return this.props.children;
  }
}
