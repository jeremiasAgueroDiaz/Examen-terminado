const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");
const port = 2500;

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("vista", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let peliculas = [
    {
        titulo: "your name",
        director: "Makoto Shinkai",
        duracion: "1h 52m",
        genero: "Romance/Fantasía",
        disponibilidad: "No alquilada",
        imagenrepresentativa: "/img/yourname.jpg",
    },
    {
        titulo: "taxi driver",
        director: "Martin Scorsese",
        duracion: "1h 54m",
        genero: "Drama/Drama",
        disponibilidad: "No disponible",
        imagenrepresentativa: "/img/taxidriver.jpg",
    },
    {
        titulo: "it",
        director: "Andrés Muschietti",
        duracion: "2h 15m",
        genero: "Terror",
        disponibilidad: "No alquilada",
        imagenrepresentativa: "/img/it.jpg",
    },
    {
        titulo: "i silent voice",
        director: "Naoko Yamada",
        duracion: "2h 9m",
        genero: "Romance/Drama",
        disponibilidad: "No disponible",
        imagenrepresentativa: "/img/koe no katachi.jpg",
    },
    {
        titulo: "Terminator 2",
        director: "James Cameron",
        duracion: "2h 17m",
        genero: "Acción/Ciencia ficción",
        disponibilidad: "No alquilada",
        imagenrepresentativa: "/img/terminator 2.jpg",
    },
    {
        titulo: "Dune",
        director: "Denis Villeneuve",
        duracion: "2h 35m",
        genero: "Ciencia ficción/Aventura",
        disponibilidad: "No disponible",
        imagenrepresentativa: "/img/Dune.jpg",
    },
    {
        titulo: "juegos del hambre",
        director: "Gary Ross",
        duracion: "2h 22m",
        genero: " Ciencia ficción/Acción",
        disponibilidad: "No alquilada",
        imagenrepresentativa: "/img/juegosdelhambre.jpg",
    },
    {
        titulo: "tenki no ko",
        director: "Makoto Shinkai",
        duracion: "1h 54m",
        genero: "Fantasía/Romance ",
        disponibilidad: "No disponible",
        imagenrepresentativa: "/img/tenkinoko.jpg",
    },
    {
        titulo: "crimen perfecto",
        director: "Gregory Hoblit",
        duracion: "1h 53m",
        genero: "Suspenso/Crimen",
        disponibilidad: "No alquilada",
        imagenrepresentativa: "/img/crimenperfecto.jpg",
    },
    {
        titulo: "esperando la carroza",
        director: "Alejandro Doria",
        duracion: "1h 36m",
        genero: "Comedia",
        disponibilidad: "No disponible",
        imagenrepresentativa: "/img/esperando.jpg",
    },
];

app.get("/", (req, res) => {
    res.render("index", { peliculas: peliculas });
});

app.get("/disponible", (req, res) => {
    res.render("disponible", { peliculas: peliculas });
});

app.get("/terror", (req, res) => {
    res.render("terror", { peliculas: peliculas });
});

app.listen(port, () => {
    console.log("el puerto anda mortal ");
});
