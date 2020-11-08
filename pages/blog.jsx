import { useRef } from "react"
import Router from 'next/router'

const { default: Layout } = require("../component/layout/layout.component")

const Blog = ({ blogPostList, url }) => {
  const textRef = useRef(null)

  if (url&& url.query && url.query.search && url.query.search.trim()) {
    blogPostList = blogPostList.filter(post => post.title.indexOf(url.query.search) >= 0 || post.body.indexOf(url.query.search) >= 0)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { value } = textRef.current

    Router.push(`/blog?search=${value}`)
    textRef.current.value = ''
    textRef.current.focus()
  }

  return (
    <Layout>
      <div>
        <h3>What's new?</h3>
        <form onSubmit={handleSubmit}>
          <input ref={textRef} type="text"/>
        </form>

        {blogPostList.map(({ title, body }, key) => {
          return (
            <div key={title}>
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

Blog.getInitialProps = async () => {
  let blogPostList;

  try {
    blogPostList = await (await fetch(`https://jsonplaceholder.typicode.com/posts`)).json()
  } catch(error) {
    console.log(`Error: `, error)
    blogPostList = []
  }

  return { blogPostList }
}

export default Blog
