import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const dbConnectionString = process.env.DATABASE_URL;
const db = new pg.Pool({
  connectionString: dbConnectionString,
});

db.query(
  `CREATE TABLE IF NOT EXIST profiles (
    id SERIAL PRIMARY KEY,
    clerk_id TEXT,
    username TEXT,
    bio TEXT
)`
);

db.query(
  `CREATE TABLE IF NOT EXIST posts (
    id SERIAL PRIMARY KEY,
    profile_id INT REFERENCES profiles(id),
    content TEXT
)`
);

db.query(
  `CREATE TABLE MusicPost (
    id SERIAL PRIMARY KEY,
    album TEXT,
    artist TEXT,
    genre TEXT,
    year INTEGER,
    content TEXT
)`
);

db.query(
  `INSERT INTO Post (album,artist, genre,year, content) VALUES
  ('Tougher Than Leather','Run DMC', 'hip-hop', 1998, 'Every track on this album is classic.'),
  ('The Miseducation of Lauryn Hill', 'Lauryn Hil', 'RnB', 1998, 'A courageous, powerful, and vulnerable record that spans neo-soul, R&B, reggae, and hip-hop soul.'),
  ('Purple Rain', 'Prince and the Revolution', 'pop', 1984, 'The first artist to have the Number One song, album, and movie in North America.'),
  ('Abbey Road', 'The Beatles', 'rock/pop', 1969, 'It is very happy record.'),
  ('Darkside Side Of The Moon', 'Pink Floyd','rocknroll', 1973, 'The defining force in rock culture.'),
  ('Rumble in the Jungle', 'Kabza De Small DJ Maphorisa and Tresor', 'amapiano', 2021, ' This is album is an exuberant and colourful celebration of African dance and culture.'),
  ('Tyla', 'Tyla', 'afropiano/comtenpory/rnb/dance', 2024, 'A little over six months after its release, Water had earned Tyla the Recording Academy’s first-ever Grammy for African Music Performance, 
  edging out global superstars like Burna Boy and Davido, as well as Asake and Olamides well-deserving Amapiano.)`
);
