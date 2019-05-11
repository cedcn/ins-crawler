import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ProgressTopBar from '@components/shared/ProgressTopBar'

import Head from './shared/Head'

class ApplicationLayout extends Component {
  render() {
    const { description, title, children, className } = this.props

    return (
      <div className={classNames('page', className)} onTouchStart={() => {}}>
        <Head title={title} description={description} />
        <ProgressTopBar />
        {children}
      </div>
    )
  }
}

ApplicationLayout.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default ApplicationLayout
