module.exports = function(sequelize, DataTypes) {
    var rentals = sequelize.define("rentals", {
      // Giving the rentals model a name of type STRING
      name: DataTypes.STRING
    });

    rental_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },

    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1,100]
        }
      },

      client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1,100]
        }
      },

      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1,100]
      }
    },

    rental_days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
      len: [1,100]
    }
},

rental_qty: {
    type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
    len: [1,100]
  }
},

rental_total: {
    type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
    len: [1,100]
  }
},

    rentals.associate = function(models) {
      // Associating clients with rentals
      rentals.hasMany(models.clients, {
      });
    };

    rentals.associate = function(models) {
      // Associating inventory with rentals
      rentals.hasMany(models.inventory, {
      });
    };
  

    return rentals;
  };