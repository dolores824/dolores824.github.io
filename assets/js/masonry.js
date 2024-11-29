
jQuery(document).ready(function ($) {
  $('.blog-grid-container').isotope({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.blog-grid-item',
    layoutMode: 'masonry',
  })
});