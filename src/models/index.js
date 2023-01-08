const Database = require('../database')
const { DataTypes } = require('sequelize')

const User = Database.define('user', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	email: { type: DataTypes.STRING, unique: true },
	password: { type: DataTypes.STRING },
	role: { type: DataTypes.STRING },
})

const Tour = Database.define( 'tour', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING },
	startDate: { type: DataTypes.STRING },
	endDate: { type: DataTypes.STRING },
	capacity: { type: DataTypes.STRING }
})

const UserTour = Database.define('user-tour', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

User.belongsToMany(Tour, { through: UserTour })
Tour.belongsToMany(User, { through: UserTour })

module.exports = {
	User,
	Tour,
	UserTour,
}
