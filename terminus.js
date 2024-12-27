const values = {x:0, y:0, z:0};

function setValue(strVariable, intValue){
	switch (strVariable){
		case "x":
		values.x = intValue;
		break;
		case "y":
		values.y = intValue;
		break;
		case "z":
		values.z = intValue;
		break;
		default:
	}
	eq1=0;
	eq2=0;
	eq3=0;
	
	let numb = document.getElementsByClassName(strVariable);
	id = strVariable + intValue;
	
	for (let i = 0; i<numb.length; i++){
		if (numb[i].id==id){
			numb[i].style.backgroundColor = "Orange"
		} 
		else {
			numb[i].style.backgroundColor = "#FFFFFF"
		}
	}
	
	result = document.getElementById("result");
	result.innerHTML = "__ __ __";
}

function solve(){
	eq1 = (2 * values.x) + 11;
	eq2 = ((2 * values.z) + values.y) - 5;
	eq3 = values.y + values.z - values.x;
	eq3 = Math.abs(eq3);
	
	
	result = document.getElementById("result");
	result.innerHTML = eq1 + " " + eq2 + " " + eq3;
}