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
        description VARCHAR(255),
        price INTEGER,
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
        "Tamagotchi",
        price: "25",
      description:
        "Bring back ALL the 90s memories with the infamous pocket friend",
        image:
        "https://s7d5.scene7.com/is/image/PaperSource/196940324396?resMode=sharp2&op_usm=1,1,25,1&fmt=jpg&qlt=70&fit=constrain,1&wid=170&hei=170"
    });
    
    await createSong({
      title:
        "Etch A Sketch",
        price: "15",
      description:
        "Draw the world around you, your friends, or your favorite TV characters with Etch A Sketch ",
        image: "https://target.scene7.com/is/image/Target/GUEST_e055f62d-3bf3-4f83-b8c2-f9f42451e8b3?wid=488&hei=488&fmt=pjpeg"
    });
    
    await createSong({
      title:
        "Bop It",
        price: "20",
      description:
        "The Bop It! game is a portable game for on-the-go fun. It features 3 solo and social play options and others for one or more players",
        image: "https://i.etsystatic.com/6017061/r/il/61efc2/1143636323/il_fullxfull.1143636323_6erb.jpg"
    });

    await createSong({
      title:
        "Furby",
        price: "45",
      description:
        "The 90s favorite furry electronic companion with a vocabulary of about 200 words and ability to react to its environment",
        image: "https://elephant.art/wp-content/uploads/2020/02/787-3073-1-SP.jpg"
    });

    await createSong({
      title:
        "Beanie Babies",
        price: "100",
      description:
        "Collect and cuddle with the 90s most sought after collectible item",
        image: "https://m.media-amazon.com/images/I/51bOGo0fKtL.jpg"
    });

    await createSong({
      title:
        "Sony Aibo",
        price: "60",
      description:
        "Aibo, the robotic K9 companion with tricks up his sleeve",
        image: "https://cdn.thisiswhyimbroke.com/thumb/sony-aibo-black-sesame-edition_400x333.jpg"
    });

    await createSong({
      title:
        "Super Nintendo (SNES)",
        price: "120",
      description:
        "Famous 16-bit console released by Nintendo",
        image: "https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/640w/products/40972/39523/SNES-1-Player-Pak-Disc__36020.1670017093.jpg?c=2"
    });

    await createSong({
      title:
        "K'Nex",
        price: "30",
      description:
        "K'Nex is a rod and connector building system that lets you build kinetic toys",
        image: "https://i5.walmartimages.com/asr/500b159d-e603-4d4d-86ab-0e933c274998.7446eaf5a3a0cf63ca6665f6fe337720.jpeg"
    });

    await createSong({
      title:
        "Socker Boppers",
        price: "25",
      description:
        "Inflatable boxing pillows for soft and safe fun!",
        image: "https://m.media-amazon.com/images/I/41RMeQndtdL.jpg"
    });

    await createSong({
      title:
        "Creepy Crawlers",
        price: "20",
      description:
        "Spooky die-cast bug molds available in assorted colors",
        image: "https://m.media-amazon.com/images/I/512+zfAGHHS._AC_SY580_.jpg"
    });

    await createSong({
      title:
        "Tech Deck",
        price: "10",
      description:
        "Finger sized skateboards perfect for shredding the gnar on the kitchen counter top",
        image: "https://scene7.zumiez.com/is/image/zumiez/product_main_medium/Tech-Deck-Skate-Shop-Assorted-Fingerboard-Kit-_358915-front-US.jpg"
    });

    await createSong({
      title:
        "Rock Em Sock Em",
        price: "60",
      description:
        "Battle your friends in the arena with the Rock em Sock em robot boxing ring",
        image: "https://m.media-amazon.com/images/I/71hKmjgE7rL.jpg"
    });

    await createSong({
      title:
        "Jenga",
        price: "20",
      description:
        "Stack against your friends but don't knock over the tower!",
        image: "https://www.meijer.com/content/dam/meijer/product/0653/56/9825/58/0653569825586_0_A1C1_0600.jpg"
    });

    await createSong({
      title:
        "Mighty Beanz",
        price: "50",
      description:
        "Collectible battle beans",
        image: "http://cdn.shopify.com/s/files/1/0013/6105/1705/products/mighty-beanz-slam-pack-series-1-127067_600x.jpg?v=1650830578"
    });

    await createSong({
      title:
        "Lite Brite",
        price: "60",
      description:
        "Create art with light using Lite-Brite",
        image: "https://m.media-amazon.com/images/I/81HfN3vmyeS.jpg"
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
      {username: "Alphonse", password: "password", isAdmin: true},
      {username: "Zeke", password: "password", isAdmin: true},
      {username: "Stephanie", password: "password", isAdmin: true},
      {username: "Scout", password: "password", isAdmin: true},
      { username: "Lexi", password: "password", isAdmin: true}
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