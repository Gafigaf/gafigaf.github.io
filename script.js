function count(){
	var a = parseInt(document.getElementById("first").value);
	var b = parseInt(document.getElementById("second").value);
	var c = parseInt(document.getElementById("thirsd").value);
	var b_kvad = b*b;
	var D = b_kvad - 4 * a * c;
	var kor_d = Math.sqrt(D);
	var x1 = (-b + kor_d)/(2*a);
	var x2 = (-b - kor_d)/(2*a);
	var reshx1 = -b +" + "+kor_d + " ÷ " + 2*a +" = " + ((-b+kor_d)/2);
	var reshx2 = -b +" - "+ kor_d + " ÷ " + 2*a + " = " + ((-b-kor_d)/2);
	var letters = /^[a-zA-Zа-яА-ЯёЁ]+$/;


	document.getElementById("result").innerHTML = "D = "+b+"² "+"-4 * "+a +" * "+c+" = "+ D;
	if (D < 0) {
		document.getElementById("erorr").innerHTML = "Корней нету";

	}else{
		document.getElementById("erorr").innerHTML = "";
	}
	document.getElementById("x1").innerHTML = "x1 = " + x1;
	document.getElementById("x1").innerHTML = "x1 = " + reshx1;

	document.getElementById("x2").innerHTML = "x2 = " + x2;
	document.getElementById("x2").innerHTML = "x2 = " + reshx2;

	if (isNaN(D)) {
		document.getElementById("erorr").innerHTML = "❌ ВВЕДИТЕ ЧИСЛА ";
		document.getElementById("result").innerHTML = "";
		document.getElementById("x1").innerHTML = " ";
		document.getElementById("x2").innerHTML = " ";
	}
	if (isNaN(a)) {
		document.getElementById("erorr").innerHTML = "❌ Введите А ";
	}
	if (isNaN(b)) {
		document.getElementById("erorr").innerHTML = "❌ Введите B ";
	}
	if (isNaN(c)) {
		document.getElementById("erorr").innerHTML = "❌ Введите все числа ";
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
	var a1 = parseInt(document.getElementById("first").value);
	var b2 = parseInt(document.getElementById("second").value);
	var n = document.getElementById("SelectMyLove").options.selectedIndex;
	var ob  = "(" + a1 + "+" + b2 +")² = " + a1*a1 + "+"+2*a1*b2 +"+"+ b2*b2 + " = " + parseInt(a1*a1 + 2 * a1*b2 + b2*b2);
	var m_ob = "(" + a1 + "-" + b2+")² = " + a1*a1 + ""+ -2*a1*b2 +"+"+ b2*b2 + " = " + parseInt(a1*a1 + -2 * a1*b2 + b2*b2);
	var chbox;
	var chbox2;
	var bukva =(document.getElementById("buk").value);
	var bukva2 = (document.getElementById("buk2").value);
	var s_b = "(" + a1 +bukva+"+" + b2 +")² = " + a1*a1+ bukva+"²"+ "+"+2*a1*b2+bukva+"+"+ b2*b2;
	var s_b2 = "(" + a1 +"+" + b2 +bukva2 +")² = " + a1*a1+"+"+2*a1*b2 + bukva2 +"+"+ b2*b2 + bukva2 + "²";
	var s_b3 = "(" + a1 +bukva+"+" + b2+bukva2+")² = " + a1*a1+bukva+"²" + "+"+2*a1*b2+bukva+bukva2+"+"+ b2*b2+bukva2+"²";
	var s_b_min = "(" + a1 +bukva+"-" + b2 +")² = " + a1*a1+ bukva+"²"+ -2*a1*b2+bukva+"+"+ b2*b2;
	var s_b_min2 = "(" + a1 +"-" + b2 +bukva2 +")² = " + a1*a1+ -2*a1*b2 + bukva2 +"+"+ b2*b2 + bukva2 + "²";
	var s_b_min3 = "(" + a1 +bukva+"-" + b2+bukva2+")² = " + a1*a1+bukva+"²" + -2*a1*b2+bukva+bukva2+"+"+ b2*b2+bukva2+"²";
	chbox = document.getElementById('check');
	chbox2 = document.getElementById('check2');

	if (n == 0) {
		document.getElementById("hop").innerHTML = ob;
	
	if(isNaN(a1)){
		swal("Помилка", "Ви не ввели a", "error");
		document.getElementById("hop").innerHTML = "";
	}

	if(isNaN(b2)){
		swal("Помилка", "Ви не ввели b", "error");
		document.getElementById("hop").innerHTML = "";
	}

	if (isNaN(a1,b2)) {
		swal("Помилка", "Ви нічого не ввели", "error");
		document.getElementById("hop").innerHTML = "";
	}

	if (chbox.checked) {
		document.getElementById("hop").innerHTML = s_b;
		if(isFinite(bukva)){
			swal("Помилка", "Ви ввели цифру", "error");
			document.getElementById("hop").innerHTML = "";
			
		}
		if (bukva.length >= 2) {
			swal("Помилка", "Ви ввели більш ніж одну літеру в рядок", "error");
			document.getElementById("hop").innerHTML = "";
		}
	}

	if (chbox2.checked) {
		document.getElementById("hop").innerHTML = s_b2;
		if(isFinite(bukva2)){
			swal("Помилка", "Ви ввели цифру / Ви нічого не ввели", "error");
			document.getElementById("hop").innerHTML = "";
			
		}
			if (bukva2.length >= 2) {
			swal("Помилка", "Ви ввели більш ніж одну літеру в рядок", "error");
			document.getElementById("hop").innerHTML = "";
		}
	}

	if (chbox.checked && chbox2.checked) {
		document.getElementById("hop").innerHTML = s_b3;
	}

}
	if (n == 1) {
		document.getElementById("hop").innerHTML = m_ob;

	if (isNaN(a1,b2)) {
		swal("Помилка", "Введіть числа", "error");
		document.getElementById("hop").innerHTML = "";
		
	}	
	if (chbox.checked) {
		document.getElementById("hop").innerHTML = s_b_min;
		if(isFinite(bukva)){
			swal("Помилка", "Ви ввели цифру", "error");
			document.getElementById("hop").innerHTML = "";
			

		}
	}
	if (chbox2.checked) {
		document.getElementById("hop").innerHTML = s_b_min2;
		if(isFinite(bukva2)){
			swal("Помилка", "Ви ввели цифру / Ви нічого не ввели", "error");
			document.getElementById("hop").innerHTML = "";
			
		}

	}
	if (chbox.checked && chbox2.checked) {
		document.getElementById("hop").innerHTML = s_b_min3;
	}


	}

}
//Ochistka Kvadrat sumy

function ochistt() {
	document.getElementById("buk").value = '';
	document.getElementById("first").value = '';
	document.getElementById("second").value = '';
	document.getElementById("hop").innerHTML = "";
	document.getElementById("buk2").value = '';
	document.getElementById("buk2").value = '';
	document.getElementById("rrk").innerHTML = "";
}


function info() {
	swal("Информация", "Сайт предназначен для подсчета формулы (a±b)²", "info");
}

function r_k() {
	var a3 = document.getElementById("r_a").value;
	var b3 = document.getElementById("r_b").value;
	document.getElementById("rrk").innerHTML = "("+a3 +"+"+b3 +") *" + " (" + a3 +"-"+b3 +") = "  + parseInt(a3*a3 - b3*b3) +" = "+ a3*a3 +"-"+ b3 * b3 ;
	document.getElementById("rrk").replace(/[^a-z]/g, '');

}
function ochisistit() {
	document.getElementById("rrk").innerHTML = "";
	document.getElementById("r_a").value = "";
	document.getElementById("r_b").value = "";
}

function seefull() {
	var choto;
	choto = document.getElementById("chb_a");
	if (choto.checked) {
		alert("3")
	}
}
