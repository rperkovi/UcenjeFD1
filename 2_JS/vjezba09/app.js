
const isDev=true



pozdraviSvijet()



function pozdraviSvijet(){
    console.log('Hello world')

}


pozdraviSvijet()




function parniBrojevi(odBroja,doBroja){
    const max = odBroja>doBroja ? odBroja : doBroja
    const min = odBroja<doBroja ? odBroja : doBroja
    for(let i=odBroja;i<doBroja;i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }
}

log('Prvi poziv')
parniBrojevi(3,8)
log('Drugi poziv')
parniBrojevi(59,65)
log('treci poziv')
parniBrojevi(12,7)


function log(poruka){
    console.log('-----------------')
    console.log(poruka)
    console.log('----------------')
}



function slucajniBroj(){
        const broj = Math.random()
        log(broj)
        const uvecano = broj * 1000
        const intb = parse
        return broj * 1000
    }


slucajniBroj()


const sb = slucajniBroj()
log(sb)