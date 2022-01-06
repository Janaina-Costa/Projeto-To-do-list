
const btnAdd = document.getElementById('btn-add')
const lista = document.querySelector('#lista')


btnAdd.addEventListener('click', (e, limite)=>{
    e.preventDefault()

    const tarefa = document.getElementById('tarefa')
    addTarefa(tarefa.value)
    
    tarefa.value = ''
    

 })

const addTarefa = (tarefinha)=>{
    
    const listaContainer = document.createElement('div')
    const novoInput = document.createElement('input') 
    const novoBr = document.createElement('br')
    const novaLabel = document.createElement('label')
    const textoLabel = document.createTextNode(tarefinha)

    

    novoInput.type = 'checkbox'
    novoInput.name = tarefinha
    novoInput.id= tarefinha
    

    novaLabel.for = tarefinha
    novaLabel.appendChild(textoLabel)

    listaContainer.classList.add('delete')
    listaContainer.appendChild(novoBr)
    listaContainer.appendChild(novoInput)
    listaContainer.appendChild(novaLabel)

    lista.appendChild(listaContainer)
    
   

}






