var userAnswer = prompt("Pick a number from 1-100!");
var result= function(){
	var stringToNum=parseInt(userAnswer);
	for (var i=1; i<=stringToNum; i++){
		if (i%3==0 && i%5==0) {
			$('.result').append("fizzubuzz"+"<br>");
		}else if (i%3==0) {
			$('.result').append('fizz'+"<br>");
		}else if (i%5==0) {
			$('.result').append('buzz'+'<br>');
		}else {
			$('.result').append(i+"<br>");
		}
	}	
};

result();
