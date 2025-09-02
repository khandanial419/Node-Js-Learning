const productRepo = require("./repos/productRepos");

console.log(
  productRepo?.getProducts(
    (res) => {
      console.log("response is", res);
    },
    (error) => {
      console.log("error is", error);
    }
  )
);

console.log("node running");
