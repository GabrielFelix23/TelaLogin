import React from 'react'
import {Link} from 'react-router-dom'

class Error extends React.Component{
  render() {
    return (
      <div>
          <h1>Essa rota não existe, por favor volte a tela inicial.</h1>
          <Link to={"/"}>Login</Link>
      </div>
    );
  }
}

export default Error