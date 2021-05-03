import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import '../assets/css/NavBar.css';



class Navbar extends React.Component {
  toogleMenu() {
    let navigation = document.querySelector('.riva-navigation');
    let toggle = document.querySelector('.toggle');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
  }
  render() {
    return (
      <div>
        <div className="toggle" onClick={this.toogleMenu}></div>
        <div class="riva-navigation">
          <ul>
            <li>
              <a href="#">
                <span className="icon"><i class="fas fa-tachometer-alt" aria-hidden="true"></i></span>
                <span className="title">Dashboard</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon"><i className="fas fa-users" aria-hidden="true"></i></span>
                <span className="title">Úsuarios</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon"><i className="fas fa-chart-pie" aria-hidden="true"></i></span>
                <span className="title">Estatísticas</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon"><i className="fa fa-user" aria-hidden="true"></i></span>
                <span className="title">Perfil</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon"><i className="fa fa-cog" aria-hidden="true"></i></span>
                <span className="title">Configurações</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon"><i className="fas fa-sign-out-alt" aria-hidden="true"></i></span>
                <span className="title">Fechar</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Navbar;