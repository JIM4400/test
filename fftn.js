var matrix = [];
var str = "";
var n = 0;
var game = [[]];
var score = 0;

function cheat(){
	game = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]];
	move(2,3);
}

function restart(){
	matrix = [];
	game = [[]];
	n = 0;
	score = 0;
	for (i=0; i<16; i++){
		found = true;
		while (found==true){
			found = false;
			x = Math.floor(Math.random() * 16);
			for (j=0; j<matrix.length; j++){
				if (matrix[j]==x)
					found = true;
			}
		}
		matrix[i] = x;
	}
	
	str = "<th colspan='4'><button type='button' class='btn btn-success' onClick='restart();'><span class='glyphicon glyphicon-refresh'></span></button></th>";
	for (i=0; i<4;i++){
		game[i] = [];
		str += "<tr>";
		for (j=0; j<4; j++){
			game[i][j] = matrix[n];
			if (matrix[n]==0){
				str += "<td>&nbsp;</td>";
			} else {
				str += "<td><button type='button' class='btn btn-info' id='"+i+"-"+j+"' onClick='move("+i+","+j+")'>"+matrix[n]+"</button></td>";
			}
			n++;
		}
		str += "</tr>";
	}
	str += "<tr><td id='score' colspan='4'><button type='button' class='btn btn-warning' id='scoreButton'><span class='glyphicon glyphicon-star-empty'></span> Score: 0</button></td></tr>";
	document.getElementById("gameTable").innerHTML = str;
	//Math.floor(Math.random() * 15)+1;
	//console.log("i="+i+", j="+j+", x="+x);
}

function gameOver() {
	thecorrectanswer = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]];
	res=1;
	for (i=0; i<4; i++){
		for (j=0; j<4; j++){
			if (game[i][j] != thecorrectanswer[i][j]){
				res = 0;
			}
			console.log(game[i][j]+" = "+n);
		}
	}
	
	console.log("res = "+res);
	return res;
}

function move(i,j){
	moved = 0;
	
	
	function checkVertical(i,j,z){
		if (z>=0 && z<4){
			if (game[z][j]==0){
				game[z][j] = game[i][j];
				game[i][j] = 0;
				moved = 1;
			}
		}	
	}
	function checkHorizontal(i,j,z){
		if (z>=0 && z<4){
			if (game[i][z]==0){
				game[i][z] = game[i][j];
				game[i][j] = 0;
				moved = 1;
			}	
		}	
	}
	
	// check top
	checkVertical(i,j,i-1);
	// check bottom
	checkVertical(i,j,i+1);
	// check left
	checkHorizontal(i,j,j-1);
	// check right
	checkHorizontal(i,j,j+1);
	
	if(moved == 1){
		score++;
	}
	
	
	// refresh screen
	str = "<th colspan='4'><button type='button' class='btn btn-success' onClick='restart();'><span class='glyphicon glyphicon-refresh'></span></button></th>";
	for (i=0; i<4; i++){
		str += "<tr>";
		for (j=0; j<4; j++){
			if (game[i][j]==0) {
				str += "<td>&nbsp;</td>";
			} else {
				str += "<td><button type='button' class='btn btn-info' id='"+i+"-"+j+"' onClick='move("+i+","+j+")'>"+game[i][j]+"</button></td>";
			}
		}
		str += "</tr>";
	}
	str += "<tr><td colspan='4'><button type='button' class='btn btn-warning' id='scoreButton'><span class='glyphicon glyphicon-star-empty'></span> Score: <span id='score'></span></button></td></tr>";
	if (gameOver()){
		str += "<tr><td colspan='4'><button type='button' class='btn btn-danger' id='victoryButton'><span class='glyphicon glyphicon-thumbs-up'></span> Victory!</button></td></tr>";
	}
	document.getElementById("gameTable").innerHTML = str;
	document.getElementById("score").innerHTML = score;

	
}