import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import NavLink from '../../modules/NavLink'
import Characters from '../../components/Pages/Characters'
import Weapons from '../../components/Pages/Weapons'
import Spells from '../../components/Pages/Spells'
import logo from '../../assets/logo.svg'

import './Header.css';

const routes = [
  { path: '/',
    exact: true,
    main: () => <Characters />
  },
  { path: '/weapons',
    main: () => <Weapons />
  },
  { path: '/spells',
    main: () => <Spells />
  }
]

const Header = () => (
  <Router>
    <div id="contentWrap">
      <div id="navWrap">
        <img id="logo" src={logo} alt="logo" />
        <ul id="nav">
          <li><NavLink exact to="/" activeClassName="active">Characters</NavLink></li>
          <li><NavLink exact to="/weapons" activeClassName="active">Weapons</NavLink></li>
          <li><NavLink exact to="/spells" activeClassName="active">Spells</NavLink></li>
        </ul>
      </div>

      <div id="content">
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
)

export default Header