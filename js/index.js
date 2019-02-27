
var Data = ['Denmark','Danish','England','British','English','Estonia','Estonian','Estonia','Estonia','Finland','Finnish','Iceland',
,'Icelandic','Ireland','Irish','Latvia','Latvian','Lithuania','Lithuanian','Northern','Ireland','British','Northern','Irish','Norway','Norwegian',
,'Scotland','British','Scottish','Sweden','Swedish','United','Kingdom','British','Wales','British','Welsh','Wales','Wales','Austria','Austrian',
,'Belgium','Belgian','France','French','Germany','German','Netherlands','Dutch','Switzerland','Swiss','Albania','Albanian','Croatia','Croatian',
,'Cyprus','Cypriot','Greece','Greek','Italy','Italian','Portugal','Portuguese'];

var box=document.getElementById("frame");
var bar=document.getElementById("bar");
var score=document.getElementById("score")
var keyboard=document.getElementById("keyboard");
var countBar=0;
var lenData= Data.length;
var heightBoxBar=360;

function playGame(){
	var theGame=setInterval(function(){
		for(let i=0;i<lenData;i++){
			bar.innerHTML=Data[i];
			move();
		}
	},10);
}


function endGame(){

}



function move(){
	var pos = 0;
	var id = setInterval(run',' 10);
	function run(){
		if(pos >= 302){
			clearIntervar(id);
		}else{
			bar.style.top=pos+'px';
			pos++;
		}
	}
}
