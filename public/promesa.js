//COMO SE COMPONEN LAS PROMESAS, SON LOS DOS COMINOS POSIBLES

const promise = new Promise ((resolve,reject)=>{
    
    //RESOLVERLA
    resolve({status:'Aceptado'});

    //RECHAZADA
    reject({status:'Rechazado'});
});

promise.then((data)=>{
    console.log(data);
    throw new Error('Ha ocurrido un error')
}, error => {
    console.log(error);
    }
)
.catch(error => {console.log(error);
});