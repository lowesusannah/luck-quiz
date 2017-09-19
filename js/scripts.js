$(document).ready(function() {
  $("form.fortune").submit(function(event){
    event.preventDefault();
    var luckyLength = $("input:checkbox[name=lucky]:checked").length;
    var unluckyLength = $("input:checkbox[name=unlucky]:checked").length;
    $(".results-unlucky, .results-lucky, results-neutral").hide();

    if (luckyLength > unluckyLength) {
      $(".results-lucky").show();
    }

    if (unluckyLength > luckyLength) {
      $(".results-unlucky").show();
    }

    if (unluckyLength === luckyLength) {
      $(".results-neutral").show();
    }

  });
});
