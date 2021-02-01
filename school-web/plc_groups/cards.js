function enableJQuery() {



  var $cell = $('.card');

  //open and close card when clicked on card
  $cell.find('.js-expander').click(function () {

      var $thisCell = $(this).closest('.card');

      if ($thisCell.hasClass('is-collapsed')) {
          $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed');
          $thisCell.removeClass('is-collapsed').addClass('is-expanded');
      } else {
          $thisCell.removeClass('is-expanded').addClass('is-collapsed');
      }
  });

  //close card when click on cross
  $cell.find('.js-collapser').click(function () {

      var $thisCell = $(this).closest('.card');

      $thisCell.removeClass('is-expanded').addClass('is-collapsed');
      $cell.not($thisCell).removeClass('is-inactive');

  });

  $cell.not($cell).click(function() {
      console.log("test")
      $cell.removeClass('is-expanded').addClass('is-collapsed');
      $cell.removeClass('is-inactive');
  })

  


};