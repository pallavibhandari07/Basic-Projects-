let button = document.getElementById("toggle-btn");

button.onclick = function(){
    if(document.body.classList.contains("dark")){
        document.body.classList.remove("dark");
        button.innerHTML = "🌙";
    }
    else{
        document.body.classList.add("dark");
        button.innerHTML = "☀️";

    }
}