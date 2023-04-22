/*-----
Spanizer
- Wraps letters with spans, for css animations
-----*/
(function($) {
    var s,
    spanizeLetters = {
      settings: {
        letters: $('.js-spanize'),
      },
      init: function() {
        s = this.settings;
        this.bindEvents();
      },
      bindEvents: function(){
        s.letters.html(function (i, el) {
          //spanizeLetters.joinChars();
          var spanizer = $.trim(el).split("");
          return '<span>' + spanizer.join('</span><span>') + '</span>';
        });
      },
    };
    spanizeLetters.init();
  })(jQuery);

const flowerImg = document.getElementById('flower-img');
const count = document.getElementById('count');
let numClicks = 0;

flowerImg.addEventListener('click', () => {
  numClicks++;
  count.innerText = numClicks;
});