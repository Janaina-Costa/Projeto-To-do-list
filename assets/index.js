
const btnAdd = document.getElementById('btn-add')
const lista = document.querySelector('#lista')
//const excluirarefa = document.getElementById('excluir')


let limite = 5


btnAdd.addEventListener('click', (e, tarefinha)=>{
    e.preventDefault()
    
    const tarefa = document.getElementById('tarefa')
    
    if(tarefa.value){
        addTarefa(tarefa.value)

    }else if(tarefa.value === ''){
        tarefa.setAttribute('placeholder', `Preecha o campo antes de adicionar a tarefa \u{1F913}`)
        //alert(`Preecha o campo antes de adicionar a tarefa \u{1F913}`)

        tarefa.value = ''
        
    }

    tarefa.addEventListener('focus', ()=>{
        tarefa.setAttribute('placeholder', 'Digite aqui a sua tarefa')
    })

    
    tarefa.value = ''    

 })

 /**   add tarefas a lista         */
 

const addTarefa = (tarefinha)=>{

    /**criando os elementos */
    
    const listaContainer = document.createElement('div')
    const novoInput = document.createElement('input') 
    const novoBr = document.createElement('br')
    const novaLabel = document.createElement('label')
    const textoLabel = document.createTextNode(tarefinha)
    const btnExclusao = document.createElement('button')
    const imagem = document.createElement('img')
    
    const tarefa = document.getElementById('tarefa')

    novoInput.type = 'checkbox'
    novoInput.name = tarefinha
    novoInput.id= tarefinha
    
    imagem.src = './assets/img/icon-exclud.png'
    imagem.alt='Botao de excluir'
    imagem.classList.add('img-config')

    btnExclusao.appendChild(imagem)
    btnExclusao.classList.add('btn-exclusao')
  

    novaLabel.for = tarefinha
    novaLabel.appendChild(textoLabel)
    // novaLabel.appendChild(btnExclusao)

    listaContainer.classList.add('delete')
    //listaContainer.appendChild(novoBr)
    listaContainer.appendChild(novoInput)
    listaContainer.appendChild(novaLabel)
    listaContainer.appendChild(btnExclusao)

    lista.appendChild(listaContainer)   

     /**================================================= */
    /**limitando o tamanho da lista */

    let lenghtLista = lista.children.length
    
    
    if(lenghtLista>=limite && !novoInput.checked){
        tarefa.disabled = true
    }
    
    const controleLista = ()=>{
        if(lenghtLista>limite ){
            tarefa.disabled = true
         }else if(lenghtLista<=limite) {
            
             tarefa.disabled = false
        }
    }
    /**================================================= */


    /**================================================= */
    /**checando lista */

    console.log(lenghtLista);
    novoInput.addEventListener('change',(e)=>{
       
        e.preventDefault()
       
        limite+=1
        
        controleLista()
        
    })

    /**================================================= */

    /**================================================= */
    /**tentando deletar elemento */
    btnExclusao.addEventListener('click', (e)=>{
        e.preventDefault()
        
        console.log(`limite${limite}`);
        console.log(`tamanho${lenghtLista}`);
        
        
        listaContainer.childNodes.forEach((item)=>{
           
           item.replaceWith('') 
           lenghtLista= (limite -lenghtLista )-1
           if(lenghtLista<=limite || controleLista()){
               
               tarefa.disabled = false
            }
            
            
            
        }) 
        
        
             
            
    })
}


