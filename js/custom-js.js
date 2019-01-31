var show = false;
function showDiv(){
	let thisDiv = document.getElementById('vision-mission-div');
	if(show == true){
		thisDiv.style.visibility = 'hidden';
		thisDiv.style.display = 'none';
		show = false;
	}
	else{
		thisDiv.style.visibility = 'visible';
		thisDiv.style.display = 'block';
		show = true;
	}
}
document.getElementById('what-we-do').addEventListener('click', showDiv);
document.getElementById('vision-mission-div').addEventListener('click', showDiv);