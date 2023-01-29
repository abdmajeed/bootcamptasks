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




fetch(url2)
    .then((response) => response.json())
    .then(data => {
        console.log(data)
        var cars = [];
    
        data.forEach(element => {
            cars.push(element.nome);})
            console.log(cars)

    for(let car in data){
        let options= document.createElement('option');
        options.value =data[car].key;
        options.innerText=data[car].nome;
        select.append(options)
    }
   });

    

fetch(url1)
    .then((response) => response.json())
    .then(data => {console.log(data)
data.forEach(el=>{
       let options1 = document.createElement('option');
            options1.value =el.key;
            options1.innerText=el.nome;
            options1.addEventListener('change',()=>{fetch(url1).then(res=>res.json()).then(
                data=>{console.log(data)
           
            data.forEach(e=>{if(select2.value==e.key){
                div.innerText= '${e.key}';
                console.log(div)
            }})})})
    
            select2.append(options1)})

})


        

    
