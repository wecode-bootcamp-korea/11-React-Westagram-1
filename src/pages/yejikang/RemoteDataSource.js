export function getData(jsonName, callback) {
  fetch(`http://localhost:3000/data/yejikangMock/${jsonName}`)
    .then((res) => res.json())
    .then((res) => callback(res));
}
