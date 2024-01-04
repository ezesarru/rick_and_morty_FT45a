//? Dependencies
const { Sequelize } = require('sequelize')
require('dotenv').config()

//? Models
const FavoriteModel = require('./models/Favorite')
const UserModel = require('./models/User')

//? Connection to SQL
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/rickandmorty`,
   { logging: false, native: false }
)

//? Instances of models
FavoriteModel(sequelize)
UserModel(sequelize)

//? Relations of models
const { User, Favorite } = sequelize.models

User.belongsToMany(Favorite, { through: 'user_favorite' })
Favorite.belongsToMany(User, { through: 'user_favorite' })


module.exports = {
   User,
   Favorite,
   conn: sequelize
}
