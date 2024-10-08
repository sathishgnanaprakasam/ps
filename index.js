// event delegation example
let parentList = document.getElementById('list');

parentList.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        console.log(event.target.innerText);
    }
});