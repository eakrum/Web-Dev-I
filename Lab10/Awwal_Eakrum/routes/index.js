const ath = require("../tools/auth");

const constructorMethod = app => {
  //1. validate the login information
  app.use(async (req, res, next) => {
    if (!req.cookies.AuthCookie) {
      req.user = null;
      next();
    } else {
      let result = await ath.findUserById(req.cookies.AuthCookie); // check for user ID in the cookie

      //not available? clear the cookie
      if (!result) {
        res.clearCookie("AuthCookie");
        req.user = null;
        next();

        //available? continue.
      } else {
        req.user = result; //passing in whatever we got up top from result as the request user.
        next();
      }
    }
  });

  //homepage
  app.get("/", (req, res) => {
    //user is tracked in cookie? redirect straight to their private page.
    if (req.user) {
      res.redirect("/private");
      //no user available in the cookie? render a login screen.
    } else {
      res.render("login");
    }
  });

  //post login, get username and pass, run Bcrypt auth functions, address the cookie, redirect to page
  app.post("/login", async (req, res) => {
    //store our req params as username and password
    let username = req.body.username;
    let password = req.body.password;
    console.log(username, password);

    let result = await ath.loginCheck(username, password); //we're comparing our username/ pass to hashed - refer logincheck notes

    //assigning an authcookie with result and redirecting to private
    if (result) {
      res.cookie("AuthCookie", result).redirect("/private");
      //didnt work, try again
    } else {
      res.render("login", { err: true });
    }
  });

  //fill in appropriate info - ONLY IF WE HAVE A COOKIE THAT ALLOWS US TO!
  app.get("/private", (req, res) => {
    if (req.user) {
      res.render("private", { user: req.user });
      //DENY access if user not available for us
    } else {
      res.status(403).render("notLogged");
    }
  });

  //clear our cookie
  app.get("/logout", (req, res) => {
    res.clearCookie("AuthCookie").render("logout");
  });

  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

module.exports = constructorMethod;
