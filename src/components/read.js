import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';


class Read extends Component
{
    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        mymovies: []

    };

    componentDidMount(){
        axios.get('http://localhost:4000/api/movies')
        .then((res)=>{
            this.setState({mymovies: res.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    

    ReloadData(){
        axios.get('http://localhost:4000/api/movies')
        .then((res) => {
            this.setState({mymovies: res.data})
        })
        .catch((error)=>{
            console.log(error)
        });
    }

    
   
    render(){
        return(
            <div>
                <h1>This is my Read component!</h1>
                <Movies movies={this.state.mymovies}ReloadData={this.ReloadData}></Movies>
            </div>
        );
    }
}
export default Read;