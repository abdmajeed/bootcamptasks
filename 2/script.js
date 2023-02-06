var div = document.createElement('div');
div.innerHTML=`<input type="text" id="txt">
<button type="button" onclick="search()"> Search</button>
<div id="active"></div>`;

document.body.append(div);

async function search(){

    let userinput = document.getElementById("txt").value
 
    let res = await fetch(`https://api.covid19api.com/dayone/country/${userinput}`)

    let result = await res.json();

    

    var index= result.length-1;

    var result1 = result[index].Active;

    document.getElementById("active").innerText=`Total Active Cases:${result1}`;
}