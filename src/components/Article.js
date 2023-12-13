import React from 'react'

function readMin(min) {
  if(min < 30){
    return "☕️".repeat(Math.round(min/5))
  } else {
    return "🍱".repeat(Math.round(min/10))
  }
}

function Article(props) {

  console.log(readMin(12))

const {title, date, preview, id, minutes} = props
  console.log(props)
  console.log("id: ", id)
  console.log(title, date, preview, id, minutes)

  return (
    <article key={id}>
      <h3>{title}</h3>
      <small>{date ? date : "January 1, 1970"} . {readMin(minutes)} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article