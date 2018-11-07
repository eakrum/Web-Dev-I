const users = require("../data/users.js");
const bcrypt = require("bcrypt");

module.exports = {

    //check if username exists
  async loginCheck(username, password) {
    let user = users.find(element => {
      return element.username == username;
    });
    if (!user) return false;

    //match inserted pass with hashed password
    let authenticated = await bcrypt.compare(password, user.hashed_password);
    if (authenticated){
        return user._id
    }
    else {
        return false
    }
  },

 
  //function to return userID 
  async findUserById(id) {
    return users.find(element => {
      return element._id == id;
    });
  }
};
