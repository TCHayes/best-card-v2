import React from 'react';
import { Link } from 'react-router';
import '../../public/css/main.css'

export default function CategoryButton(props) {

  const categories = props.categories.map((cat, index) => {
    const category = cat.charAt(0).toUpperCase() + cat.slice(1);
    return <li key={index}><Link to={`/category/${category}`}><button
      className={`btn cat-${category.toLowerCase()}`}>{category}</button></Link></li>;
  });

  return (
    <ul className='categories-list'>{categories}</ul>
  );
}
