const form = document.querySelector(".dDayForm");
const input = document.querySelector('input[type="date"]');

function handleDday(event) {
  event.preventDefault();

  input.valueAsDate = null;
}

function loadDday() {
  //로컬스토레이지 에서 저장된 디데이 정보를 가져온다.
  const loadedTime = localStorage.getItem("time");
  if (loadedTime !== null) {
    // console.log(loadedTime);
    const tempTime = new Date(loadedTime);
    console.log(tempTime.getTime());
  }
}

function init() {
  form.addEventListener("submit", handleDday);

  loadDday();
}

init();
