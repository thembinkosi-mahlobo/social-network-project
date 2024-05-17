
  CREATE TABLE IF NOT EXISTS profiles (
    id SERIAL PRIMARY KEY,
    clerk_id TEXT,
    username TEXT,
    bio TEXT
  );



  CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    profile_id INT REFERENCES profiles(id),
    content TEXT);



  CREATE TABLE musicposts (
    id SERIAL PRIMARY KEY,
    album TEXT,
    artist TEXT,
    genre TEXT,
    year INTEGER,
    content TEXT
  );



  INSERT INTO musicposts (album,artist, genre,year, content) VALUES
  ('Tougher Than Leather','Run DMC', 'hip-hop', 1998, 'Every track on this album is classic.'),
  ('The Miseducation of Lauryn Hill', 'Lauryn Hil', 'RnB', 1998, 'A courageous, powerful, and vulnerable record that spans neo-soul, R&B, reggae, and hip-hop soul.'),
  ('Purple Rain', 'Prince and the Revolution', 'pop', 1984, 'The first artist to have the Number One song, album, and movie in North America.'),
  ('Abbey Road', 'The Beatles', 'rock/pop', 1969, 'It is very happy record.'),
  ('Darkside Side Of The Moon', 'Pink Floyd','rocknroll', 1973, 'The defining force in rock culture.'),
  ('Rumble in the Jungle', 'Kabza De Small DJ Maphorisa and Tresor', 'amapiano', 2021, ' This is album is an exuberant and colourful celebration of African dance and culture.');
  
