const img = document.querySelector(".ball");
const text = document.querySelector(".text")
const answers = ["No", "Yes", "Possibly", "I don't think so...", "Of course!", "Indubitably", "In your dreams", "NEVER", "quit wasting my time"];

function myFunction(){
    img.src = img.src.replace("https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    text.style.visibility = "hidden";
    img.style.animationName = "tilt-shaking";
    setTimeout(function() {
        img.src = img.src.replace("https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
        text.innerHTML = answers[Math.floor(Math.random()*answers.length)];
        text.style.visibility = "visible";
        img.style.animationName = "none";
    }, 4000);
    
}