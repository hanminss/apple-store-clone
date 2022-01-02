import clayful from "clayful/client-js";
import React from "react";

function LandingPage() {
  var Product = clayful.Product;

  var option = {
    query: {
      page: 1,
    },
  };

  console.log(Product);
  Product.list(option, function (err, response) {
    if (err) {
      console.log(err.isClayful);
      console.log(err.model);
      console.log(err.method);
      console.log(err.status);
      console.log(err.headers);
      console.log(err.code);
      console.log(err.message);
    }
    console.log(response.status);
    console.log(response.headers);
    console.log(response.data);
  });

  return <div className="pageWrapper">LandingPage</div>;
}

export default LandingPage;
