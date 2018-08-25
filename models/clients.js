module.exports = function(sequelize, DataTypes) {
    var clients = sequelize.define("clients", {
      // Giving the clients model a name of type STRING
      name: DataTypes.STRING
    });


    client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1,100]
        }
      },
      client_name: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1,100]
      }
    
    },
    client_email: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1,100]
    }

},
    client_phone: {
    type: DataTypes.STRING,
     allowNull: false,
    len: [1,100]
}

},
payment_info: {
type: DataTypes.STRING,
 allowNull: false,
len: [1,100]
}
    });
  

    clients.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      clients.hasMany(models.rentals, {
        onDelete: "cascade"
      });
    };
  
    return clients;
  };