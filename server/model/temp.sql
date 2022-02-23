(title, year, description, poster, wallpaper)
values
    (:title, year, description, poster, wallpaper);

CREATE TABLE movies(
    id INT NOT NUll AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    year VARCHAR(30) NOT NULL,
    description TEXT NOT NULL,
    poster TEXT NOT NULL,
    wallpaper TEXT NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO
    movies (title, year, description, poster, wallpaper) VALUE (
        "Rogue One: A Star Wars Story",
        "2016",
        "Jyn's father is forcibly taken by the Galactic Empire to help them complete the Death Star. When she grows up, she joins a group of resistance fighters who aim to steal the Empire's blueprints.",
        "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_FMjpg_UX1000_.jpg",
        "https://wallpaper.dog/large/20439485.jpg"
    );

INSERT INTO
    movies (title, year, description, poster, wallpaper) VALUE (
        "Star Wars: The Force Awaken",
        "2017",
        "A new order threatens to destroy the New Republic. Finn, Rey and Poe, backed by the Resistance and the Republic, must find a way to stop them and find Luke, the last surviving Jedi.",
        "https://media.s-bol.com/YE6oJ5DPl5GO/550x810.jpg",
        "https://wallpaperaccess.com/full/1603218.jpg"
    );

INSERT INTO
    movies (title, year, description, poster, wallpaper) VALUE (
        "Interstellar",
        "2014",
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/df0cd821404807.5630118a89e8b.png",
        "https://images5.alphacoders.com/585/thumb-1920-585645.png"
    );