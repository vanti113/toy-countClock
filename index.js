const future = new Date(2021, 06, 07);

function timeHandler() {
  const today = new Date();
  const secondData = Math.floor((future - today) / 1000);

  const day = Math.floor(secondData / 86400);
  const hour = Math.floor((secondData % 86400) / 3600);
  const minute = Math.floor(((secondData % 86400) % 3600) / 60);
  const second = Math.floor(((secondData % 86400) % 3600) % 60);

  console.log(`현재 남은 시간은 ${day}일 ${hour}시 ${minute}분 ${second}초`);
}

const goDday = () =>
  setInterval(() => {
    timeHandler();
  }, 1000);
