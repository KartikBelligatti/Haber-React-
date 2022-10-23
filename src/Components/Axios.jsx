import React, { Component } from "react";
//npm install axios
import axios from "axios";
import { render } from "@testing-library/react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class Footer extends Component {
    state = { details: [] }
    //componentDidMount() - Mounting Phase -> trainees[] -> filled with https://fakestoreapi.com/users
    componentDidMount() {
        axios.get('https://fakestoreapi.com/products').then(
            res => {
                const details = res.data;
                this.setState({ details });
            }
        )
    }

render()
{
    return(

       

        <div className="row" style={{width:1100,paddingTop:50, paddingLeft:50, paddingLeft:50, marginLeft:200}}>
          <h2>Cards Fetched using Axios concepts with fake API </h2>
            {this.state.details.filter(details=>details.id<15).map(det =>
                <div className="col" key={det.id}>
                    <div className="card" style={{ }}>
                        <div className="card-body" style={{width:300,}}>
                            <img src={det.image} style={{ height: 100, width: 100 }}></img>
                            <hr></hr>
                            <h6 >{det.title}</h6>
                            <hr></hr>
                            <h3>₹ {det.price}</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>



    )
}
}