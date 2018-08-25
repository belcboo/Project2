module.exports = function(sequelize, DataTypes) {
    var clients = sequelize.define("clients", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING
    });

    Product_id: {
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
        len: [1,100]
      }
    
    },
    rental_days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1,100]
    }

},
rental_qty: {
    type: DataTypes.INTEGER,
     allowNull: false,
    len: [1,100]
}

},
rental_total: {
    type: DataTypes.INTEGER,
     allowNull: false,
    len: [1,100]
}

},

    clients.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      clients.hasMany(models.rentals, {
        onDelete: "cascade"
      });
    };
  
    return clients;
  };