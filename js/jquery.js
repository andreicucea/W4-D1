$(document).ready(function() {
  $("#create").on("click", function() {
      create();
  });
});


function create() {
  var i=0;
  while (i<1) {
    $(".section").append('<div class="col span_1_of_3 news"><div class="date">7/11/2014</div><h1>PROJECT: SANCTUARY</h1><div></div><h2>Take a look at the features in the new release of <b><u>Sanctuary</u></b>, our education platform for League of Legends players.</h2></div>');
    i++;
  };
};
