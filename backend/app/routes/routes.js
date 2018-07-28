var express = require('express');
var router = express.Router();
var baseUsers = [{ id: 1, name: 'madhav', email: 'ma@ma.com', city: 'hyderabad', postalcode: 508206 },
{ id: 2, name: 'manoj', city: 'abc', postalcode: 123456 },
{ id: 2, name: 'jagadish', city: 'def', postalcode: 456789 }];
var newId = 3;
/*  "/users"
 *    GET: finds all users
 *    POST: creates a new user
 */

router.get("/users", function (req, res) {
  res.status(200).json(baseUsers);
});
/*
router.post("/users", function (req, res) {
  var newUser = { id: newId, ...req.body };
  newId = newId + 1;
  baseUsers.push(newUser);
  res.status(200).json(newUser);
});
*/

router.post("/login", function (req, res) {
  var loginUser = {};
  baseUsers.map(usr => {
    if (usr.name == req.body.name) {
      loginUser = usr;
    }
  });
  res.status(200).json(loginUser);
});


/*  "/users/:id"
 *    GET: find user by id
 *    PUT: update user by id
 *    DELETE: deletes user by id
 */

router.get("/users/:id", function (req, res) {
  var userById = {};
  baseUsers.map(usr => {
    if (usr.id == req.params.id) {
      userById = usr;
    }
  })
  res.status(200).json(userById);
});

router.put("/users/:id", function (req, res) {
  var updateDoc = req.body;
  var updatedBaseUsers = baseUsers.map(usr => {
    if (usr.id == updateDoc.id) {
      return updateDoc;
    } else {
      return usr
    }
  })
  baseUsers = updatedBaseUsers;
  res.status(200).json(updateDoc);
});

router.delete("/users/:id", function (req, res) {
  var deletedBaseUsers = [];
  baseUsers.map(usr => {
    if (usr.id != req.body.id) {
      deletedBaseUsers.push(usr);
    }
  })
  baseUsers = deletedBaseUsers;
  res.status(200).json({ id: req.body.id });
});


module.exports = router;
