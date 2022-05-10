import React from 'react'

/* **Method 1**
const Book = () => {
  return <article className='book'> 
    <Image></Image>
    <Title/>
    <Author/>
  </article>
}

const Image =() => {
  return <img src="https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg" alt="" />
}

const Title = () => {
  return <h2>Cracking the Coding Interview: 189 Programming Questions and Solutions 6th Edition</h2>
}

const Author = () => {
  return <h4>Gayle Laakmann McDowell</h4>
} */


/* Method 2 */
export const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
