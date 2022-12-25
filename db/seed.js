const client = require('./client');

async function dropTables() {
    try {
        console.log("dropping tables..");
        await client.query(`
        DROP TABLE IF EXISTS songs
        `);
    } catch (err) {
        console.log('Error dropping tables');
        throw err;
    }
}

async function createTables() {
    try {
        console.log('building tables');
        await client.query(`
        CREATE TABLE songs(
            id SERIAL PRIMARY KEY,
            songTitle VARCHAR(255) NOT NULL,
            artist VARCH(255) NOT NULL
        );
        `);
    } catch (err) {
        console.log("error building tables..");
        throw err;
    }
}

async function createInitialSongs() {
    try {
        console.log("creating initial songs...");
        await createSong({
            songTitle: "Master of Puppets",
            artist: "Metallica"
        });
        const songs = await fetchAllSongs();
        console.log(songs);
        console.log("finished creating songs")
    }
    catch (err) {
        console.log('error creating initial products')
        throw err;
    }
}

async function buildDB() {
    try {
        client.connect();
        await dropTables();
        await createTables();
        await createInitialSongs();
    }
    catch (err) {
        console.log('error building db')
        throw err
    }
}

buildDB()
    .catch(console.error)
    .finally(() => client.end())
