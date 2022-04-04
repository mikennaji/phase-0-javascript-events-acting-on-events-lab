// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = 'red';

function moveDodgerLeft(){
    /**dodger.addEventListener("keydown", function(event){
        if(event.key==="ArrowLeft"){
            const leftNumbers = dodger.style.left.replace("px","");
            const left = (parseInt(leftNumbers,10));
            dodger.style.left = `${left-1}px`
        }
    })

}**///


const leftNumbers = dodger.style.left.replace("px", "");
const left = parseInt(leftNumbers, 10);

if (left > 0) {
  dodger.style.left = `${left - 1}px`;
}
}

function moveDodgerRight(){
    const  leftNumbers = dodger.style.left.replace("px", "");
const left = parseInt(leftNumbers, 10);

if (left < 360) {
  dodger.style.left = `${left + 1}px`;
}
}

document.addEventListener("keydown", (e)=> {
    
    if (e.key === "ArrowLeft") {
      
        moveDodgerLeft()
      
        console.log("test")
      
    
    }

    if (e.key === "ArrowRight"){
        moveDodgerRight();

    }
  });


moveDodgerLeft()