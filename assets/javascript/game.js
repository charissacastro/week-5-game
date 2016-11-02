var correct=0; 
var incorrect=0; 
var unanswered=0;  
var timer;  
var time;
var question; 
var questions=[ 
	{
		question:  "What color is Carl's seat?", 
		choice1: "Blue",
		choice2: "Yellow",
		choice3: "Green", 
		choice4: "Red",  
		answer: 4,
		correctansw: "Red"
	},

	{
		question: "What magazine does Ellie show Carl with Charles Muntz on the cover?",
		choice1:"Life";
		choice2:"National Geographic",  
		choice3: "Rolling Stone",  
		choice4:"Time",  
		answer: 1,
		correctansw: "Life" 

	},   

	{
		question:  "What  is the age difference between Carl and Russell?",
		choice1:"Seventy", 
		choice2:"Sixty eight",  
		choice3: "Fifty five", 
		choice4:"Seventy five",  
		answer: 1,
		correctansw: "Seventy"
	},   

	{
		question:  "What color is Carl's balloon as a child in the beginning of the movie?",
		choice1:"Red", 
		choice2:"Yellow",
		choice3: "Blue", 
		choice4:"Green", 
		answer: 3,
		correctansw: "Blue"
	},

	{
		question: "What words are written on Ellie's Badge?",
		choice1:"Orande Soda", 
		choice2: "Grape Soda",		
		choice3: "Lemon Soda", 
		choice4: "Cherry Soda",
		answer: 2,
		correctansw: "Grape Soda" 
	}  

]


function timerFunction(){
	console.log("enter timerFunction");
	if (question >= 0 && question < questions.length) { 
		time--; 
		$(".timeCounter").show(); 
		$(".timeCounter").html('<h4>Seconds Remaining: ' + time +'s</h4>'); 
		if (time <=0){ 
			unanswered++; 
			nextQuestion(); 
		} 
	} 
};  

function gameOver(){
	$(".timeCounter").hide(); 
	$(".triviaImage").hide(); 
	$(".answers").hide(); 
	$(".triviaQuestion").hide(); 
	$("#restartGame").show(); 
	$("#correct").show(); 
	$("#incorrect").show(); 
	$("#unanswered").show(); 

	if(correct ===1) {
		$("#correct").html('<h3>You got ' + correct + " Question(s) Right!!</h3>");
	}else{ 
		$("#correct").html('<h3>You got ' + correct + " Question(s) Right!</h3>"); 
	}
	if(incorrect ===1) {
		$("#incorrect").html('<h3>You got ' + incorrect + " Question(s) Wrong!</h3>");
	}else{ 
		$("#incorrect").html('<h3>You got ' + incorrect + " Question(s) Wrong!</h3>"); 
	} 

	if(unanswered===1){
		$("#unanswered").html('<h3>' + unanswered + ' Questions Unanswered!</h3>'); 
	}else {
		$("#unanswered").html('<h3>' + unanswered + ' Question(s) Unanswered!</h3>'); 
	}
	
}; 