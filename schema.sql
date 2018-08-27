DROP DATABASE IF EXISTS inventoryRentalsDB;
CREATE database inventoryRentalsDB;

USE inventoryRentalsDB;

CREATE TABLE clients (
  client_id INT NOT NULL AUTO_INCREMENT,
  client_name VARCHAR(100) NULL,
  client_email VARCHAR(100) NULL,
  client_phone VARCHAR(100) NULL,
  payment_info VARCHAR(100) NULL,
  PRIMARY KEY (client_id)
);

CREATE TABLE rentals (
  
  product_id INT NOT NULL AUTO_INCREMENT,
  client_id INT NOT NULL,
  product_name  VARCHAR(100) NULL,
  rental_days INT NOT NULL,
  rental_qty INT NOT NULL,
  rental_total DECIMAL(10,4) NULL,
  PRIMARY KEY (product_id)
);

CREATE TABLE inventory (
  product_id INT NOT NULL AUTO_INCREMENT,
  product_name INT NOT NULL,
  inventory_qty INT NOT NULL,
  available_inventory INT NOT NULL,
  product_image VARCHAR(100) NULL,
  rentalPrice_day DECIMAL(10,4) NULL,
  PRIMARY KEY (product_id)
);
