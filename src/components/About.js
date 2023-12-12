import React from "react"

function About(props) {

  const imageLink = props.image ? props.image : "https://via.placeholder.com/215"

  return (
    <aside>
      <img src={imageLink} alt="blog logo"></img>
      <p>{props.about}</p>
    </aside>
  )
}

export default About