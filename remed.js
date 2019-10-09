var nomor = [9,2,3,4,2,7,8,5,11,1];

var ganjil = [];
var genap = [];
var i = 0;

	for(i; i <nomor.length; i++){
		if (nomor[i] % 2 == 0) {
			ganjil.push(nomor[i]);
		}else{
			genap.push(nomor[i]);
		}
	}
		console.log(ganjil);
        console.log(genap);
        
        var angka = ["4", "2", "3", "1","7"];
angka.length

console.log(angka.sort())

function hurufVokal(str) {
	var vokal = 'aeiouAEIOU';
	var count = 0;

	for (var x = 0; x < str.length; x++) {
		if (vokal.indexOf(str[x]) !== -1) {
			count++;
		}
	}
	return count;
}
console.log(hurufVokal('We Are one'));
console.log(hurufVokal('Jane nyr fajriah'));