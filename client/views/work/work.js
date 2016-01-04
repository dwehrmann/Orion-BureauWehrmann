Template.work.helpers({
    works: function () {
      return orion.entities.works.collection.find({}, {sort: {sortOrder: 1}});
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
  $(".projSection img").unveil(-200, function() {
    $(this).load(function() {
      this.style.opacity = 1;
    });
});

  // REMOVE EMPTY DETAIL ENTRIES
  $('.projSection img:not([data-src])').parent().remove();
};

Template.work.rendered = function(){
    $("img").unveil(-200);
    $('#work > a').slice(3).addClass("hidemore").hide();
      if ($(".hidemore").length > 0) {
        $('.hidemore_button').show();
        $('.hidemore_button').click(function(){
          var $this = $(this);
          $(".hidemore").fadeToggle('fast');
          $this.toggleClass('moreHidden');

          if($this.hasClass('moreHidden')){
            $this.text('–');
        } else {
            $this.text('+');
        }

        });
}

   $('#work > a:first-child').prepend('<div style="width:50%; border-bottom:10px solid #000; height:200px;float:right;color:#000; position:relative;"><p style="position:absolute; bottom:30px; font-size:20px;"><strong>NEU</strong> in unserem Portfolio</p></div>');
};
