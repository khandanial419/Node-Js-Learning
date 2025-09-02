const { error } = require("console");
const fs = require("fs");

const image_path = "./assets/products.json";

const getProducts = (success, failure) => {
  //read content of the file
  fs?.readFile(image_path, (error, data) => {
    if (error) {
      failure(error);
    } else {
      success(JSON?.parse(data));
    }
  });
};

const productRepos = {
  getProducts: getProducts,
};

module.exports = productRepos;
