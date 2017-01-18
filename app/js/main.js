let doc = document.querySelector('body')

doc.style.background = 'blue'
doc.innnerHTML = 'bar'

const url = 'http://marine.weather.gov/MapClick.php?lat=40.5793&lon=-73.7974&FcstType=digitalDWML'

var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onload = function() {
    if (xhr.status === 200) {
        console.log(xhr.responseText);
    }
    else {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send();
