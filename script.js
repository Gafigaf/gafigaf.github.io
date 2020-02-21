function count(){
	var a = parseInt(document.getElementById("first").value);
	var b = parseInt(document.getElementById("second").value);
	var c = parseInt(document.getElementById("thirsd").value);
	var b_kvad = b*b;
	var D = b_kvad - 4 * a * c;
	var kor_d = Math.sqrt(D);
	var x1 = (-b + kor_d)/(2*a);
	var x2 = (-b - kor_d)/(2*a);



	document.getElementById("result").innerHTML = "D = "+b+"² "+"-4 * "+a +" * "+c+" = "+ D;
	if (D < 0) {
		document.getElementById("erorr").innerHTML = "Корней нету";

	}else{
		document.getElementById("erorr").innerHTML = "";
	}
	document.getElementById("x1").innerHTML = "x1 = " + x1;

	document.getElementById("x2").innerHTML = "x2 = " + x2;

	if (isNaN(D)) {
		document.getElementById("erorr").innerHTML = "ВВЕДИТЕ ЧИСЛА ";
		document.getElementById("result").innerHTML = "";
		document.getElementById("x1").innerHTML = "";
		document.getElementById("x2").innerHTML = "";
	}
//Diskriminant

}
function ochist(){
	document.getElementById("first").value = '';
	document.getElementById("thirsd").value = '';
	document.getElementById("second").value = '';
	document.getElementById("x1").innerHTML = "";
	document.getElementById("x2").innerHTML = "";
	document.getElementById("erorr").innerHTML = "";
	document.getElementById("result").innerHTML = "";
}
//Ochistka Diskriminant

//Kvadrat sumy

function countt() {
	hop.style.color = "#FFF";
	var a1 = parseInt(document.getElementById("first").value);
	var b2 = parseInt(document.getElementById("second").value);
	document.getElementById("hop").innerHTML = "(" + a1 + "+" + b2 +")² = " + a1*a1 + "+"+2*a1*b2 +"+"+ b2*b2 ;
	if (isNaN(a1,b2)) {
		document.getElementById("hop").innerHTML = "ВВЕДИТЕ ЧИСЛА";
		hop.style.color = "red";
	}
	var chbox;
	var chbox2;
	chbox = document.getElementById('check');
	chbox2 = document.getElementById('check2');
	if (chbox.checked) {
		document.getElementById("hop").innerHTML = "(" + a1 +"a"+"+" + b2 +")² = " + a1*a1+ "a²" + "+"+2*a1*b2+"a"+"+"+ b2*b2 ;	
	}

	if (chbox2.checked) {
		document.getElementById("hop").innerHTML = "(" + a1 +"+" + b2+"a"+")² = " + a1*a1+ "+"+2*a1*b2+"a"+"+"+ b2*b2+"a²";
	}

	if (chbox.checked && chbox2.checked) {
		document.getElementById("hop").innerHTML = "(" + a1 +"a"+"+" + b2+"a"+")² = " + a1*a1+ "a²" + "+"+2*a1*b2+"a²"+"+"+ b2*b2+"a²";
	}


}
//Ochistka Kvadrat sumy

function ochistt() {
	document.getElementById("first").value = '';
	document.getElementById("second").value = '';
	document.getElementById("hop").innerHTML = "";
}