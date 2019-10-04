$('#banner').text("Hello, Jquery!");

function sapadia() {
    var angka_pertama = parseInt($('#angka_pertama').val());
    var angka_kedua = parseInt($('#angka_kedua').val());
    var hasil = angka_pertama + angka_kedua;
    $('#hasil').text(`hasil ${angka_pertama} + ${angka_kedua} = ${hasil}`);
}