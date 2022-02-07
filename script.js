document.body.innerHTML=`<div class="results">
        <div id="cat_result" class="result">
        <p>Random Cat Placeholder</p>
     </div>
    </div>
    <div class="buttons">
    <button id="cat_btn" type="button" onclick="getData()" >Get Cat</button></div>`


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


