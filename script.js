let CurrentNumber = '';
let coma_exists = 0;
let temp = '';
let process = 0;
function Update(){
	document.getElementById('tel').value= CurrentNumber;
}
function clean() {
	CurrentNumber = '';
	coma_exists = 0;
	Update();
}
function is() {
	if (process == 1) {	
		CurrentNumber = String(+CurrentNumber + +temp);
		Update();
	}
}
function f1() {
	CurrentNumber = CurrentNumber + '1';
	Update();
}
function f2() {
	CurrentNumber = CurrentNumber + '2';
	Update();
}
function f3() {
	CurrentNumber = CurrentNumber + '3';
	Update();
}
function f4() {
	CurrentNumber = CurrentNumber + '4';
	Update();
}
function f5() {
	CurrentNumber = CurrentNumber + '5';
	Update();
}
function f6() {
	CurrentNumber = CurrentNumber + '6';
	Update();
}
function f7() {
	CurrentNumber = CurrentNumber + '7';
	Update();
}
function f8() {
	CurrentNumber = CurrentNumber + '8';
	Update();
}
function f9() {
	CurrentNumber = CurrentNumber + '9';
	Update();
}
function f0() {
	if (coma_exists) {
		CurrentNumber = CurrentNumber + '0';
		Update();
	}
}
function coma() {
	if (!coma_exists && CurrentNumber != '') {
		CurrentNumber = CurrentNumber + '.';
		coma_exists = 1;
		Update();
	}
}
function plus() {
	if (CurrentNumber != '') {
		temp = CurrentNumber;
		CurrentNumber = '';
		process = 1;
		Update();
	}
}
