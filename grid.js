var len = 10;
var wall = "black";
var original = "beige";

var maze_container = document.getElementById("maze_container");

for(var i = 0; i < 10; i++){
	var row = document.createElement("div");
	row.className = "row row" + (i+1);
	row.id= "row" + (i+1);	
	for(var j = 0; j < 10; j++){
		var node = document.createElement("div");
		node.className = "node node" + ((i*10)+(j+1));
		node.id = "node" + ((i*10)+(j+1));
		row.appendChild(node);
		
		if(((i*10)+(i+j)) != 0 && ((i*10)+(i+j)) != 108){
			node.style.backgroundColor = original;
			node.onclick = function(){
				clicked(this.id); 
			}
		}

	}
	maze_container.appendChild(row);
}
function clicked(elementID){
	var node = document.getElementById(elementID);
	if(node.style.backgroundColor == wall){
		node.style.backgroundColor = original;
	}else{
		node.style.backgroundColor = wall;
	}
}
function reset(){ 
	for(var i = 1; i<= 100; i++){
		var node = document.getElementById("node"+i);
		
		node.style.backgroundColor = original;
	} 
}

function Solve(){
	var maze = [];
	for(let i = 0; i< len; i++){
		maze[i] = new Array(len).fill(0);
	}

	var rowCount =0;
	var colCount = 0;
	var nodeVal = 1;
	for(var i = 1; i < len*len+1; i++){
		if(document.getElementById("node"+i).style.backgroundColor == wall){
			maze[rowCount][colCount] = -1;
		}else{
			maze[rowCount][colCount] = nodeVal;	
		}
		colCount++;

		if(colCount == len){
			rowCount++;
			colCount = 0;
			
		}
		nodeVal++;	
	}
	console.log(maze);
}

