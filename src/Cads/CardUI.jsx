import React from "react";
import "./card-style.css";

const Card = props => {
    return (
        <div className='card text-center shadow'>
            <div className='overflow'>
                <img src={props.imgsrc} alt="image 1" className='card-img-top' />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">The programming work is done for you, this tutorial focuses on using the local and remote Azure environments successfully from inside Visual Studio Code with Azure extensions.</p>
                <a href="#" className="btn btn-outline-success">Go Anywhere</a>
            </div>
        </div>

    );
}

export default Card;