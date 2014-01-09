App.controller("UserSocialCtrl", [
  "userSocialSrv",
  "twitterSrv",
  "youTubeSrv",
  function(userSocialSrv, twitterSrv, youtTubeSrv) {
    var ctrl = this;

    this.getUser = function(userId) {
      cascadeSolution(userId, ctrl);
      // flatSolution(userId, ctrl);
    };

    function cascadeSolution(userId, ctrl) {
      userSocialSrv.getUser(userId).then(function(user) {
        ctrl.user = user;

        twitterSrv.getTweets(user.twitterLogin).then(function(tweets) {
          ctrl.user.tweets = tweets;
          var videoIds = []; // TODO: get video ids from tweets JSON

          youtTubeSrv.getVideos(videoIds).success(function(videos) {
            var videoTitles = []; // TODO: get from videos JSON
            ctrl.user.videoTitles = videoTitles;
          });
        });
      });
    }

    function flatSolution(userId, ctrl) {
      userSocialSrv.getUser(userId).then(function(user) {
        ctrl.user = user;
        return twitterSrv.getTweets(user.twitterLogin);
      }).then(function(tweets) {
        ctrl.user.tweets = tweets;
        var videoIds = []; // TODO: get video ids from tweets JSON
        return youtTubeSrv.getVideos(videoIds);
      }).then(function(videos) {
        var videoTitles = []; // TODO: get from videos JSON
        ctrl.user.videoTitles = videoTitles;
      });
    }
  }
]);
