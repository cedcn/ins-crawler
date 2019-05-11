import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'

export const allPostsQuery = gql`
  query AllPosts($username: String!) {
    posts(username: $username) {
      id
      display_url
    }
  }
`
export const allPostsQueryVars = {
  username: 'gosmoothorgohome',
}

export default function PostList() {
  return (
    <Query query={allPostsQuery} variables={allPostsQueryVars} ssr={false}>
      {({ loading, error, data, fetchMore }) => {
        if (error) return <ErrorMessage message="Error loading posts." />
        if (loading) return <div>Loading</div>
        return (
          <section>
            <ul>
              {data.posts.map((post, index) => {
                return (
                  <li key={index}>
                    <img src={post.display_url} />
                  </li>
                )
              })}
            </ul>
          </section>
        )
      }}
    </Query>
  )
}
