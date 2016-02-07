function execAdd() {
  getData = document.forms.input.data.value.split(':');
  if (!isTime(getData)) {
    isInvalid();
    return;
  }
  inputHour = parseInt(getData[0], 10);
  inputMinutes = parseInt(getData[1], 10);

  target = document.getElementById('result');
  targetData = target.innerText.split(':');
  if (!isTime(targetData)) {
    isInvalid();
    return;
  }
  hour = parseInt(targetData[0], 10);
  minutes = parseInt(targetData[1], 10);
  hour += inputHour;
  minutes += inputMinutes;
  target.innerText = hour + ':'+ ('0'+minutes).slice(-2);
}

function execClear() {
  target = document.getElementById('result');
  target.innerText = '';
}

function isTime(data) {
  if (data[1] === null) { return false; }
  if (Number.isNaN(parseInt(data[0], 10)) || Number.isNaN(parseInt(data[1], 10))) {
    return false;
  }
  return true;
}

function isInvalid() {
  target = document.getElementById('result');
  error = document.createElement('p');
  text = document.createTextNode('不正な値を取得しました。3:00などの形式で入力してください。');
  target.appendChild(error).appendChild(text);
}
