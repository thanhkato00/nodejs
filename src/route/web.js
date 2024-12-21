import express from "express";
import homeController from "../controllers/homeController.js";
import userController from "../controllers/userController.js";
import doctorController from "../controllers/doctorController.js";
let router = express.Router();
let initWebRouter = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/abot", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUDPage);
  router.post("/post-crud", homeController.postCRUDPage);
  router.get("/get-crud", homeController.displayGetCRUDPage);
  router.get("/edit-crud", homeController.getEditPage);
  router.post("/put-crud", homeController.putCRUDPage);
  router.get("/delete-crud", homeController.deleteCRUDPage);
  router.post("/api/login", userController.handleLogin);
  router.get("/api/get-all-users", userController.handleGetAllUsers);
  router.post("/api/create-new-user", userController.handleCreateNewUser);
  router.put("/api/edit-user", userController.handleEditUser);
  router.delete("/api/delete-user", userController.handleDeleteUser);

  router.get("/api/allcode", userController.getAllCode);
  router.get("/api/top-doctor-home", doctorController.getTopDoctorHome);
  return app.use("/", router);
};
module.exports = initWebRouter;
