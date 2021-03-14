const mongo = require("./connect");
const { DB_NAME } = require("./config");

module.exports = {
    postFilm: function(film) {
        const db = mongo.instance().db(DB_NAME);
        const resp = db.collection("films").insertOne(film);
        return resp;
    },
    getFilmById: function (id) {
        const db = mongo.instance().db(DB_NAME);
        const resp = db.collection("films").find({id}).toArray();
        return resp;
    },
    getFilms: function () {
        const db = mongo.instance().db(DB_NAME);
        const resp = db.collection("films").find().toArray();
        return resp;
    },
    deleteFilmById: function (id) {
        const db = mongo.instance().db(DB_NAME);
        const resp = db.collection("films").deleteOne({ id });
        return resp;
    },
}