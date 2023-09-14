// création de la promesse
const promesse = new Promise(function(resolve,reject){
    resolve(data);
    reject('données inaccessibles');
});

// capter la promesse
promesse
.then(function(u){
    liste = `<ul>`;
    for (let i=0;i<u.loisirs.length;i++){
        liste += `<li>${u.loisirs[i]}</li>`;
    }
    liste += `</ul>`;
    document.querySelector('#mesloisirs').innerHTML = liste;
})
.catch(function(dataReject){
    console.log(dataReject);
});

