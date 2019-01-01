  (function($) {
      $.fn.extend({
          tooltip: function() {
              var _that = this,
                  init = null;
              init = function() {
                  var oChild = _that.children();
                  oChild.hover(function() {
                          var i = _that.index($(this));
                          var oTitle = $(this).attr('title');
                          var left = $(this).position().left;
                          $(this).removeAttr('title');
                          var oDiv = $("<div></div>");
                          oDiv.css({
                              'left': left,
                              'top': '30px'
                          });
                          oDiv.html(oTitle);
                          _that.append(oDiv);
                      },
                      function() {
                          var oDiv = _that.children('div');
                          var oTitle = oDiv.html();
                          _that.children('div').remove();
                          $(this).attr('title', oTitle);
                      });
              }
              init();
          }
      });
  })(jQuery);