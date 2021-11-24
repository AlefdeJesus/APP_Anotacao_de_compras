class Produto {
    constructor(){
        this.id = 1
        this.arrayProdutos = []
		this.multPreco = ''
        this.multQuantidade = ''
        this.saida = []
    }
    
    salvar(){
       var produto = this.lerDados()
       if(this.validaCampos(produto)){
           this.adicionar(produto)
          
       }
        this.listaTabela()
        this.cancelar()
        document.getElementById('produto').focus()

        
    }
    
    listaTabela(){
        var tbody = document.getElementById('tbody')
        tbody.innerText = ''
        for ( var i = 0;i<this.arrayProdutos.length;i++){
            var tr = tbody.insertRow()
          //  var td_id = tr.insertCell()
            var td_produto = tr.insertCell()
            var td_quantidade = tr.insertCell()
            var td_preco = tr.insertCell()
            var td_acao = tr.insertCell()
           

           // td_id.innerText = this.arrayProdutos[i].id
            td_produto.innerText = this.arrayProdutos[i].nomeProduto.toUpperCase()
            td_quantidade.innerText = this.arrayProdutos[i].quantidade
            td_preco.innerText = `R$${this.arrayProdutos[i].preco}`
                      //  td_mult.innerText = this.mult   
//O CODIGO ABAIXO ADICIONA UMA CLASSE DENTRO DA TAG TD PELO JS E DEIXA AS PALVRAS NO CENTRO
          //  td_id.classList.add('center')
			  td_quantidade.classList.add('center')
			  td_preco.classList.add('center')
			  td_produto.classList.add('center')
          

            var imgDelet = document.createElement('img')
            imgDelet.src = 'img/delet.png'
        imgDelet.setAttribute("onclick","produto.deletar("+this.arrayProdutos[i].id+")")
            td_acao.appendChild(imgDelet)//isso faz <td><img></td>
            td_acao.classList.add('center')

        }
    }
    adicionar(produto){
        this.arrayProdutos.push(produto)
        this.id++
        this.saida=[]
       console.log(produto)
      
     
    }
    lerDados(){
        var produto = {}

        produto.id = this.id
        produto.nomeProduto = document.getElementById('produto').value
        produto.quantidade = document.getElementById('quantidade').value
        produto.preco = document.getElementById('preco').value

        return produto

    }
    validaCampos(produto){
        var msg = ''
        if(produto.nomeProduto == ''){
            msg += '*Favor informe o nome do produto \n'
    }   
    if(produto.quantidade == ''){
        msg += '*Favor informe a quantidade de produto \n'
  
    }
    if(produto.preco == ''){
        msg += '*Favor informe o preco do produto \n'
  
    }
    if (msg != ''){
        alert(msg)
        return false
    }
    return true
   
} 

    cancelar(){
            document.getElementById('produto').value = ''
            document.getElementById('quantidade').value = ''
            document.getElementById('preco').value = ''
        
    }
    deletar(id){
       
        var tbody = document.getElementById('tbody')
        for(var i = 0; i < this.arrayProdutos.length;i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i,1)
                tbody.deleteRow(i)
                
               
            }
            
        }
        this.total = ''
        this.tr_total.innerText = ''
     
    }
    precoFinal(){
        for(var i = 0; i < this.arrayProdutos.length;i++){

            //ESSAS DUAS VARIAVEIS ABAIXO AMAZENA O VALOR DE PRECO E QUANTIDADE DENTRO DELAS
              this.multPreco = this.arrayProdutos[i].preco
              this.multQuantidade = this.arrayProdutos[i].quantidade

             //O ARRAY ABAIXO MULTIPLICA QUANTIDADE POR PRECO
              this.saida.push( this.multQuantidade*this.multPreco)

                //A FUNÇÃO ABAIXO SOMA TODOS OS VALORAS QUE ESTA DENTRO DO ARRAY SAIDA[]
                 this.total = this.saida.reduce(function(total, saida){
                      return total + saida;
                     }, 0);
            
       }
            if(this.total == ''){
                alert('*Adicione um Produto!')
                this.tr_total = ''
            }
            this.trw = tbody.insertRow()
             
        this.tr_total = this.trw.insertCell()
        this.tr_total.innerHTML = `Total:<strong> R$${this.total.toFixed(2)} </strong>`
             console.log(this.total)
             this.tr_total.classList.add('tr_total')
      
    }
    finalizar(){
        this.precoFinal()
        this.saida=[]
       
    } 
    
    
}  
var produto = new Produto()