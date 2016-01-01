Template.header.helpers({
  hasTwitter: function() {
    return orion.dictionary.get('twitter');
  },
  hasInsta: function() {
    return orion.dictionary.get('instagram');
  },
  hasLinkedin: function() {
    return orion.dictionary.get('linkedin');
  },
  hasFacebook: function() {
    return orion.dictionary.get('facebook');
  },
  hasGithub: function() {
    return orion.dictionary.get('github');
  },
  hasEmail: function() {
    return orion.dictionary.get('email');
  },
  hasPinterest: function() {
    return orion.dictionary.get('pinterest');
  },
  hasDribble: function() {
    return orion.dictionary.get('dribble');
  },
  hasTumblr: function() {
    return orion.dictionary.get('tumblr');
  },

});

Template.header.rendered = function () {
  this.$('.headervideo').vide('https://0.s3.envato.com/h264-video-previews/2be80d1b-7a07-4e9c-9337-a692cb9229d6/655433.mp4');
};