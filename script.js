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
		document.getElementById("erorr").innerHTML = "Коренів не має"
	}else{
		document.getElementById("erorr").innerHTML = ""
	}
	document.getElementById("x1").innerHTML = "x1 = " + x1

	document.getElementById("x2").innerHTML = "x2 = " + x2

}
