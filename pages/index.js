import React, { PureComponent } from 'react'
import ApplicationLayout from '@components/ApplicationLayout'

import { Router } from '@routes'
import { Input } from 'antd'

const Search = Input.Search

export default class extends PureComponent {
  state = {
    username: null,
  }

  toSearchPosts = (username) => {
    Router.pushRoute('userPosts', { username })
  }

  render() {
    return (
      <ApplicationLayout>
        <div className="container">
          <Search
            placeholder="输入用户名"
            enterButton="Search"
            size="large"
            onSearch={(value) => this.toSearchPosts(value)}
          />
          <p>gosmoothorgohome</p>
        </div>
      </ApplicationLayout>
    )
  }
}
