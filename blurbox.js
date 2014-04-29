// The blurbox plugin
;(function($) {
  $.fn.blurbox = function( options ) {
    var defaults = {
      //Defaults here
    };

    // Set the settings
    var settings = $.extend( {}, defaults, options );

    return this.each(function() {
      g=guid();
      $(this).attr('u', g);
      p=$(this).parent();
      c=$(this).attr('class');
      html=$(this).clone().wrap('<div>').parent().html();
      
      $(p).on('click', '[u='+g+']', function() {
        $(this).fadeOut('fast', function() {
          content = $(this).html().trim();
          $(this).replaceWith('<input type="text" class="form-control editor '+c+'" u="'+g+'" placeholder="'+content+'" style="display:none">').hide();
          $('[u='+g+']').val(content).fadeIn().focus();
          $(p).on('blur', '[u='+g+']', function() {
            v = $(this).val();
            $(this).replaceWith(html)
            $('[u='+g+']').html(v);
          });
        });
      });
      
    });
  };

  function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
  s4() + '-' + s4() + s4() + s4();
  }
}(jQuery));