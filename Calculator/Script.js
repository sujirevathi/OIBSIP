let res=document.getElementById("inputtext");

let calculate=(number)=>{
     res.value+=number;
}

let result=()=>{
    try{
        res.value=eval(res.value)
    }
    catch(err){
        alert("Invalid");
    }
}

function clr(){
    res.value=" ";
}

function del(){
    res.value=res.value.slice(0,-1);
}