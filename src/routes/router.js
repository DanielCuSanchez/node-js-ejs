const { Router } = require("express");

const router = Router();

router.get("/home", (req, res) => {
  res.render("pages/index", {
    title: "HomeDEMO",
    subtitle: "EJS",
    image: "ejs.png",
  });
});

router.get("/about", (req, res) => {
  res.render("pages/about", {
    title: "About",
    subtitle: "JS",
    image: "js-logo.png",
  });
});

router.get("/contact", (req, res) => {
  res.render("pages/contact", {
    title: "Contact",
    subtitle: "Node JS",
    image: "node-logo.png",
  });
});

module.exports = router;
