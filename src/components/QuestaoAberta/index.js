import React, { Component } from 'react';
import './index.css'
import logo from '../../assets/logo.png'

class QuestaoMultiplaEscolha extends Component {
    render() {
        return (
            <fieldset>
                <legend>{this.props.titulo}</legend>
                <p class="pergunta">{this.props.pergunta}</p>
                {this.props.alternativas.map((alternativa, index) => (
                    <label key={index}>
                        <input
                            type="radio"
                            name={this.props.name}
                            value={alternativa.valor}
                        />
                        {alternativa.texto}
                    </label>
                ))}
            </fieldset>
        );
    }
}

class QuestaoAberta extends Component {
    render() {
        return (
            <fieldset>
                <legend>{this.props.titulo}</legend>
                <p class="pergunta">{this.props.pergunta}</p>
                <textarea
                    name={this.props.name}
                    rows="4"
                    cols="50"
                ></textarea>
            </fieldset>
        );
    }
}

class FormularioQuestoes extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                <div class="sectionLogo">
                    <img class="logo" src={logo}/>
                </div>
                    <QuestaoMultiplaEscolha
                        titulo="Questão 1: Múltipla Escolha"
                        pergunta="Qual dos seguintes dispositivos é usado para entrada de dados em um computador?"
                        name="questao1"
                        alternativas={[
                            { texto: 'A) Monitor', valor: 'a' },
                            { texto: 'B) Impressora', valor: 'b' },
                            { texto: 'C) Teclado', valor: 'c' },
                            { texto: 'D) Caixa de som', valor: 'd' },
                        ]}
                    />

                    <QuestaoMultiplaEscolha
                        titulo="Questão 2: Múltipla Escolha"
                        pergunta="Qual das seguintes linguagens é usada principalmente para criação de páginas web?"
                        name="questao2"
                        alternativas={[
                            { texto: 'A) Python', valor: 'a' },
                            { texto: 'B) Java', valor: 'b' },
                            { texto: 'C) C++', valor: 'c' },
                            { texto: 'D) HTML', valor: 'd' },
                        ]}
                    />

                    <QuestaoAberta
                        titulo="Questão 3: Resposta Aberta"
                        pergunta="Explique o que é a computação em nuvem e quais são os principais benefícios que ela oferece para indivíduos e empresas."
                        name="questao3_resposta"
                    />
                    <button class="enviar" type="submit" value="Enviar Respostas">Enviar Respostas</button>
                </form>
            </div>
        );
    }
}

export default FormularioQuestoes;