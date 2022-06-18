import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
     <div class="header-siteTitle">  
      <h1>
        <Link className="link-siteTitle"
          to="/"        
        >
          {siteTitle}
        </Link>
      </h1>
      </div>
    
    <nav>
        <ul class="nav-ul">
         <li class="nav-first-li">
            <Link to="/" className="link">Phons</Link>
          </li>
          <li class="nav-first-li">
            <Link to="/accessories/" className="link">Accessories</Link>
          </li>
    
       
          <li class="nav-second-li">
            <Link to="/articals/" className="link">Articles</Link>
          </li>
          <li class="nav-second-li">
            <Link to="/faqs/" className="link">FAQs</Link>
          </li>
          <li class="nav-second-li">
            <Link to="/warranties/" className="link">Warranties</Link>
          </li>
          </ul>

<div class="small-menu">
<Link to="/" className="link">Phons</Link>
  <Link to="/accessories/" className="link">Accessories</Link>
  <Link to="/articals/" className="link">Articles</Link>
  <Link to="/faqs/" className="link">FAQs</Link>
  <Link to="/warranties/" className="link">Warranties</Link>
</div>

 
</nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
