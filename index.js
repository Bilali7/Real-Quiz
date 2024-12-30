let named = document.getElementById ("name");
let rolld = document.getElementById ("roll");
let batchd = document.getElementById ("batch");
let start = document.getElementById ("start");
let play = document.getElementById ("audio");

function audios () {
    let audio = new Audio ("audio/haza.mp3");
    audio.play ();
}
play.addEventListener ("click", audios);

start.addEventListener ("click", (e) => {
    e.preventDefault ();
    let names = named.value.trim ();
    let roll = rolld.value.trim ();
    let batch = batchd.value.trim ();

    if (!names || !roll || !batch) {
        Swal.fire({
            icon: 'error',
            title: 'All Fields Required',
            text: 'Please fill in all fields to proceed!',
            heightAuto: false // Fix SweetAlert UI
        });
        return;
    }

    named.value = "";
    rolld.value = "";
    batchd.value = "";
    swal("Successfully In Quiz Test!", `${names}`);


    setTimeout (() => {
        window.location.href = "quizs.html";
    },2000);
});

