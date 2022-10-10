var checkInputs = document.querySelectorAll(".category input");
var textInput = document.getElementById("input-01");
var submitInput = document.getElementById("input-02");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers  = "1234567890";
var symboles = "@#$&*~)(";
var password = "";
var all="";
//to check types
checkInputs.forEach((ele) =>{
    ele.addEventListener("click" ,function (){
        checkInputs.forEach((ele)=>{
            if(ele.value === "uppercase" &&  ele.checked === true){all +=upperCase;
            }else if(ele.value === "lowercase" &&  ele.checked === true){all +=lowerCase;
            }else if(ele.value === "numbers" &&  ele.checked === true){all +=numbers;
            }else if(ele.value === "symboles" &&  ele.checked === true){all +=symboles;
            }
        })
    })
})

let range = document.getElementById("range");
let rangeLength = document.getElementById("rangeLength");
let lengthOfPassword = 0;

range.addEventListener("input" ,function (){
    rangeLength.innerHTML = range.value;
    lengthOfPassword = range.value;
})
rangeLength.innerHTML = range.value;
// to do and show password
submitInput.addEventListener("click" ,function (e){
    e.preventDefault();
    if(all !== ""){
        for(var i=0;i<lengthOfPassword;i++){password +=all[Math.floor(Math.random()*all.length)]}
            textInput.value = password;
    }
    else{window.alert("input Empty!!")}
    all = "";
})
//to copy password
document.getElementById("icon").addEventListener("click",function (){navigator.clipboard.writeText(textInput.value);})
