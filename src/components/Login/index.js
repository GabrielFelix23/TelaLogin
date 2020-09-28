import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

import logo from './icon.png'

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email: '',
      senha: ''
    }
  }


  render() {
    return (
      <div className="container">
        <div className="containerForm">
          <img src={logo} className="logo"/>
          <form onSubmit={this.logar}>
            <label>Email: </label><br/>
            <input type="text" placeholder="Email@gmail.com" value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value})}/><br/>

            <label>Senha: </label><br/>
            <input type="text" placeholder="****" value={this.state.senha}
                    onChange={(e) => this.setState({senha: e.target.value})}/><br/>
            
            <div className="containerButton">
              <button type="submit" className="styleButton">Login</button>
              <p>Cadastre-se <Link to={"/cadastro"} className="createUser">Aqui!</Link></p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Home