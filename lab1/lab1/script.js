$(document).ready(function() {

  $("#search").click(function() {
    console.log("here")
    var searchReq = $.get("/sendRequest/" + $("#query").val());
    searchReq.done(function(data) {
      $("#url").attr("href", data.result);
    });
  });

});

