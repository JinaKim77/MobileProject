import React from 'react';
import Card from 'react-bootstrap/Card';

class MovieItem extends React.Component {

  render(){
    return (
      <div>
        {/* <h4> {this.props.movie.Title}  </h4>
          <h4> {this.props.movie.Year}  </h4>
    <img src={this.props.movie.Poster}></img>*/}

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{this.props.movie.Title}</Card.Title>
    <Card.Text>
    {this.props.movie.Year}
    </Card.Text>
    <img src={this.props.movie.Poster}></img>
    <footer>
    {this.props.movie.Poster}
    </footer>
  </Card.Body>
</Card>
      </div>
    );
  }
 
}

export default MovieItem;