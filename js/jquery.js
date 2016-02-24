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

  // text slider
  $("#slideBtn").on("click", function() {
    slide1();
    slide3();
  });
});


function create() {
  var i=0;
  while (i<1) {
    $(".section").append('<div class="col span_1_of_3 news"><div class="date">7/11/2014</div><h1>PROJECT: SANCTUARY</h1><div></div><h2>Take a look at the features in the new release of <b><u>Sanctuary</u></b>, our education platform for League of Legends players.</h2></div>');
    i++;
  };
};

// this function takes it's values from hidden display elements
function slide1() {
  var text = $("#slide1").text();
  console.log(text);
  if        (text === $("#slide1a").text()) {
    $("#slide1").text($("#slide1b").text());
  } else if (text === $("#slide1b").text()) {
    $("#slide1").text($("#slide1c").text());
  } else if (text === $("#slide1c").text()) {
    $("#slide1").text($("#slide1a").text());
  };
};

function slide3() {
  var text = $("#slide3").html();
  console.log(text);
  if (text === "WELCOME<br><span>SUMMONER</span>") {
    $("#slide3").html("WELCOME<br><span>TRAINER</span>");
  } else if (text === "WELCOME<br><span>TRAINER</span>") {
    $("#slide3").html("WELCOME<br><span>MASTER</span>");
  } else if (text === "WELCOME<br><span>MASTER</span>") {
    $("#slide3").html("WELCOME<br><span>SUMMONER</span>");
  };
};
