// script.js
document.querySelector('button').addEventListener('click', function() {
    alert('추모가 완료되었습니다.');
});


const profileImage = document.querySelector('.profile-image');
const conversation = document.querySelector('.conversation');
const chatInput = document.querySelector('.chat-input');
const countdown = document.querySelector('.countdown');

// 스크롤 이벤트 핸들러
window.addEventListener('scroll', () => {
    // 현재 스크롤 위치 가져오기
    const scrollY = window.scrollY;
    
    // 이미지 크기 조절 (스크롤 위치에 따라 50%까지 작아짐)
    const scale = Math.min(1, 1 - (scrollY / window.innerHeight / 2));
    profileImage.style.transform = `scale(${scale})`;

    // 이미지 고정 여부 설정
    if (scrollY + window.innerHeight >= document.body.scrollHeight) {
        profileImage.classList.add('fixed');
    } else {
        profileImage.classList.remove('fixed');
    }

    // "대화하기" 글자 페이드 아웃 처리
    if (scrollY >= conversation.offsetTop) {
        document.querySelector('h2').classList.add('fade-out');
    } else {
        document.querySelector('h2').classList.remove('fade-out');
    }
});

// 스크롤이 페이지의 제일 밑에 도착했을 때 "대화하기" 글자 보이기
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        document.querySelector('h2').style.opacity = 1;
    }
});

// 이미지 크기 조절 (일정 크기 이상으로 작아지지 않도록)
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const scale = Math.max(0.5, Math.min(1, 1 - (scrollY / window.innerHeight / 2)));
    profileImage.style.transform = `scale(${scale})`;
});

// 카운트 다운 설정
const deathDate = new Date('April 18, 1955 15:30:00 GMT+0000'); // 아인슈타인의 사망 날짜 및 시간 설정
setInterval(() => {
    const currentDate = new Date();
    const timeDifference = deathDate - currentDate;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    countdown.textContent = `${days}일째`;
}, 1000);

// 아인슈타인이 고인 된 날짜
const einsteinDeathDate = new Date('1955-04-18');

// 대화 시간 표시
function updateTime() {
    const currentDate = new Date();
    const daysPassed = Math.floor((currentDate - einsteinDeathDate) / (1000 * 60 * 60 * 24));
    
    const timeElement = document.querySelectorAll('.time');
    timeElement.forEach((element) => {
        element.textContent = `${daysPassed}일째`;
    });
}

// 1분마다 시간 업데이트
setInterval(updateTime, 60000);
updateTime();
