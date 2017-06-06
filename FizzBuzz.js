function fizzBuzz(value){
	var fizz = "Fizz";
	var buzz = "Buzz";
	var fizzBuzz = "FizzBuzz";
		if (value % 3 === 0 && value % 5 === 0 || value % 3 === 0 && value % 5 === 0){
		  return fizzBuzz;
		}
		else if(value % 5 === 0){
		  return buzz;
		  
	 }else if (value % 3 === 0 ){ 
	   return fizz;
		}
		else{
			return value;
		
}
}
fizzBuzz(90);
