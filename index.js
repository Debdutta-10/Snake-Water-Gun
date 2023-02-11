var x = Math.floor(Math.random()*3)+1;
let numbox = document.querySelectorAll(".box1").length;
for(var i=0 ;i<numbox;i++){
    document.querySelectorAll(".box1")[i].addEventListener("click",function(){
        var buthtml = this.innerHTML;
        if(buthtml=="Snake" && x ==1){
            document.querySelector("h2").innerHTML = "Draw - Player:Snake - Comp:Snake";
            var audio = new Audio("hiss.mp3");
            audio.play();
        }
        if(buthtml=="Snake" && x ==2){
            document.querySelector("h2").innerHTML = "🎉 Player Won - Player:Snake - Comp:Water 🎉" ;
            var audio = new Audio("hiss.mp3");
            audio.play();
        }
        if(buthtml=="Snake" && x ==3){
            document.querySelector("h2").innerHTML = "✌ Try Again - Player:Snake - Comp:Gun ✌";
            var audio = new Audio("hiss.mp3");
            audio.play();
        }
        if(buthtml=="Water" && x ==1){
            document.querySelector("h2").innerHTML = "✌ Try Again - Player:Water - Comp:Snake ✌";
            var audio = new Audio("drop.mp3");
            audio.play();
        }
        if(buthtml=="Water" && x ==2){
            document.querySelector("h2").innerHTML = "Draw - Player:Water - Comp:Water" ;
            var audio = new Audio("drop.mp3");
            audio.play();
        }
        if(buthtml=="Water" && x ==3){
            document.querySelector("h2").innerHTML = "🎉 Player Won - Player:Water - Comp:Gun 🎉";
            var audio = new Audio("drop.mp3");
            audio.play();
        }
        if(buthtml=="Gun" && x ==1){
            document.querySelector("h2").innerHTML = "🎉 Player Won - Player:Gun - Comp:Snake 🎉";
            var audio = new Audio("gun.mp3");
            audio.play();
        }
        if(buthtml=="Gun" && x ==2){
            document.querySelector("h2").innerHTML = "✌ Try Again - Player:Gun - Comp:Water ✌" ;
            var audio = new Audio("gun.mp3");
            audio.play();
        }
        if(buthtml=="Gun" && x ==3){
            document.querySelector("h2").innerHTML = "Draw - Player:Gun - Comp:Gun";
            var audio = new Audio("gun.mp3");
            audio.play();
        }
    });
};
setTimeout(function(){
    window.location.reload();
 }, 2500);
