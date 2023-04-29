const getTeamDetails = require("./../Models/getTeamDetailsmodels");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const generateDoc = require("./../Models/generateDoc");
const viewDoc = require("./../Models/viewDoc");
const StudentDocModel = require("./../Models/studentDocModel");

exports.satffAdvHomePage = (req, res) => {
  res.render("staffAdvHomePage");
};

exports.getDetails = (req, res) => {
  res.render("getTeamDetails");
};

exports.viewDoc = (req, res) => {
  res.render("sportsList");
};

exports.saveDetail = async (req, res) => {
  const { tname, sports, playerName } = req.body;
  const TeamDetails = await getTeamDetails
    .create({
      tname,
      sports,
      playerName,
    })
    .then((result) => {
      console.log("Data saved");
    });
};

exports.getDocdetails = (req, res) => {
  res.render("generateDocument");
};

exports.saveDocDetail = async (req, res) => {
  //  console.log(req.body);
  const {
    date,
    sports,
    level,
    pcount,
    qcount,
    goldcount,
    silvercount,
    bronzecount,
    gender,
    playername,
    classnm,
  } = req.body;
  const generateDocument = await generateDoc
    .create({
      date,
      sports,
      level,
      pcount,
      qcount,
      goldcount,
      silvercount,
      bronzecount,
      gender,
      playername,
      classnm,
    })
    .then((result) => {
      console.log("data saved");
    });
};

exports.selectedSports = async (req, res) => {
  let sports = req.params.name;
  sports = sports.toLowerCase();
  const results = await StudentDocModel.find({ sports });
  res.render("sportsTeamCard", { results });
};
