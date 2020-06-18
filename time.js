const form = document.querySelector("dDayForm");
const input = document.querySelector('input[type="date"]');

function paintDday() {}

function loadDday() {
  //로컬스토레이지 에서 저장된 디데이 정보를 가져온다.
}

function init() {
  input.addEventListener("input", paintDday);
  console.log(input.valueAsDate);
  loadDday();
}

init();
