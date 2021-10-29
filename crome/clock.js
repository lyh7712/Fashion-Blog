const clock = document.querySelector('#clock');

// setTimeout : 타이머가 만료된 뒤 함수나 지정된 코드를 실행하는 타이머를 설정합니다.

// setInterval : 고정된 시간 지연으로 함수를 반복적으로 호출하거나 코드 조각을 실행합니다

const currentTime = () => {
  let date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconed = String(date.getSeconds()).padStart(2, '0');

  clock.innerText = `${hours}:${minutes}:${seconed}`;
};

currentTime();
setInterval(currentTime, 1000);
