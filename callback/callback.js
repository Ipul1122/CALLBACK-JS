// CONTOH CALLBACK 1

halo(wait);

function halo(callback){
    console.log("halo");
    callback()
}

function wait(){
    console.log("wait");
}

function leave(){
    console.log("leave");
}

function bye(){
    console.log("bye");
}

// CONTOH CALLBACK 2

// deklarasi sum berisi 3 parameter
// displayHasil yaitu callback
// 1 dan 2 adalah value nilai
sum(displayHasil, 1,2)

// deklarasi function sum, berisi 3 parameters
function sum (callback, x, y){
    let result = x + y;
    callback (result)
}

// deklarasi displayHasil berisi paramater result dari argument sum
function displayHasil (result){
    console.log(result)
}

// menampilkan hasil 1 + 2 dalam website tidak di console.log
function displayHalaman(result){
    document.getElementById("myH1").textContent = result
}
sum(displayHalaman, 1,2)