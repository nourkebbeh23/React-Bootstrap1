import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (












    
<div>

<nav
      class="navbar navbar-expand-lg bg-light border-bottom small blur-filter"
    >
      <div class="container-xxl">
        <a href="index.html" class="navbar-brand">
          <img className="img-fluid" src="	https://themewagon.github.io/seogo/img/logo.png" alt="" />
        </a>
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-content"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse ms-5 " id="navbar-content">
      <div className="ms-5">
<div className="ms-5">
<div className="ms-5">
<ul class="navbar-nav ms-5   ">
            <li class="nav-item m-3">
            <Link class="nav-link" to="/">Home</Link>            </li>
            <li class="nav-item  m-3">
            <Link  class="nav-link" to="/about">About</Link>
            </li>
            <li class="nav-item  m-3">
            <Link class="nav-link" to="/services">Services</Link>
            </li>
            <li class="nav-item  m-3">
            <Link class="nav-link" to="/contact">Contact</Link>
            </li>
            <li class="nav-item  m-3">
            <Link class="nav-link" to="/blog">Blog</Link>
            </li>
            <li class="nav-item  m-3">
            <Link  class="nav-link"  to="/Case Study">Case Study</Link>
            </li>
          </ul>
</div>
</div>
      </div>
         <div class="ms-auto me-1 d-grid d-md-blok gap-2 mb-2 mb-md-0">
          
            <a
              href="#"
              class=" btn-sm btnn rounded-pill p-2  algin-item-center d-inline-flex text-center justify-content-center"
            >
         

         +10 673 563 629
            </a>
          </div>

    
        </div>
      </div>
    </nav>



</div>
  );
};

export default Navbar;
