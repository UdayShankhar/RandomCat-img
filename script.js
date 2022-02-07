const btn1 = document.getElementById("cat_btn");
const cat_result = document.getElementById("cat_result")

btn1.addEventListener("click",getData) 

    function getData() {
    fetch("https://aws.random.cat/meow")
    .then(res=>res.json())
    .then(data=>{
        cat_result.innerHTML = `<img 
        src=${data.file} width:10px height:10px>`
    })
}


