import React from 'react'
import Article from "./Article"

function ArticleList({posts}) {
  console.log({posts})

  let articlesMultiLine = posts.map((post, i) => {
    return <Article title={post.title} date={post.date} preview={post.preview} id={post.id} minutes={post.minutes} key={post.id} />
    // return <Article key={post.id} post={post} />
  })

  return (
    <main>
      {articlesMultiLine}
    </main>
  )
}

export default ArticleList