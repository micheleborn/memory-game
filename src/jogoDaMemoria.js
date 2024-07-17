
class JogoDaMemoria {


    constructor({ tela, util }) {
        this.tela = tela
        this.util = util

        this.iconePadrao = 'https://www.micheleborn.com/memory-game/bear-card-back.jpg'
        this.heroisIniciais = [
            { img: 'https://www.micheleborn.com/memory-game/card1.jpg', nome: 'BeeBear' },
            { img: 'https://www.micheleborn.com/memory-game/card2.jpg', nome: 'FrogBear' },
            { img: 'https://www.micheleborn.com/memory-game/card3.jpg', nome: 'BearFrog' },
            { img: 'https://www.micheleborn.com/memory-game/card4.jpg', nome: 'BearBear' },
            { img: 'https://www.micheleborn.com/memory-game/card5.jpg', nome: 'IceCreamShop' },
            { img: 'https://www.micheleborn.com/memory-game/card6.jpg', nome: 'Cast' },
        ]

        this.heroisEscondidos = []
        this.heroisSelecionados = []
    }

    inicializar() {
        this.tela.atualizarImagens(this.heroisIniciais)
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarClickVerificarSelecao(this.verificarSelecao.bind(this))
        this.tela.configurarBotaoMostrarTudo(this.mostrarHeroisEscondidos.bind(this))

    }
    esconderHerois(herois) {
        const heroisOcultos = herois.map(({ nome, id }) => ({
            id,
            nome,
            img: this.iconePadrao
        }))

        this.tela.atualizarImagens(heroisOcultos)
        this.heroisEscondidos = heroisOcultos
    }

    exibirHerois(nomeHeroi) {
        const { img } = this.heroisIniciais.find(({ nome }) => nomeHeroi === nome)
        this.tela.exibirHerois(nomeHeroi, img)
    }

    verificarSelecao(id, nome) {
        const item = { id, nome }
      
        const heroisSelecionados = this.heroisSelecionados.length
        switch (heroisSelecionados) {
            case 0:
                this.heroisSelecionados.push(item)
                break;
            case 1:
                const [opcao1] = this.heroisSelecionados
             
                this.heroisSelecionados = []
                let deveMostrarMensagem = false
                if (opcao1.nome === item.nome && opcao1.id !== id) {
                    deveMostrarMensagem = true
                    this.exibirHerois(item.nome)
                    this.tela.exibirMensagem(true)
                    return;
                }
                this.tela.exibirMensagem(false)
                break;
        }
    }
    mostrarHeroisEscondidos() {
        const heroisEscondidos = this.heroisEscondidos
        for (const heroi of heroisEscondidos) {
            const { img } = this.heroisIniciais.find(item => item.nome === heroi.nome)
            heroi.img = img
        }
        this.tela.atualizarImagens(heroisEscondidos)
    }
    async embaralhar() {
        const copias = this.heroisIniciais

         
            .concat(this.heroisIniciais)
          
            .map((item) => {
                return Object.assign({}, item, { id: (Math.random() / 0.3) })
            })
         
            .sort(() => Math.random() - 0.3)

        this.tela.atualizarImagens(copias)
        this.tela.exibirCarregando()

        const idIntervalo = this.tela.iniciarContador()
        await this.util.timeout(3000);
        this.tela.limparContador(idIntervalo)

        this.esconderHerois(copias)
        this.tela.exibirCarregando(false)

    }

    jogar() {
        this.embaralhar()
    }

}