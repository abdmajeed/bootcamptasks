const ul = document.getElementById('cars');
let url1 = 'https://parallelum.com.br/fipe/api/v1/motos/marcas';
let url2 = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';
let h3=document.createElement('h2');
h3.innerText='CARS'
let h4=document.createElement('h2');h4.innerText='BIKES'
let select =document.createElement("select");
let select2=document.createElement('select');
let div1=document.createElement('div');
let div2=document.createElement('div');
let div=document.createElement('div');

div1.append(h3,select);
div2.append(h4,select2)
document.body.append(div1,div2,div);



var cars = []
var bikes =[]
fetch(url2)
    .then((response) => response.json())
    .then(data => {

    
        cars=data;
    

    for(let car in data){
        let options= document.createElement('option');
        options.value =data[car].nome;
        console.log(options)
        options.innerText=data[car].nome;
        select.append(options)
    }
   })

    

fetch(url1)
    .then((response) => response.json())
    .then(data => {bikes = data
data.forEach(el=>{
       let options1 = document.createElement('option');
            options1.value =el.nome;
            console.log(options1)
            options1.innerText=el.nome;
            select2.append(options1);
                })

})

select2.addEventListener('change',(e)=>{
    
    console.log(bikes,e.target.value)
        div.innerHTML=e.target.value
    }
)
        

    
