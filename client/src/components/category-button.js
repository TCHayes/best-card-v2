import React from 'react';
import { Link } from 'react-router';
//import { connect } from 'react-redux';
import '../../public/css/main.css'

export default function CategoryButton(props) {

    const categories = props.categories.map((cat, index) => {
        const category = cat.charAt(0).toUpperCase() + cat.slice(1);
        return <li key={index}><Link to={`/category/${category}`}><button className='btn'>{category}</button></Link></li>;
    });


    return (
        <ul>
            {categories}
        </ul>
    );
}
