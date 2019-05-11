export default (sequelize, DataTypes) => {
  const New = sequelize.define('New', {
    title: DataTypes.STRING,
    banner: DataTypes.STRING,
  })

  return New
}
