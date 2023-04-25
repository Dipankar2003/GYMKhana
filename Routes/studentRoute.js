const studentcontroller = require("./../Controllers/studentcontroller");

const express = require("express");

const Router = express.Router();

 const bodyParser = require("body-parser");
//  Router.use(bodyParser.urlencoded({ extended: false }));
 Router.use(bodyParser.json());


Router.route("/StudentUploadDocs")
  .get( studentcontroller.uploadDocget )
  .post( studentcontroller.uploadDocpost);


  module.exports = Router;