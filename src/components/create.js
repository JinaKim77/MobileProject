import React from 'react';
import axios from 'axios';

class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = {Title: '', Year: '', Poster: ''};

    this.handleChangeMovieTitle = this.handleChangeMovieTitle.bind(this);
    this.handleChangeMovieYear = this.handleChangeMovieYear.bind(this);
    this.handleChangeMoviePoster = this.handleChangeMoviePoster.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeMovieTitle(event) {
    this.setState({Title: event.target.value});
  }

  
  handleChangeMovieYear(event) {
    this.setState({Year: event.target.value});
  }

  handleChangeMoviePoster(event) {
    this.setState({Poster: event.target.value});
  }

  handleSubmit(event) {
    alert('Movie name is :' + this.state.Title +", Year: "+ this.state.Year + ", Poster: "+this.state.Poster);
    event.preventDefault();

    const movieObject ={ title: this.state.Title, year : this.state.Year, poster :this.state.Poster}

    axios.post('http://localhost:4000/api/movies',movieObject).then().catch();
  }


  render() {
    return (
      <div>
        <h1>hello from create component  </h1>
        <form onSubmit={this.handleSubmit}>
          <div className='from-group'>
            <label>
              Add Movie title :
              <input type="text" className='form-control' value={this.state.Title} onChange={this.handleChangeMovieTitle} />
            </label>
          </div>

          <div className='from-group'>
            <label>
              Add Movie Year :
              <input type="text" className='form-control' value={this.state.Year} onChange={this.handleChangeMovieYear} />
            </label>
          </div>


          <div className='from-group'>
          <label>
            Movie Pster Url:
          </label>
          <textarea
            rows='3'
            className='form-control'
            value={this.state.Poster}
            onChange={this.handleChangeMoviePoster}>
          </textarea>
          </div>


          <div>
            <input type="submit" value="Submit"/>
          </div>

        </form>
      </div>
    );
  }

}

export default Create;