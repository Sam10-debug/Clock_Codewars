function past(h, m, s){
	//#Happy Coding! ^_^
	//convert each element to milliseconds 
	//for seconds, multiply by 1000
	//for minutes, multiply by 60000
	//for hours, multiply by 3600000
	let result=0
	let calc= (h*3600000)+(m*60000)+(s*1000)
	result+=calc
	return result
  }