var values = {
  learn:"i never stop learning",
  explore:"i always take the unfamiliar path",
  create:"creating is the most fun thing on the planet"
};

function addInnerText(spanId) {
  $('#values').text(values[spanId]);
  $('#values').addClass('visible');
}
function removeInnerText() {
  $('#values').text('');
  $('#values').removeClass('visible');
}
function displayMobile(spanId) {
  $('.display-mobile').removeClass('display-mobile');
  $('#values').text(values[spanId]);
  $('#values').addClass('display-mobile');
}

$(function() {
  $('#keys span').on({
    mouseover: function() {
      addInnerText(this.id);
    },
    mouseout: function() {
      removeInnerText();
    }
  })
});

$(function() {
  $('#keys span').on('click', function() {
    displayMobile(this.id);
  })
});
