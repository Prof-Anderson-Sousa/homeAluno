import React from 'react';
import './login.css';
import logo from '../../assets/logo.png'

export default function Login() { 
    return(
        <div class="container">
        <div class="wrap">
        <section>
            <div class="logo-container">
                <img src={logo}/>
            </div>
                <div class="login">
                <h1>Faça seu Login</h1>
                <form action="" method="post">
                    <input type="text" id="cpf" name="cpf" placeholder="CPF" required/>
                    <input type="password" id="senha" name="senha" placeholder="Senha" required/>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </section>
        </div>
    </div>
      
        
    )

    
}