$(function() {
  $.ajax({
    url: 'http://api.giphy.com/v1/gifs/search?q=toy+story&api_key=4qDkvS2c12SUhdWZWxV7iFuBv03ucPcw&limit=50',
    dataType: 'json',
    success: function(response){
      addGifs(response.data);
    }
  });

  function addGifs(gifs) {
    let $gifDivContainer = $('#gifs');
    gifs.forEach(function(gif) {
      let $gif = $('<div />', {
        'class': 'gif'
      }).appendTo($gifDivContainer);

      $('<img />', {
        src: gif.images.original.url,
        class: 'gifstyle'
      }).appendTo($gif);

    })
  }

});
