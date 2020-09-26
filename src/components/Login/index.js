import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

class Home extends React.Component{
  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <div className="containerForm">
          <form onSubmit={this.logar}>
            <label>Email: </label><br/>
            <input type="text" placeholder="Email@gmail.com"/><br/>

            <label>Senha: </label><br/>
            <input type="text" placeholder="****"/><br/>

            <button type="submit">Login</button>
            <p>Cadastre-se <Link to={"/cadastro"}>Aqui</Link></p>
          </form>
        </div>
      </div>
    );
  }
}

export default Home