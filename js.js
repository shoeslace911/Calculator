let display = document.querySelector(".display");
let history = document.querySelector(".history");

let buttons = Array.from(document.getElementsByClassName("button"));
console.log(buttons);

buttons.map(buttons => {
    buttons.addEventListener("click", (e) =>{
        switch(e.target.innerText){
            case "AC":
                display.innerText = '';
                break;
            case "←":
                if(display.innerText){
                display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case "=":
                try{
                    display.innerText = eval(display.innerText);
                   
                }catch{
                    display.innerText = "error";
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})

