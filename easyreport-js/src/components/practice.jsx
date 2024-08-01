import React from 'react'; // Import React if using JSX syntax

const Practice = (props) => {
    const {Name , price} = props
    return (

        <div className="Container">
            <h1>hello {Name} here is the price of your product {price}</h1>
        </div>
    );
};

export default Practice;
