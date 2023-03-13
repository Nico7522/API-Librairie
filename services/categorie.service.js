const CategorieDTO = require("../dto/categorie.dto");
const { Book } = require("../models");
const db = require("../models");

const categorieService = {
  getAll: async () => {
    const { rows, count } = await db.Categorie.findAndCountAll({
      distinct: true,
      include: [ Book ],
    });

    return {
      categories: rows.map((cate) => new CategorieDTO(cate)),
      count,
    };
  },

  getById: async (id) => {
    const categorie = await db.Categorie.findByPk(id, {
        include: [Book]
    });
    return categorie ? new CategorieDTO(categorie) : null;
  },

  create: async (categorieToCreate) => {
    const transaction = await db.sequelize.transaction();
    let categorie;
    try {
      categorie = await db.Categorie.create(categorieToCreate, { transaction });
      await categorie.addBook(categorieToCreate.books, { transaction });
      await transaction.commit();
      const finalCategorie = await db.Categorie.findByPk(categorie.id, {
        include: [Book],
      });
      return finalCategorie ? new CategorieDTO(finalCategorie) : null;

    } catch (error) {
      await transaction.rollback();
      return;
    }
  },

  update: async (id, categorieToUpdate) => {
    const isUpdated = await db.Categorie.update(categorieToUpdate, { where: { id }});
    return isUpdated[0] === 1;
  }
};

module.exports = categorieService;
