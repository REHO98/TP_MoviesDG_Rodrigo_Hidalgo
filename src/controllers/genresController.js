const db = require('../database/models')

module.exports = {
  list: (req, res) => {
    db.Genre.findAll({
      order: [["name", "ASC"]],
    })
      .then((genres) => {
        return res.render("genresList", {
          genres,
        });
      })
      .catch((error) => console.log("Upss, hubo un error en la pagina", error));
  },
  detail: (req, res) => {
    const { id } = req.params;
    db.Genre.findByPk(id)
      .then(genre => {
        return res.render("genresDetail", {
          genre
        });
      })
      .catch((error) => console.log("Upss, hubo un error en la pagina", error));
  },
};