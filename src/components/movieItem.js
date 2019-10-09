import React from 'react';
import Card from 'react-bootstrap/Card';

class MovieItem extends React.Component {

    render() {
        return (
            <div>
                {/* <h4> {this.props.movie.Title}  </h4>
                    <h4> {this.props.movie.Year}  </h4>
                    <img src={this.props.movie.Poster}></img>*/}

                <Card border="dark" bg="warning" style={{ width: '25rem', height: '50rem' }}>
                    <Card.Img variant="top" src={this.props.movie.Poster} />
                    <Card.Body>
                        <Card.Title>{this.props.movie.Title}</Card.Title>
                        <Card.Text>
                            {this.props.movie.Year}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }

}

export default MovieItem;