import SubredditCard from './SubredditCard'

const SubredditPosts = ({ posts }) => {
      return (
            <div>
                  {posts.map((post) => (
                        <SubredditCard key={post.data.id} post={post.data}/>
                  ))}
            </div>
      )
}

export default SubredditPosts
