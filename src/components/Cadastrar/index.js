import React from 'react'
import '../Styles/styles.css'
import {Link} from 'react-router-dom'
import firebase from '../FirebaseConnection'

import logo from './icon.png'

class Cadastrar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      inputNome: '',
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: ''
    }
    this.cadastrar = this.cadastrar.bind(this)

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        firebase.database().ref('usuarios').child(user.uid).set({
          nome: this.state.inputNome
        })
      }
    })

  }

  cadastrar(e){
    if(this.state.senha != this.state.confirmarSenha){
      alert("A senha não está correta!")
    }

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .then(() => {
        alert("Usuario cadastrado com sucesso!")
        this.setState({
          email: '',
          senha: '',
          confirmarSenha: ''
        })
    })
    .catch((error) => {
      if(error.code === 'auth/incalid-email'){
        alert("E-mail incorreto!")
      }
      if(error.code === 'auth/weak-password'){
        alert("Senha muito pequeno!")
      }
    })

    e.preventDefault()
  }

  render() {
    return (
      <div className="container">
        <div className="containerFormCadastro">
          <img src={logo} className="logo"/>
          
          <form onSubmit={this.cadastrar}>
            <label>Nome: </label><br/>
            <input type="text" placeholder="Email@gmail.com" value={this.state.inputNome}
                    onChange={(e) => this.setState({inputNome: e.target.value})}/><br/>

            <label>Email: </label><br/>
            <input type="text" placeholder="Email@gmail.com" value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value})}/><br/>

            <label>Senha: </label><br/>
            <input type="password" placeholder="****" value={this.state.senha}
                    onChange={(e) => this.setState({senha: e.target.value})}/><br/>

            <label>Confirmar senha: </label><br/>
            <input type="password" placeholder="****" value={this.state.confirmarSenha}
                    onChange={(e) => this.setState({confirmarSenha: e.target.value})}/><br/>
            
            <div className="containerButton">
              <button type="submit" className="styleButton">Cadastrar</button>
              <p>Login <Link to={"/"} className="createUser">Aqui!</Link></p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Cadastrar