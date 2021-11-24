import React, { Component } from 'react';
import MovieItem from './movieitem';

class Movies extends Component
{
    render(){
        return this.props.movies.map((movie)=>{
            return <MovieItem movie={movie}ReloadData={this.props.ReloadData}></MovieItem>
        })
    }
}
export default Movies;