 var popped = 0;
 document.addEventListener('click', function(e) {
    // console.log(e.target);
    // e.target.style.display = 'none';
    e.target.style.backgroundColor = 'white';
    e.target.textContent = "POP!";
    popped++;
    // console.log(popped);
    checkAll();

 });

function checkAll() {
     if(popped === 10) {
        var balloonDiv = document.querySelectorAll('.balloons-div');
        balloonDiv.innerHTML = '';
        var noballoonDiv = document.querySelectorAll('#no-balloons');
        noballoonDiv.style.display = 'block';
    }
}
