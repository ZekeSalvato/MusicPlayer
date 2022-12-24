import React from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'

const AllSongs = () => {
  const songs = [
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      title: "Master of Puppets",
      genre: "Metal",
      artist: "Metallica",
      audio: "https://youtu.be/6xjJ2XIbGRk"
    },
    {
      _id: "5b21oca3eoeb7f6fbccd471815",
      title: "Wish You Were Here",
      genre: "Progressive Rock",
      artist: "Pink Floyd",
      audio: "https://youtu.be/6xjJ2XIbGRk"

    },
    {
      _id: "5b2o1ca3eeb7f6fbccd471815",
      title: "Cemetary Gates",
      genre: "Metal",
      artist: "Pantera",
      audio: "https://youtu.be/6xjJ2XIbGRk"

    }];

  return (
    <div>
      {songs ? ( 
         <Row>
       { songs.map((song) => (
      <Col>
          <Card style={{ margin: "5px" }}>
            <Card.Header>{song.artist}</Card.Header>
            <Card.Body>
              <Card.Title>{song.audio}</Card.Title>
              <Card.Text>{song.artist}</Card.Text>
              <Card.Text> {song.genre}</Card.Text>
            </Card.Body>
          </Card>
          </Col>
        )) }
        </Row>
       ) :
        (<></>)}
    </div>)
}

export default AllSongs;