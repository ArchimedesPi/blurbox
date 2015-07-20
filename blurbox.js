// The blurbox plugin
;(function($) {
  $.fn.blurbox = function( options ) {
    var defaults = {
      //Defaults here
    };

    // Set the settings
    var settings = $.extend( {}, defaults, options );

    return this.each(function() {
      element_guild=guid(); // make up a new guid to identify the element
      $(this).attr('u', element_guid);
      p=$(this).parent();
      c=$(this).attr('class');
      html=$(this).clone().wrap('<div>').parent().html();
      
      // when the element is clicked
      $(p).on('click', '[u='+element_guid+']', function() {
        $(this).fadeOut('fast', function() {
          content = $(this).html().trim(); // grab the originial element's content
          // make a new textbox
          $(this).replaceWith('<input type="text" class="form-control editor '+c
            +'" u="'+element_guid+'" placeholder="'
            +content+'" style="display:none">').hide();
          
          // add the content originally in the element to the textbox
          // and fade in and focus
          $('[u='+g+']').val(content).fadeIn().focus(); 
          
          // when the text-box is left (blurred)
          $(p).on('blur', '[u='+g+']', function() {
            value = $(this).val(); // grab the value that was entered
            $(this).replaceWith(html); // flip back to a text box
            $('[u='+g+']').html(value); // target the element we want, and put the value that was entered back in
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
