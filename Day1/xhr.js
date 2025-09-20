let xhr = new XMLHttpRequest();


xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.send();

console.log(xhr);
xhr.onreadystatechange = function () {
  console.log("Current readyState:", xhr.readyState);
};