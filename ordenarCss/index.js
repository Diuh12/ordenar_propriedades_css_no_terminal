const readline = require('readline')

const rl = readline.createInterface(process.stdin, process.stdout)

const props = [] 
let status = false 
rl.setPrompt('Qual propriedade você gostaria de ordenar?\n')
quest() 
function quest() { 
    rl.prompt()
    rl.on('line', (response) => {
        if(response === 'sair' && status === false){ 
            status = true
            order() 
           rl.close()
        }else if(status != true){
            props.push(response)
            quest()
        }
    })
}

function order(){
    const unicProps = [...new Set(props)] 
    const propsOrder = unicProps.sort()
    console.log('Sua lista CSS ordenada de a-z abaixo:');
    propsOrder.forEach(item=>console.log(item+'\n')); 
    
    return
}