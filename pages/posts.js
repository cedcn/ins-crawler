import React, { PureComponent } from 'react'
import ApplicationLayout from '@components/ApplicationLayout'
import PostList from '@components/Home/PostList'

export default class extends PureComponent {
  static async getInitialProps({ query }) {
    return { username: query.username }
  }

  render() {
    return (
      <ApplicationLayout>
        <div className="container">
          <PostList username={this.props.username} />
        </div>
      </ApplicationLayout>
    )
  }
}
