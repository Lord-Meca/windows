
function copyDiscord(){

    navigator.clipboard.writeText("Lord_Meca#9348");

    document.querySelector(".contact").textContent = "Copié";

    setTimeout(() =>{
        document.querySelector(".contact").textContent = "Discord : Lord_Meca#9348";
    }, 1000);

}



function checkBoxNavBar(){

    const barsButton = document.querySelector("#check");
    const footer = document.querySelector(".footer");
    const middleTextDiv = document.querySelector(".middle-text");

    if(barsButton.checked) {
        footer.style.display = "none";
        middleTextDiv.style.display = "none";
        document.getElementById("icon").className = "fa fa-close";
    } else {
        footer.style.display = "grid";
        middleTextDiv.style.display = "block";
        document.getElementById("icon").className = "fa fa-bars";
    }


}

setInterval(() =>{
    
    const barsButton = document.querySelector("#check");

    if(document.body.offsetWidth >= 1207){

        barsButton.checked = false;
        document.getElementById("icon").className = "fa fa-bars";

      

    }

    if(!barsButton.checked){
        if(document.body.offsetWidth >= 1207){
            document.querySelector(".middle-text").style.display = "block";

            document.querySelector(".button").style.fontSize = "25px";
            document.querySelector(".button").style.padding = "12px 40px";
            document.querySelector(".middle-text").style.paddingTop = "200px";
            document.querySelector(".text").style.fontSize = "24px";

            document.querySelector(".footer").style.display = "grid";
            document.querySelector(".button").style.marginTop = "0";
        }
    }

    if(document.body.offsetWidth <= 975){

    

        document.querySelector(".button").style.fontSize = "40%";
        document.querySelector(".middle-text").style.paddingTop = "100px";
        document.querySelector(".text").style.fontSize = "12px";
        document.querySelector(".button").style.marginTop = "0";

    } 

    if(document.body.offsetWidth <= 612){

        

        document.querySelector(".button").style.fontSize = "20%";
        document.querySelector(".button").style.padding = "8px 30px";
        document.querySelector(".button").style.marginTop = "-3%";
        document.querySelector(".middle-text").style.paddingTop = "60px";
        document.querySelector(".text").style.fontSize = "7px";

    }

    if(document.body.offsetHeight > 975){
        document.querySelector(".button").style.fontSize = "25px";
        document.querySelector(".button").style.padding = "12px 40px";
        document.querySelector(".middle-text").style.paddingTop = "200px";
        document.querySelector(".text").style.fontSize = "24px";
    
    }

    if(document.body.offsetWidth < 350){
        document.querySelector(".middle-text").style.display = "none";
    } else {

        if(!barsButton.checked){
            document.querySelector(".middle-text").style.display = "block";
        }

        
    }

}, 100);


