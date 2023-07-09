let clock = document.getElementById("clock")
setInterval(function(){
  let currentTime = new Date()
  clock.innerHTML = currentTime.toLocaleTimeString()
},1000)
