import React from 'react';

const AllSongs = ()  => {
  const songs = [
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      title: "Master of Puppets",
      genre: "Metal" ,
      artist: "Metallica",
    },
    {
      _id: "5b21oca3eoeb7f6fbccd471815",
      title: "Wish You Were Here",
      genre: "Progressive Rock" ,
      artist: "Pink Floyd",
    },
    {
      _id: "5b2o1ca3eeb7f6fbccd471815",
      title: "Cemetary Gates",
      genre: "Metal" ,
      artist: "Pantera",
    }];

  return (
    songs.map((song) => (
      <div key={song._id}>
        <div>{song.title}</div>
        <div>{song.artist}</div>
        <div>{song.genre}</div>
      </div>
  )))
}

export default AllSongs;