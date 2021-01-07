import React from 'react'

const Book = (props)=>{ 
  const {image,title,author} = props;
  return(
    <article className="book">
        <img className="book__image" src={image} alt="book"/>
        <h1 className="book__title">{title}</h1>
        <h3 className="book__author">{author}</h3>
    </article>
  )
}

export default Book
