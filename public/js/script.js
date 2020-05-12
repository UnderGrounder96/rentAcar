$(document).ready(() => {
  $('.classified').delay(3000).fadeOut(5000);

  $('.nav-link').click(() => {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
  })

  /* -----------------DATE HANDLERS - USER---------------------- */
  let date = new Date(),
    todayDay = date.getDate(),
    todayMonth = date.getMonth() + 1,
    todayFullDate = date.getFullYear(); // January is 0!

  const dateClassObj = $('.date');

  todayDay = _addZero(todayDay);
  todayMonth = _addZero(todayMonth);

  todayFullDate += '-' + todayMonth + '-' + todayDay;

  dateClassObj.val(todayFullDate);
  dateClassObj.attr('min', todayFullDate);

  $('#dateIn, #days').change(() => {
    let days = $('#days').val(),
      price = $('#price').val();

    price *= days;

    // changes price
    $('#numbers').val(price);

    todayFullDate = $('#dateIn').val();

    date = new Date(todayFullDate);

    //ok?
    --days;

    // console.log(date.toLocaleDateString());
    date.setDate(date.getDate() + days);

    todayDay = date.getDate();
    todayMonth = date.getMonth() + 1; // January is 0!

    todayDay = _addZero(todayDay);
    todayMonth = _addZero(todayMonth);

    todayFullDate = date.getFullYear() + '-' + todayMonth + '-' + todayDay;

    $('#dateOut').val(todayFullDate);
  })

  /* -----------------------ADMIN------------------------ */
  $('.hide').hide();
  $('#cars1').show();

  $('#cars').click(() => {
    _show(this);
    $('#cars1').show();
  })

  $('#resvs').click(() => {
    _show(this);
    $('#resvs1').show();
  })

  $('#users').click(() => {
    _show(this);
    $('#users1').show();
  })

  function _show(toShow) {
    $('.hide').hide();
    $('a').removeClass('active');
    $(toShow).addClass('active');
  }

  function _addZero(arg) {
    if (arg < 10) { arg = '0' + arg; }

    return arg;
  }

  /*
  // ------------------ NOT WORKING!!!
    $("#cars, #resvs, #users").click(() => {
      _show(this);

      switch (toShow) {
        case $("#cars"):
          $("#cars1").show();
          break;

        case $("#resvs"):
          $("#resvs1").show();
          break;

        case $("#users"):
          $("#users1").show();
          break;
      }
    }); */
})
