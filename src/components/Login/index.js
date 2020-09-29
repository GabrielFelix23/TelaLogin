import React from 'react'
import '../Styles/styles.css'
import {Link} from 'react-router-dom'
import firebase from '../FirebaseConnection'

import logo from './icon.png'

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      nome: null,
      email: '',
      senha: '',
      user: null
    }
    this.logar = this.logar.bind(this)
    this.sair = this.sair.bind(this)
    this.auth = this.auth.bind(this)

    firebase.auth().signOut()
  }
  componentDidMount(){
    this.auth()
  }

  auth(){
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        user: user
      })
    })
  }

  logar(e){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error) => {
      if(error.code === 'auth/wrong-password'){
        alert("Senha incorreto!")
      }
    })
    e.preventDefault()
  }

  sair(){
    firebase.auth().signOut()
  }

  render() {
    return (
      <div className="container">
        
          {this.state.user ? 
          <div>
            <p>Olá {this.state.user.email}</p>
            <p>Logado com sucesso!</p>
            <button type="submit" className="styleButton" onClick={this.sair}>Sair</button>
          </div>
          :
          <div className="containerForm">
          <img src={logo} className="logo"/>
          <form onSubmit={this.logar}>
            <label>Email: </label><br/>
            <input type="text" placeholder="Email@gmail.com" value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value})}/><br/>

            <label>Senha: </label><br/>
            <input type="password" placeholder="****" value={this.state.senha}
                    onChange={(e) => this.setState({senha: e.target.value})}/><br/>
            
            <div className="containerButton">
              <button type="submit" className="styleButton">Login</button>
              <p>Cadastre-se <Link to={"/cadastro"} className="createUser">Aqui!</Link></p>
            </div>
          </form>
        </div>
          }
      </div>
    );
  }
}

export default Home