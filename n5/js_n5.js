// JS for all pages
function openTab(section) {
	window.location.href = section;
}

function openSubTab(evt, section) {
	var i, tabcontent, subtablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	subtablinks = document.getElementsByClassName("subtablinks");
	for (i = 0; i < subtablinks.length; i++) {
		subtablinks[i].className = subtablinks[i].className.replace(" active", "");
	}
	document.getElementById(section).style.display = "block";
	evt.currentTarget.className += " active";
}

function openSubTabWDD(evt, section) {
	var i, WDDtabcontent, subtabWDDlinks;
	WDDtabcontent = document.getElementsByClassName("WDDtabcontent");
	for (i = 0; i < WDDtabcontent.length; i++) {
		WDDtabcontent[i].style.display = "none";
	}
	subtabWDDlinks = document.getElementsByClassName("subtabWDD");
	for (i = 0; i < subtabWDDlinks.length; i++) {
		subtabWDDlinks[i].className = subtabWDDlinks[i].className.replace(" active", "");
	}
	document.getElementById(section).style.display = "block";
	evt.currentTarget.className += " active";
}

function openSubTabSDD(evt, section) {
	var i, SDDtabcontent, subtabSDDlinks;
	SDDtabcontent = document.getElementsByClassName("SDDtabcontent");
	for (i = 0; i < SDDtabcontent.length; i++) {
		SDDtabcontent[i].style.display = "none";
	}
	subtabSDDlinks = document.getElementsByClassName("subtabSDD");
	for (i = 0; i < subtabSDDlinks.length; i++) {
		subtabSDDlinks[i].className = subtabSDDlinks[i].className.replace(" active", "");
	}
	document.getElementById(section).style.display = "block";
	evt.currentTarget.className += " active";
}

// JS for web page
function collapseTable(table){
	var target = table.className + "body";
	targets = document.getElementsByClassName(target);
	if (targets[0].style.display == "none"){
		for (i = 0; i < targets.length; i++){
			targets[i].style.display = null;
		}
	}else{
		for (i = 0; i < targets.length; i++){
			targets[i].style.display = "none";
		}
	}
}

function onMouseOver(){
	document.getElementById("js-example").style.color = "Red";
}
function onMouseOut(){
	document.getElementById("js-example").style.color = "Black";
}

// JS for comp systems page
function checkDigit(){
var total = 0;
var nums = "";
var finalString = "";
	for (var i = 8; i > 0; i--){
		if (document.getElementById("bit"+i).value == "1"){
			document.getElementById("value"+i).style.backgroundColor = "#3bde2c";
			total = total + Math.pow(2, i-1);
			nums = nums.concat(Math.pow(2, i-1),"+");
		}
		else if (document.getElementById("bit"+i).value == "0" || document.getElementById("bit"+i).value == ""){
			document.getElementById("value"+i).style.backgroundColor = "red";
		}
	}
	finalString = finalString.concat("Total: ", total);
	nums = nums.substring(0, nums.length - 1);
	document.getElementById("sum").innerHTML = nums;
	document.getElementById("total").innerHTML = finalString;
}