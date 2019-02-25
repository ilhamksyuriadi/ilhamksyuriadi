$(document).ready(function() {
  let scrollLink = $(".scroll");

  //toggle icon
  $(".menu-toggle").click(function() {
    $("nav").toggleClass("show");
  });

  $(".scroll").click(function() {
    $("nav").toggleClass("show");
  });

  //smooth scroll
  scrollLink.click(function(e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top - 50
      },
      1500
    );
  });

  //active link switching
  $(window).scroll(function() {
    let scrollBarLoc = $(this).scrollTop();
    scrollLink.each(function() {
      let sectionOffset = $(this.hash).offset().top - 100;
      if (sectionOffset <= scrollBarLoc) {
        $(this)
          .parent()
          .addClass("active");
        $(this)
          .parent()
          .siblings()
          .removeClass("active");
      }
    });
  });

  //animate image hover
  $(".img-grow").hover(
    function() {
      $(this).animate({ width: "360px" }, 500);
    },
    function() {
      $(this).animate({ width: "310px" }, 500);
    }
  );
});
