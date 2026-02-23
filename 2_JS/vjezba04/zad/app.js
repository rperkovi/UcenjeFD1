
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innrML=''
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const c = document.getElementById('c').value;
  const d = document.getElementById('d').value;
  const zadatak = document.getElementById('zadatak').value;

  // Za svaki zadatak zahtijevamo određene ulaze
  if (zadatak === '1') {
    console.log('1. zadatak');
    console.log(a);
    
   if (zadatak === '1') 


    
    return; // short curcuiting
  }

  // Ovdje će doći drugi zadatak


if(zadatak === '5') {
  console.log('Rjesavam zadata 5')







  return
}

if(zadatak === '9'){
const x=Number(a)
const y=Number(b)
const z=Number(c)
const q=Number(d)

if(!x )
  return
}

if(zadatak ==='6'){

const x = Number(d)
if(!x || x!=0){
  rezultat.innerHTML='Vrijednos u polju d nije broj ili je 0'
  return
}
rezultat.innerHTML = x*10
  return
}

if(zadatak ==='7'){
if(!b){
  rezultat.innerHTML= 'Obavezan unos grada po vrijednosti B'



}

if(b.toLowerCase ==='osijek'){
  rezultat.innerHTML=`${b} je sjedište Edunove`
}
else {
  rezultat.innerHTML=`${b} nije sjedište Edunove`
}



  return
}


if(zadatak === '8'){
//8. Za upisane pojmove u polju AiB ispisi ih jednog pokraj drugog

rezultat.innerHTML=`${a} ${b}`







return
}



//9. Ispiši umnožak A i D

if(zadatak === '5'){
const x=Number(a)
const y=Number(d)
if(!x || x===0){
  rezultat.innerHtml='Greška'
  return
}

rezultat.innerHTML


  return
}








  
  // ovo će se ispisati ako u HTML dodatke option za zadatak a ovdje ga ne obradite
  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
});






