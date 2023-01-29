let h1 = document.createElement("h1")
let Div = document.createElement("div")
let div1 =document.createElement('div')

h1.innerText = 0
let no1 = document.createElement("button"); no1.innerText = 1;
document.body.addEventListener('keypress', (e) => {
    console.log(e)
    if (e.charCode >= 48 && e.charCode <= 57 || ["+",'*','/','-','c','='].includes(e.key)) {
        
        //dont allow others
        if (e.key == 'c') {
            h1.innerText = 0
            return
        }

        if (e.key == '=') {
            h1.innerText = eval(h1.innerText)
            return
        }
        h1.innerText = h1.innerText + e.key
    }
    return


})
let no2 = document.createElement("button"); no2.innerText = 2;
let no3 = document.createElement("button"); no3.innerText = 3;
let no4 = document.createElement("button"); no4.innerText = 4;
let no5 = document.createElement("button"); no5.innerText = 5;
let no6 = document.createElement("button"); no6.innerText = 6;
let no7 = document.createElement("button"); no7.innerText = 7;
let no8 = document.createElement("button"); no8.innerText = 8;
let no9 = document.createElement("button"); no9.innerText = 9;
let no0 = document.createElement("button"); no0.innerText = 0;
let sum = document.createElement("button"); sum.innerText = "+";sum.setAttribute('id','add')
let sub = document.createElement("button"); sub.innerText = "-";sub.setAttribute('id','subtract')
let div = document.createElement("button"); div.innerText = "/";
let mul = document.createElement("button"); mul.innerText = "*";
let c = document.createElement("button"); c.innerText = "c";
c.setAttribute('id','clear')
let e = document.createElement("button"); e.innerText = "=";
e.setAttribute('id','equal')
let b=document.createElement("button"); b.innerText = "<=";
Div.append( no1, no2, no3, no4, no5, no6, no7, no8, no9, no0, sum, sub, div, mul, c, e,b);
div1.append(h1,Div)
h1.setAttribute('id','title')
div1.setAttribute('class','div1')
Div.setAttribute('class','div2')
document.body.append(div1)

h1.addEventListener('change', () => { })
