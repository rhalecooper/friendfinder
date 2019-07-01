//
// 4. Your `apiRoutes.js` file should contain two routes:
//
//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results.
//      This route will also be used to handle the compatibility logic.
//
var friendArray = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    // display a JSON of all possible friends.
    res.json(friendArray);
  });

  app.post("/api/friends", function(req, res) {

    var user = { name: "", photo: "", scores: [] };
    user.name = req.body.name;
    user.photo = req.body.photo;
    user.scores.push(parseInt(req.body.scores[0]));
    user.scores.push(parseInt(req.body.scores[1]));
    user.scores.push(parseInt(req.body.scores[2]));
    user.scores.push(parseInt(req.body.scores[3]));
    user.scores.push(parseInt(req.body.scores[4]));
    user.scores.push(parseInt(req.body.scores[5]));
    user.scores.push(parseInt(req.body.scores[6]));
    user.scores.push(parseInt(req.body.scores[7]));
    user.scores.push(parseInt(req.body.scores[8]));
    user.scores.push(parseInt(req.body.scores[9]));
  
    var matchedFriend = { name: "", photo: "", diff: 9999 };

    // loop through the friends array  
    for (var i = 0; i < friendArray.length; i++) {

      var newDiff = 0;
      // loop through the survey questions
      for (var j = 0; j < 10; j++) {
        // We calculate the absolut difference between the scores and total them 
        var userScore   =  user.scores[j];
        var friendScore =  friendArray[i].scores[j];
        newDiff +=Math.abs(userScore - friendScore);
      }
      if (newDiff < matchedFriend.diff) {
        matchedFriend.name =  friendArray[i].name;
        matchedFriend.photo = friendArray[i].photo;
        matchedFriend.diff =  newDiff;
      }
    }

    friendArray.push(user);
    //console.log("matchedFriend in apiRoutes =", matchedFriend);
    res.json(matchedFriend);
  });

};
