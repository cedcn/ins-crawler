import { Query } from 'react-apollo'
import { Spin, Row, Col } from 'antd'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'

const allPostsQuery = gql`
  query AllPosts($username: String!) {
    posts(username: $username) {
      id
      display_url
    }
  }
`

const PostList = ({ username }) => {
  const allPostsQueryVars = {
    username,
  }

  return (
    <div>
      <style jsx>{`
        img {
          width: 100%;
          margin-bottom: 21px;
        }

        div :global(.ant-spin-container) {
          min-height: 100vh;
        }
      `}</style>
      <Query query={allPostsQuery} variables={allPostsQueryVars} ssr={false}>
        {({ loading, error, data, fetchMore }) => {
          if (error) return <ErrorMessage message="Error loading posts." />
          return (
            <Spin spinning={loading}>
              <Row gutter={21} type="flex">
                {data &&
                  data.posts &&
                  data.posts.map((post, index) => {
                    return (
                      <Col span={6} key={index}>
                        <img src={post.display_url} />
                      </Col>
                    )
                  })}
              </Row>
            </Spin>
          )
        }}
      </Query>
    </div>
  )
}

export default PostList
