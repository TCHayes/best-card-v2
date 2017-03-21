import React from 'react';
import { Link } from 'react-router';
//import { connect } from 'react-redux';

export default function CategoryButton(props) {

    //Hard coded examples for testing
    //data will come from async action calling /api/cards endpoint
    const data = ['gas', 'groceries', 'restaurants', 'travel', 'other'];
    //const data = Object.keys(props.data[0].categories)

    const categories = data.map((cat, index) => {
        const category = cat.charAt(0).toUpperCase() + cat.slice(1);
        return <li key={index}><Link to={`/${category}`}>{category}</Link></li>;
    });


    return (
        //style is added here for testing - needs to be handled in css
        <ul style={{listStyle: 'none'}}>
            {categories}
        </ul>
    );
}
