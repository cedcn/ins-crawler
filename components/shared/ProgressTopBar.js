import React from 'react'
import { Router } from '@routes'
import ProgressBar from 'react-progress-bar-plus'

class ProgressTopBar extends React.Component {
  state = {
    percent: -1,
  }

  onRouteChangeStart = () => {
    this.setState({ percent: 50 })
  }
  onRouteChangeComplete = () => {
    this.setState({ percent: 100 })
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', this.onRouteChangeStart)
    Router.events.on('routeChangeComplete', this.onRouteChangeComplete)
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.onRouteChangeStart)
    Router.events.off('routeChangeComplete', this.onRouteChangeComplete)
  }

  render() {
    return <ProgressBar percent={this.state.percent} spinner={false} autoIncrement />
  }
}

export default ProgressTopBar
