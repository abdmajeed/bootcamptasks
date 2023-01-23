let h=document.createElement('h1');
document.body.append(h);
setTimeout(()=>{
   h.innerText = 10;
    setTimeout(()=>{h.innerText = 9,
        setTimeout(()=>{h.innerText = 8
            setTimeout(()=>{h.innerText = 7
                setTimeout(()=>{h.innerText = 6
                    setTimeout(()=>{h.innerText = 5
                        setTimeout(()=>{h.innerText = 4
                            setTimeout(()=>{h.innerText = 3
                                setTimeout(()=>{h.innerText = 2
                                    setTimeout(()=>{h.innerText = 1
                                        setTimeout(()=>{h.innerText = "happy independence day"
                                        },1000)},1000)},1000)},1000)},1000)},1000)},1000)},1000)},1000)},1000)
},1000);