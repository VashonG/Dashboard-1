$(function () {
  var start = moment().subtract(29, "days");
  var end = moment();

  function cb(start, end) {
    $("#reportrange2 span, #reportrange3 span, #reportrange4 span").html(
      start.format("DD/MM/YYYY") + " – " + end.format("DD/MM/YYYY")
    );
  }

  $("#reportrange2, #reportrange3, #reportrange4").daterangepicker(
    {
      opens: 'left',
      startDate: start,
      endDate: end,
    },
    cb
  );

  cb(start, end);
});
