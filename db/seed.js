const { client } = require('./client')

const { createSong, fetchAllSongs } = require('./songs')
const { createUser } = require('./users')

async function dropTables() {
  try {
    console.log('Dropping Tables')
    // add code here
    await client.query(`
      DROP TABLE IF EXISTS users;
      DROP TABLE IF EXISTS songs;
     

  
    `)
    
    console.log('Finished Dropping Tables')
  } 
  catch(error) {
    console.log('error dropping tables')
    throw error
  }
}

async function createTables() {
  try {
    console.log('Creating Tables')
    // add code here
    await client.query(`
      CREATE TABLE songs (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        artist VARCHAR(255),
        image VARCHAR(255)
      );
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(225) NOT NULL
        
      );

    
    
    `)
    
    console.log('Finished Creating Tables')
  } 
  catch(error) {
    console.log('error creating tables')
    throw error
  }
}

async function createInitialSongs() {
  try {
    console.log('Creating Products')
    await createSong({
      title:
        "One",
      artist:
        "Metallica",
        image:
        "https://s7d5.scene7.com/is/image/PaperSource/196940324396?resMode=sharp2&op_usm=1,1,25,1&fmt=jpg&qlt=70&fit=constrain,1&wid=170&hei=170"
    });
    
    
    await createSong({
      title:
        "Wish You Were Here",
      artist:
        "Pink Floyd",
        image: "https://i.etsystatic.com/6017061/r/il/61efc2/1143636323/il_fullxfull.1143636323_6erb.jpg"
    });

 
    const products = await fetchAllSongs();
    console.log(products)
    console.log('Finished creating Products')
  } 
  catch(error) {
    console.log('error creating Products')
    throw error
  }
}

async function createInitialUsers() {
  console.log("Creating users")
  try{
    const adminList = [
      {username: "Zeke", password: "password", isAdmin: true},
      {username: "Sarah", password: "bobdylan", isAdmin: true}

    ]
    const admins = await Promise.all(adminList.map(async (user) => {
      const result = await createUser(user)
      console.log(result)
      return result;
    }))
  } catch(error){
    console.log("Failed to make admin")
    throw error
  }
}
async function buildDB() {
  try {
    // need to add something here
    client.connect();
    await dropTables();
    await createTables();
    await createInitialSongs();
    await createInitialUsers();
  }
  catch(error) {
    console.log('Error building the DB')
    throw error
  }
}


buildDB()
  .catch(console.error)
  .finally(() => client.end())

  //test