$(window).scroll(function () {
  if ($(this).scrollTop() > 150) {
    // $(".gotobtn").addClass(".showbtn");
    // console.log($(".gotobtn"));
    $(".gotobtn").addClass("showbtn");
  } else {
    $(".gotobtn").removeClass("showbtn");
  }
});

$("div > .gotobtn").click(function (e) {
  e.preventDefault();
  // alert("The paragraph was clicked.");
  $("html,body").animate({ scrollTop: 0 }, "300");
});
