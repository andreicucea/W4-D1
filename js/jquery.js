$(document).ready(function() {
  $("#create").on("click", function() {
      create();
  });

  $(".selectTarget").on('click', function() {
// working with the parrent
    $(".selectTarget").removeClass("active");
    $(this).addClass("active");
// working with the first child
    $(".selectTarget div:first-child").addClass("inactive");
    $(".selectTarget div:first-child").removeClass("active");
    $(this).find("div:first-child").removeClass("inactive");
    $(this).find("div:first-child").addClass("active");
  });
});


function create() {
  var i=0;
  while (i<1) {
    $(".section").append('<div class="col span_1_of_3 news"><div class="date">7/11/2014</div><h1>PROJECT: SANCTUARY</h1><div></div><h2>Take a look at the features in the new release of <b><u>Sanctuary</u></b>, our education platform for League of Legends players.</h2></div>');
    i++;
  };
};
