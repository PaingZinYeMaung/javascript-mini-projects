 var popped = 0;
 document.addEventListener('click', function(e) {
    // console.log(e.target);
    // e.target.style.display = 'none';
    if(e.target.className === 'balloon') {
      e.target.style.backgroundColor = 'white';
      e.target.textContent = "POP!";
      popped++;
      checkAll();
    }
    
 });

function checkAll() {
     if(popped === 10) {
        var balloonDiv = document.querySelector('.balloons-div');
        balloonDiv.innerHTML = '';
        var noballoonDiv = document.querySelector('#no-balloons');
        noballoonDiv.style.display = 'block';  
    }
}
