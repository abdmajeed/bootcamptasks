var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);

    var flags=data.map(a=>a.flags);
    console.log(flags);

    var names =data.map(a=>a.name);
    console.log(names);
    var region=data.map(a=>a.region);
    console.log(region);
    var pop=data.map(a=>a.population);
    console.log(pop);
  
    
    
    
}