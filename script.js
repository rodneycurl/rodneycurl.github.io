function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {

  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  var today = new Date();
  var mo = monthNames[today.getMonth()].toUpperCase();
  var d = today.getDate();
  var y = today.getFullYear();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var mi = today.getMilliseconds()/10;
  var mi = Math.ceil(mi);
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  mi = checkTime(mi);

  document.getElementById('time').innerHTML = mo +" "+ d+", " + y + " " + h + ":" + m + ":" + s + ":" + mi;
  t = setTimeout(function() {
    startTime()
  }, 5);


}

document.addEventListener('DOMContentLoaded', function() {
  startTime();
}, false);
