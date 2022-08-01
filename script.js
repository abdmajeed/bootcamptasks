var arr1=[1,2,3,4,5,6,7,8];
var arr2=['sam','tom','ram','mom','wow'];
/*print odd using anonymous and iife */
var f1  = function(a) {var odd=[];
    for(i in a){
     if(i%2==1) odd.push(i);
}console.log(odd);};
f1((arr1))

(function(a){
    var odd=[];
    for(i in a){
     if(i%2==1) odd.push(i);
}console.log(odd);})
(arr1)
   /*string uppercase*/
var tc = (a)=>{
    var ne = [];
    for (s of a){
    (s.charAt(0)).toUpperCase();
    ne.push(s);
    }
    return ne; 
};
/* sum of all numbers*/
console.log(tc(arr2));
 var sum = function(a){return a.reduce((i,c) => i+c,0)};
 console.log(sum(arr1));
 
 ( function(a) { a.reduce((i,c) => i+c,0);})
 console.log (arr1);
