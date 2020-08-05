import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import Input from '../InputHandler/InputHandler';

class FilmPoster extends Component {
  state = {
    posters: [],
    input: []
  }

  componentDidMount () {
    axios.get(`https://www.omdbapi.com/?apikey=7d40e9d8&t=${Input.input}`)
    .then(res => {
      this.setState({posters: res.data})
      // console.log(input);
    });
  }

  inputRetrieve () {
    axios.get(``)
  }

  render() {
    const title = this.state.posters.Title;
    const poster = this.state.posters.Poster;
    return (
      <div className="App">
        <h1>Cinema Hunter</h1>
        <h2>{title}</h2>
        <img src={poster} alt=""/>
      </div>
    );
  }
}

export default FilmPoster;
