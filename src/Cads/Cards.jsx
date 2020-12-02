import React, { Component } from 'react'
import Card from './CardUI';
import img1 from '../Assets/image1.jpg';
import img2 from '../Assets/image2.jpg';
import img3 from '../Assets/image3.jpg';

class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Console" />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="Adventure" />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="Playground" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;