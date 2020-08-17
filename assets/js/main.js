jQuery(function () {
  if (jQuery('.btn-tab').length) {
    jQuery(".btn-tab").click(function () {
      var tabId = jQuery(this).data('tab');
      jQuery(this).closest('.page-tabs').find(".btn-tab").removeClass('active');
      jQuery(this).closest('.page-tabs').find(".page-tab").removeClass('active');
      jQuery(".page-tab").removeClass('open');
      jQuery('#' + tabId).addClass('active');
      jQuery(this).addClass('active');
    });
  } else {};
});

// Sticky navbar
// =========================
jQuery(document).ready(function () {
  //   $('.sticky').addClass('sticky-up');

  var position = $(window).scrollTop();
  // should start at 0

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > position) {
      if (!$('.sticky').hasClass('sticky-down')) {
        $('.sticky').removeClass('sticky-up');
        $('.sticky').addClass('sticky-down');
      } else {}

    } else {
      if (!$('.sticky').hasClass('sticky-up')) {
        $('.sticky').removeClass('sticky-down');
        $('.sticky').addClass('sticky-up');
      } else {}
    }
    position = scroll;
  });

  // Custom function which toggles between sticky class (is-sticky)
  var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;

    if (scrollElement.scrollTop() > stickyTop) {
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");
    } else {
      sticky.removeClass("is-sticky");
      stickyWrapper.height('auto');
    }
  };

  // Find all data-toggle="sticky-onscroll" elements
  jQuery('[data-toggle="sticky-onscroll"]').each(function () {
    var sticky = jQuery(this);
    var stickyWrapper = jQuery('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');

    // Scroll & resize events
    jQuery(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
      stickyToggle(sticky, stickyWrapper, jQuery(this));
    });

    // On page load
    stickyToggle(sticky, stickyWrapper, jQuery(window));
  });

});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    var toplineH = $('.topline').height();
  
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - toplineH
    }, 500);
});


$(function () {
  if ($('.w-custom-select').length) {
      $('.w-custom-select').selectpicker();
      $('.w-custom-select.custom-select').each(function(){
        var attrName = $(this).attr('data-name');
        $(this).attr('name',attrName);
      })
  } else {};
});

function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ' ' + '$2');
    }
    return x1 + x2;
}

$(function () {
  if (($('.custom-price-check .form-check-input').length) && ($('#summ-price').length)) {
      var currentSumm = 0;
      $('#summ-price').attr('value',currentSumm);
      $('#summ-price-block').text(currentSumm);
      $('.custom-price-check .form-check-input').click(function(){
        if ($(this).is(':checked')) {
          currentSumm = currentSumm + $(this).data('price');
        } else {
          currentSumm = currentSumm - $(this).data('price');
        }
        $('#summ-price').attr('value',currentSumm);
        $('#summ-price-block').text(addCommas(currentSumm));
      });
  } else {};
});

