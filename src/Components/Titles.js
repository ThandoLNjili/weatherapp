import React from 'react';

//Titles function displays information about the website
const Titles = () => {
    return (
        <div>
            <h1 className="title-container__title">Weather APP </h1>
            <p className="title-container__subtitle"> Get your city's weather conditions...  </p>
        </div>
    )
}

//exported for use on other components
export default Titles;