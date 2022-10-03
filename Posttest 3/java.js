$(document).ready(function(){
    $("#switch").click(function(){
        $('body').toggleClass("dark-mode");
    });
}); 

const tombol = document.getElementById('switch');
tombol.style.cursor = "pointer";

nama = prompt("Masukkan Nama Anda :");

const salam = document.getElementById('halo');
salam.innerHTML = nama;