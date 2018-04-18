
module.exports = function(sequelize, DataTypes) {
    var Show = sequelize.define("Show", {
      showID: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      genres: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      status: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      time: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      days: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      rating: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });
  
    Show.associate = function(models) {

      Show.hasMany(models.User, {
        foreignKey: {
          allowNull: true
        }
      });
    };
  
    return Show;
  };