

const heading = document.createElement("p");
var current = 0
heading.innerText = "change: 0"
document.body.append(heading);

const ul = document.createElement("ul");

let div =document.getElementById('div');
document.body.append(div,ul);


var table=document.getElementsByTagName('th')
var td =document.getElementsByTagName('td')

fetch('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json')
    .then(Response => Response.json())
    .then(data => {
        data.forEach(e => {
          var li1 = document.createElement("button");
            li1.innerHTML=e.id;
            ul.append(li1);
           
     li1.addEventListener('click',()=>{
      heading.innerText= `change :${e.id}`
      table.innerText= e.id

      td.innerText =e.name
      
      
    })

    })  
  } 
       )    
        
  