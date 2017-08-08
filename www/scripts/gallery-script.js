$(document).ready(function() {

  'use strict';

  var source = $("#gallery-template").html();
  var template = Handlebars.compile(source);

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var feed = "http://dep.woodvideo.nl/foto/dsod-gallery.json";
  var values = [];

  fetch(feed).then(function(response) {
    return response.json();
  }).then(function(data) {
    values.push.apply(values, _toConsumableArray(data.files));
    $('.gallery').html(template(data));
  });
});
