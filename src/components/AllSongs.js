import React from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import './CSS/AllSongs.css'
import ReactAudioPlayer from 'react-audio-player'

const AllSongs = () => {
  const songs = [
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      title: "Master of Puppets",
      genre: "Metal",
      artist: "Metallica",
      audio: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Post%20Malone%20-%20rockstar%20ft.%2021%20Savage%20(1).mp3",
      cover: "https://upload.wikimedia.org/wikipedia/en/b/b2/Metallica_-_Master_of_Puppets_cover.jpg"
    },
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      title: "Master of Puppets",
      genre: "Metal",
      artist: "Metallica",
      audio: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Post%20Malone%20-%20rockstar%20ft.%2021%20Savage%20(1).mp3",
      cover: "https://upload.wikimedia.org/wikipedia/en/b/b2/Metallica_-_Master_of_Puppets_cover.jpg"
    },
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      title: "Master of Puppets",
      genre: "Metal",
      artist: "Metallica",
      audio: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Post%20Malone%20-%20rockstar%20ft.%2021%20Savage%20(1).mp3",
      cover: "https://upload.wikimedia.org/wikipedia/en/b/b2/Metallica_-_Master_of_Puppets_cover.jpg"
    },
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      title: "Master of Puppets",
      genre: "Metal",
      artist: "Metallica",
      audio: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Post%20Malone%20-%20rockstar%20ft.%2021%20Savage%20(1).mp3",
      cover: "https://upload.wikimedia.org/wikipedia/en/b/b2/Metallica_-_Master_of_Puppets_cover.jpg"
    },
    {
      _id: "5b21oca3eoeb7f6fbccd471815",
      title: "Wish You Were Here",
      genre: "Progressive Rock",
      artist: "Pink Floyd",
      audio: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Post%20Malone%20-%20rockstar%20ft.%2021%20Savage%20(1).mp3",
      cover: "https://faroutmagazine.co.uk/static/uploads/2019/05/%E2%80%98Wish-You-Were-Here%E2%80%99-%E2%80%93-Pink-Floyd-cover-meaning.jpg"

    },
    {
      _id: "5b2o1ca3eeb7f6fbccd471815",
      title: "Cemetary Gates",
      genre: "Metal",
      artist: "Pantera",
      audio: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Post%20Malone%20-%20rockstar%20ft.%2021%20Savage%20(1).mp3",
      cover: "https://t2.genius.com/unsafe/576x576/https%3A%2F%2Fimages.genius.com%2F4c3bda69a6bb91ce223cd916041074b1.800x800x1.jpg"

    }];

  return (
    <div>
      {songs ? (
        <Row>
          {songs.map((song) => (
            <Col>
              <Card style={{ margin: "5px" }}>
                <Card.Img variant="top" src={song.cover} />

                <Card.Header>
                  <ReactAudioPlayer
                    src={song.audio}
                    autoPlay
                    controls
                  />
                </Card.Header>
                <Card.Body>
                  <Card.Title>{song.artist}</Card.Title>
                  <Card.Text> <div id="audioplayer">
                    <i id="pButton" class="fas fa-play"></i>
                    <div id="timeline">
                      <div id="playhead"></div>
                    </div>
                  </div></Card.Text>
                  <Card.Text> {song.genre}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )
        :
        (
          <>
          </>
        )
      }
    </div>
  )
}

export default AllSongs;