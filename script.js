var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response)
    //console.log(data);

    var Asia = data.filter(a => a.region==='Asia')
    console.log(Asia);

    var pop = data.filter(a => a.population<200000)
    console.log(pop);

    data.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })

    var tot = data.reduce((i,c) =>  i+c.population,0 )
    console.log(tot);

    var cur = data.filter(a => a.currencies.name=="United States dollar")
    console.log(cur);
    
    
    
}