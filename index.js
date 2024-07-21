var p = document.getElementById('paragraph');
var btn = document.getElementById('btn');
var btn2 = document.getElementById('btn2');
btn.onclick = function() {
    p.innerHTML = "I change!";
}

btn2.onclick = function() {
    p.innerHTML = "this shit is here again"
}