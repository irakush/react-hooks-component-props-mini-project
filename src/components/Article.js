import React from 'react'

function Article(props) {

const {title, date, preview, id } = props
  console.log(props)
  console.log("id: ", id)
  console.log(title, date, preview, id)

  return (
    <article key={id}>
      <h3>{title}</h3>
      <small>{date ? date : "January 1, 1970"}</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article