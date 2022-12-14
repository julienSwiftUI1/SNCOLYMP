


var video = document.getElementById("background-video");

var btn = document.getElementById("btnVideo");


function playAndPause () {

if (video.paused) {

video.play();

btn.innerHTML = "Pause II";

} else {

video.pause();

btn.innerHTML = "Play ▶";

}

}


function BuildChart(labels, values, chartTitle) {
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: labels, // Our labels
          datasets: [{
              label: chartTitle, // Name the series
              data: values, // Our values
              backgroundColor: [ // Specify custom colors
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [ // Add custom color borders
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1 // Specify bar border width
          }]
      },
      options: {
          responsive: true, // Instruct chart js to respond nicely.
          maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
      }
  });
  return myChart;
}


// HTML To JSON Script 
// *Forked* from https://johndyer.name/html-table-to-json/
var table = document.getElementById('dataTable');
var json = []; // first row needs to be headers 
var headers = [];
for (var i = 0; i < table.rows[0].cells.length; i++) {
  headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
}
// go through cells 
for (var i = 1; i < table.rows.length; i++) {
  var tableRow = table.rows[i];
  var rowData = {};
  for (var j = 0; j < tableRow.cells.length; j++) {
      rowData[headers[j]] = tableRow.cells[j].innerHTML;
  }
  json.push(rowData);
}
console.log(json);
// Map json values back to label array
var labels = json.map(function (e) {
  return e.year;
});
console.log(labels);
// Map json values back to values array
var values = json.map(function (e) {
  return e.itemssold;
});
console.log(values);
var chart = BuildChart(labels, values, "Items Sold Over Time");





var box = document.querySelector('.section'),
    targetElm = document.querySelector('.text'); // <-- Scroll to here within ".box"

document.querySelector('button').addEventListener('click', function(){
   scrollToElm( box, targetElm , 600 );   
});


/////////////

function scrollToElm(container, elm, duration){
  var pos = getRelativePos(elm);
  scrollTo( container, pos.top , 2);  // duration in seconds
}

function getRelativePos(elm){
  var pPos = elm.parentNode.getBoundingClientRect(), // parent pos
      cPos = elm.getBoundingClientRect(), // target pos
      pos = {};

  pos.top    = cPos.top    - pPos.top + elm.parentNode.scrollTop,
  pos.right  = cPos.right  - pPos.right,
  pos.bottom = cPos.bottom - pPos.bottom,
  pos.left   = cPos.left   - pPos.left;

  return pos;
}
    
function scrollTo(element, to, duration, onDone) {
    var start = element.scrollTop,
        change = to - start,
        startTime = performance.now(),
        val, now, elapsed, t;

    function animateScroll(){
        now = performance.now();
        elapsed = (now - startTime)/1000;
        t = (elapsed/duration);

        element.scrollTop = start + change * easeInOutQuad(t);

        if( t < 1 )
            window.requestAnimationFrame(animateScroll);
        else
            onDone && onDone();
    };

    animateScroll();
}

function easeInOutQuad(t){ return t<.5 ? 2*t*t : -1+(4-2*t)*t };




