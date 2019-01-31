import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import '../components/bootstrap.min.css' 
import '../components/style.css'

import logo from '../images/logo-red.png';

const Header = ({ siteTitle }) => (
  <div
    class="main-header"
  >  
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
          <img src={logo} class="logo-img" height="100%"/>  
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="" id="">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link
                to="/home"
                style={{
                  textDecoration: `none`,
                }}
                class="nav-link"
              >
              ORDER
              </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
