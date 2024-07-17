
const util = Util

const ID_CONTEUDO = "cards-wrapper"
const ID_BOTAO_JOGAR = "jogar"
const ID_MENSAGEM = "mensagem"
const CLASSE_INVISIVEL = "invisible"
const ID_CARREGANDO = "carregando"
const ID_CONTADOR = "contador"
const ID_BOTAO_MOSTRAR_TUDO = "mostrarTudo"
const MENSAGENS = {
    sucesso: {
        texto: "Combinação correta!",
        classe: "alert-success"
    },
    erro: {
        texto: "Combinação incorreta!",
        classe: "alert-danger"
    }
}
class Tela {
    static obterCodigoHtml(item) {
       return `
        <div class="col-md-3">
            <div class="card" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
                <img name="${item.nome}" src="${item.img}" class="card-img-top" alt="..." />
            </div>
        </div> 
        `
    }
    static alterarConteudoHTML(codigoHtml) {
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml
    }
    static gerarStringHTMLPelaImagem(data) {
        return data.map(Tela.obterCodigoHtml).join('')
    }

    static async exibirMensagem(sucesso = true) {
        
        const elemento = document.getElementById(ID_MENSAGEM)
        if(sucesso) {
            elemento.classList.remove(MENSAGENS.erro.classe)
            elemento.classList.add(MENSAGENS.sucesso.classe)
            elemento.innerText = MENSAGENS.sucesso.texto
        }
        else {
            elemento.classList.remove(MENSAGENS.sucesso.classe)
            elemento.classList.add(MENSAGENS.erro.classe)
            elemento.innerText = MENSAGENS.erro.texto
        }

        elemento.classList.remove(CLASSE_INVISIVEL)
        await util.timeout(1000)
        elemento.classList.add(CLASSE_INVISIVEL)

    }

    static iniciarContador() {
        let contarAte = 3
        const identificadorNoTexto = "$$contagem"
        const textoPadrao = `Launching in ${identificadorNoTexto} ...`
        const elementoContador = document.getElementById(ID_CONTADOR)
        
        const atualizarTexto = _ => 
            (elementoContador.innerHTML = textoPadrao.replace(identificadorNoTexto, contarAte--))
        
        atualizarTexto()

        const idIntervalo = setInterval(atualizarTexto, 1000);
        return idIntervalo
         
    }
    static limparContador(idContador) {
        clearInterval(idContador)
        document.getElementById(ID_CONTADOR).innerHTML = ""
    }


    static exibirCarregando(mostrar = true ) {

        const carregando = document.getElementById(ID_CARREGANDO)
        if (mostrar) {
            carregando.classList.remove(CLASSE_INVISIVEL)
            return
        }
        carregando.classList.add(CLASSE_INVISIVEL)
    }
    static atualizarImagens(itens) {
        const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens)
        Tela.alterarConteudoHTML(codigoHtml)
    }
    static exibirHerois(nome, img) {
        const elements = document.getElementsByName(nome)
        elements.forEach(item => (item.src = img))
    }
    static configurarBotaoJogar(funcaoOnclick) {
        const btnJogar = document.getElementById(ID_BOTAO_JOGAR)
        btnJogar.onclick = funcaoOnclick
    }
    static configurarClickVerificarSelecao(funcaoOnclick) {
        window.verificarSelecao = funcaoOnclick
    }
    static configurarBotaoMostrarTudo(funcaoOnclick) {
        const btnMostrarTudo = document.getElementById(ID_BOTAO_MOSTRAR_TUDO)
        btnMostrarTudo.onclick = funcaoOnclick
    }
}

