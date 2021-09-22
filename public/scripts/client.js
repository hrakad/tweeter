/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const createTweetElement = function(tweet) {

    const userName = tweet['user']['name'];
    const avatars = tweet['user']['avatars'];
    const userHandle = tweet['user']['handle'];
    const tweetBody = tweet['content']['text'];
   
    const tweetMarkUp = `
      <article class="tweet-list">
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
            <p>${timeago.format(tweet.created_at)}</p>
          </div>
          <div class="icons">
            <i class="fa fa-flag"></i>
            <i class="fa fa-heart"></i>
            <i class="fa fa-retweet"></i>
          </div>
        </footer>
      </article>
    `;
    return tweetMarkUp;
  };


  // Test / driver code (temporary). Eventually will get this from the server.
  
  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      //console.log(tweet);
      const $tweet = createTweetElement(tweet);
      $(".tweet-container").append($tweet);
    }
  };

  $(".tweet-button").click(function(event) {
    event.preventDefault();
  
    $.ajax({
      url: "/tweets",
      method: "post",
      data: $("#tweet-text").serialize(),
    })
    .then(() => {
      $("#tweet-text").val('');
      location.reload();
    });
  })

  // Test / driver code (temporary)
  //renderTweets();

  const loadTweets = function() {
    $.ajax({
      url: "/tweets",
      method: "get",
      success: (tweets) => {
        renderTweets(tweets);
      },
      error: (error) => {
        console.log(error);
      },
  });
}
  loadTweets();
  
});