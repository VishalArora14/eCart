const productModel = require("../models/productModel");

class ApiFeatures {
  //query -> product, querystr -> category
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  //search product
  search() {
    //ternary operator to check if it is found or not
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword, //regex : regular expression
            $options: "i", //i to make search case insensitive
          },
        }
      : {};
    //ie we simply modified the queryStr/keyword using regex
    //and now calling the same func again

    this.query = this.query.find({ ...keyword });

    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr }; //by val
    //using spread operator so that actual copy is created rather than reference. bcz queryStr in an obj and all objs in js passed through ref
    //Removing some fields from url for category
    const removeFields = ["keyword", "page", "limit"];
    removeFields.forEach((key) => delete queryCopy[key]);

    // Filter For Price and Rating
    let queryStr = JSON.stringify(queryCopy); //since we need to add $ sign to our query parameters
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`); // this is used to replace and regex /\b()\b/g ; vals = greater than, greater than and equal
    //now need to convert back stirng to object

    this.query = this.query.find(JSON.parse(queryStr)); //this.query is like product.find method

    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resultPerPage * (currentPage - 1); //eg if on 3rd page then skip all products of first 2 pages
    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}

module.exports = ApiFeatures;

//query in url means anything after ?
// eg https://localhost:4000//prducts?keyword=skechers
//so query is skechers
