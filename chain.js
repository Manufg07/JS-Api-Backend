let p =  new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(10);
    }, 3 * 1000);
});
// let result=0;
p.then((result) =>{
    console.log(result);
    return result *2;
}).then((result) =>{
    console.log(result);
    return result *3;
}).then((result) =>{
    console.log(result);
    
    return result *4; 
    
})
.finally((result)=>{
console.log(result);})