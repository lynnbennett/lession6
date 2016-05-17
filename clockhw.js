console.log('timer');

windo.onload=function(){
	var myelement=document.getElementById('timer'):
	var count= 0;
	setInterval(function(){


		function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
return {
  'total': t,
  'days': days,
  'hours': hours,
  'minutes': minutes,
  'seconds': seconds
};

		var time=document.getElementById("minutes");
		time.innerHTML= hours+":"minutes +":" + seconds +":" +millseconds;

		var backgroundColors = [ "black","red","orange"];
		var backgoundTimer = Math.flor (math.random()*3);


	},1000);
}

function background blinking () {
	document.getElementById("b").style.color ="black"
	setTimer("setbackground")
}
