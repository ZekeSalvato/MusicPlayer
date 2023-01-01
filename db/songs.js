const { client } = require('./client');

async function createSong({title, artist, image}) {
  try {
    const { rows: [song]} = await client.query(`
      INSERT INTO songs (title, artist, image)
      VALUES ($1, $2, $3)
      RETURNING *;
    `, [title, artist, image])
    
    return song;
  }
  catch(error) {
    console.log('error in createSongs adapter function')
    throw error
  }
}

async function fetchAllSongs(){
  console.log("fetch products")
  try {
    
    const {rows} = await client.query(`
      SELECT *
      FROM songs;
    `)
      console.log("done with query")
    return rows;
  } catch(error){
    console.log(error)
    throw error
  }
}



async function updateSong({id, ...fields}) {
  const setString = Object.keys(fields).map(

    (key, index) => {
      return `"${key}" =$${index +1} `
    });

    try {
      const {rows: [songs]} = await client.query(`
        UPDATE songs
        SET ${setString}
        WHERE id= ${id}
        RETURNING *;
      `, Object.values(fields));

      return songs;
    } catch(error){
        console.log("could not update product")
        throw error
    }
}

async function deleteSong(id) {
  try{
    const {rows: [songs]} = await client.query(`
      DELETE FROM songs
      WHERE id= $1
    `, [id]);

    return songs;
  } catch(error) {
    console.log("Error deleting product")
    throw error
  }
}

async function getSongById(id){
  try{
    const{rows: [song] } = await client.query(
        `
        SELECT * FROM songs
        WHERE id=$1;
        `, [id]
    )
    return song;
  }catch(error){
    throw error;
  }
}

module.exports = {
  createSong,
  updateSong,
  deleteSong,
  fetchAllSongs,
  getSongById
}
