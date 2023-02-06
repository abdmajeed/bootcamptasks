

fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-ummmuhammad.json")
.then(res=>res.json())
.then(data=>{
   let arr= data.quran
   console.log(data)
   arr.forEach(e => {
    let p = document.createElement('p')
    p.innerText=e.text
    document.body.append(p)
    
   });
   
 
    
    });
   