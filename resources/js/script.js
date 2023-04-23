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
let numClicks = 0.1;
//
flowerImg.addEventListener('click', () => {
  numClicks+=0.1;
  count.value = numClicks;
  document.getElementById('flower-img').style="filter: brightness(0) invert("+numClicks+");"
});


const dday = new Date();
dday.setFullYear(2023)
dday.setMonth(3)
dday.setDate(19)

// 49일 후 날짜 설정
const futureDate = dday;
futureDate.setDate(futureDate.getDate() + 49);

// 분 단위로 계산
const days = 24 * 60 * 60 * 1000;
const hour = 60 * 60 * 1000;
const minute = 60 * 1000;
const countdownElement = document.getElementById('countdown');

// 타이머 업데이트 함수
function updateCountdown() {
  const now = new Date();
  const diff = futureDate - now;

  // 종료 시간이 지났을 경우
  if (diff < 0) {
    countdownElement.innerHTML = "49일이 지났습니다.";
    clearInterval(intervalId);
    return;
  }

  // 남은 분, 초 계산
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // 출력 문자열 설정
  const timeStr = `${days}일 ${hours}:${minutes}:${seconds}`;

  // 화면 업데이트
  countdownElement.innerHTML = timeStr;
}

// 1초마다 타이머 업데이트
const intervalId = setInterval(updateCountdown, 1000);
