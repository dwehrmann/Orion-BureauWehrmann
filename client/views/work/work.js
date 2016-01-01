Template.work.helpers({
    works: function () {
      return orion.entities.works.collection.find().fetch();
    }
});

Template.workBlock.helpers({
  tools: function (tools) {
    var classes = '';
    for (var i = 0; i < tools.length; i++) {
      classes += tools[i] + ' ';
    }
    return classes;
  }
});

Template.workSingle.helpers({
    icons: function (tools) {
      var icon = '';
      for (var i = 0; i < tools.length; i++) {
        icon += '<i class="' + tools[i] + '"></i>';
      }
      return icon;
    }
});

Template.workSingle.rendered = function() {
  $('header').addClass('small');
  $('.content img').wrap( "<div class='content-wrap'></div>");
  $('.content-wrap').prepend("<div class='controls'></div>");
};

Template.work.rendered = function(){
   $('#work a:first-child').prepend('<div style="width:50%; border-bottom:10px solid #000; height:200px;float:right;color:#000; position:relative;"><p style="position:absolute; bottom:30px; font-size:20px;"><strong>NEU</strong> in unserem Portfolio</p></div>');
};
