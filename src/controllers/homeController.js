import db from "../models/index";
import CRUDservice from "../services/CRUDservice";
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();

    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (err) {
    console.log(err);
  }
};
let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};
let getCRUDPage = (req, res) => {
  return res.render("crud.ejs");
};
let postCRUDPage = async (req, res) => {
  let message = await CRUDservice.createNewUser(req.body);
  // console.log(message);
  return res.send("post-crud");
};
let displayGetCRUDPage = async (req, res) => {
  let data = await CRUDservice.getAllUsers();
  console.log(data);
  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};
let getEditPage = async (req, res) => {
  let userId = req.query.id;
  console.log(userId);
  if (userId) {
    let userData = await CRUDservice.getUserInFoByUserId(userId);
    return res.render("editCRUD.ejs", {
      userData: userData,
    });
  } else {
    return res.send("users not found");
  }
};
let putCRUDPage = async (req, res) => {
  let data = req.body;
  console.log(data);
  let allUsers = await CRUDservice.updateUserData(data);
  return res.render("displayCRUD.ejs", {
    dataTable: allUsers,
  });
};
let deleteCRUDPage = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await CRUDservice.deleteUserData(id);
    return res.send("users deleted");
  } else {
    return res.send("user not found");
  }
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUDPage: getCRUDPage,
  postCRUDPage: postCRUDPage,
  displayGetCRUDPage: displayGetCRUDPage,
  getEditPage: getEditPage,
  putCRUDPage: putCRUDPage,
  deleteCRUDPage: deleteCRUDPage,
 
};
