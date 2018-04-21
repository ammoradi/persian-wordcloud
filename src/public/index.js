$(document).ready(() => {
    let xhr = new XMLHttpRequest();
    let xhrPromise = new Promise((resolve, reject) => {
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                resolve(xhr.responseText);
            }
        }
        xhr.open('GET', 'http://localhost:8080/api/facets', true);
        xhr.send(null);
    }).then(result => {
        console.log(result)
        setTimeout(() => {
            // WordCloud(document.getElementById('my_canvas'), { list: res } );
        },3000)
    })
})