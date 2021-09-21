/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const createTweetElement = function(data) {

    const userName = data['user']['name'];
    const avatars = data['user']['avatars'];
    const userHandle = data['user']['handle'];
    const tweetBody = data['content']['text'];
   
    const tweetMarkUp = `
      <div class="tweet-list">
        <!-- Header contains the user's: avatar, then name, and handle on extreme right -->
        <header class="tweet-list-header">
          <div class="avatar-name-wrapper">
            <img class="avatar" src="${avatars}"></img>
            <label name="user-name" class="user-name">${userName}</label>
          </div>
          <div>
            <label class="user-handle">${userHandle}</label>
          </div>
        </header>
        <!-- Body contains the tweet text -->
        <div class="tweet-list-body">
          <p>${tweetBody}</p>
        </div>
        <!-- Footer displays: how long ago tweet was created on the left, and "Flag", "Re-tweet" and "Like" icons upon hovering over the tweet, on the right -->
        <footer class="tweet-list-footer">
          <div class="created-on">
            <p>${timeago.format(data.created_at)}</p>
          </div>
          <div class="icons">
            <i class="fa fa-flag"></i>
            <i class="fa fa-heart"></i>
            <i class="fa fa-retweet"></i>
          </div>
        </footer>
      </div>
    `;
    return tweetMarkUp;
  };

  // Test / driver code (temporary). Eventually will get this from the server.
  
  const renderTweets = function() {
    for (const data of db) {
      console.log(data);
      const $tweet = createTweetElement(data);
      $(".tweet-container").append($tweet);
    }
  };
  
  const db = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1631981176895
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1632167576895
    }
  ];

  // Test / driver code (temporary)
  renderTweets();
});