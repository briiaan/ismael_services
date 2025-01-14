import {useState, useRef, useEffect} from "react"
import "../styles/navbar.scss"
import logo from "../images/logo.png"

export default function Navbar({transparent}) {
    const [isTransparent, setTransparent] = useState(transparent)
    const [menu, setMenu] = useState(false);

    const nav_background = useRef(null);
    const nav_container_responsive = useRef(null);
    const service_options = useRef(null);
    const arrow = useRef(null);
    const x = useRef(null);
    const hamburger = useRef(null);
    const mobile_nav_menu = useRef(null)
    const services = useRef(null);
    const services_menu = useRef(null);

    useEffect(() => {
        nav_background.current.style.height = nav_container_responsive.current.style.height;
    })
    
    function our_services_menu() {
      services_menu.current.style.visibility = "visible";
      services_menu.current.style.opacity = "100%";
    }
    function our_services_menu_off() {
      services_menu.current.style.opacity = "0"; 
      services_menu.current.style.visibility = "hidden"
    }


    function expand() {
      if (service_options.current.className == "closed") {
        service_options.current.className = "expand"
        arrow.current.style.transform = "rotate(-180deg)"
      } else {
        service_options.current.className = "closed"
        arrow.current.style.transform = "rotate(0deg)"
      }
    }

    function menuOpen() {
      if(!menu) {
        hamburger.current.style.display = "none"
        x.current.style.display = "block";
        setMenu(true);
        mobile_nav_menu.current.style.display = "block"
        document.body.style.overflow = "hidden"
      } else {
        hamburger.current.style.display = "block"
        x.current.style.display = "none";
        setMenu(false);
        mobile_nav_menu.current.style.display = "none"
        document.body.style.overflow = "scroll"
      }
    }
 
    return (
        <div onMouseLeave={() => our_services_menu_off()}>
        <div id='navbar'>
        <div id='background' ref={nav_background} style={{background: isTransparent ? '#42413F' : 'transparent'}}></div>
      
        <div id='nav-container-responsive' ref={nav_container_responsive}>
        <div id='nav-container'>
        <div id='nav-container-grid'>
        <div id='logo' className="noselect" onMouseOver={() => our_services_menu_off()}><a href="/" id='logo-a'><div id="img-background-color"><img src={logo.src}/></div></a></div>
        <div id='hamburger-button' onClick={() => menuOpen()} className="noselect">
            <svg ref={hamburger} id="hamburger" width="79" height="80" viewBox="0 0 79 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M69.125 63.3332H9.87504C9.00204 63.3332 8.16479 62.982 7.54748 62.3569C6.93017 61.7317 6.58337 60.8839 6.58337 59.9998C6.58337 59.1158 6.93017 58.2679 7.54748 57.6428C8.16479 57.0177 9.00204 56.6665 9.87504 56.6665H69.125C69.998 56.6665 70.8353 57.0177 71.4526 57.6428C72.0699 58.2679 72.4167 59.1158 72.4167 59.9998C72.4167 60.8839 72.0699 61.7317 71.4526 62.3569C70.8353 62.982 69.998 63.3332 69.125 63.3332Z" fill="white"/>
<path d="M69.125 43.3332H9.87504C9.00204 43.3332 8.16479 42.982 7.54748 42.3569C6.93017 41.7317 6.58337 40.8839 6.58337 39.9998C6.58337 39.1158 6.93017 38.2679 7.54748 37.6428C8.16479 37.0177 9.00204 36.6665 9.87504 36.6665H69.125C69.998 36.6665 70.8353 37.0177 71.4526 37.6428C72.0699 38.2679 72.4167 39.1158 72.4167 39.9998C72.4167 40.8839 72.0699 41.7317 71.4526 42.3569C70.8353 42.982 69.998 43.3332 69.125 43.3332Z" fill="white"/>
<path d="M69.125 23.3332H9.87504C9.00204 23.3332 8.16479 22.982 7.54748 22.3569C6.93017 21.7317 6.58337 20.8839 6.58337 19.9998C6.58337 19.1158 6.93017 18.2679 7.54748 17.6428C8.16479 17.0177 9.00204 16.6665 9.87504 16.6665H69.125C69.998 16.6665 70.8353 17.0177 71.4526 17.6428C72.0699 18.2679 72.4167 19.1158 72.4167 19.9998C72.4167 20.8839 72.0699 21.7317 71.4526 22.3569C70.8353 22.982 69.998 23.3332 69.125 23.3332Z" fill="white"/>
</svg> 
<p id='x' ref={x}>X</p>
</div>
<div id='nav-items' className="font_roboto">
  <div id='nav-items-nav-flex'>
  <a href="/about-us" id='about-us-nav' onMouseOver={() => our_services_menu_off()}>About Us</a>
  <div id='services-nav' ref={services} onMouseOver={() => our_services_menu()}>Services</div>
  <p id='contact-nav' onMouseOver={() => our_services_menu_off()}>Contact</p>
  </div>
</div>
        </div>
        </div>
        </div>
        <div id='mobile-nav-menu' ref={mobile_nav_menu} className="noselect">
            <div>
                <div id='na-menu-grid'>
                  <div id="about">
                    <a href="/about-us">About Us</a>
                    </div>
                    <div className='divider-menu'></div>
                    <div id="services-grid" onClick={() => expand()}>
                    <p>Services</p>
                    <div id='downward-arrow'>
                    <svg ref={arrow} width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_575_875)">
    <path fillRule="evenodd" clipRule="evenodd" d="M8.5 0C8.82199 0 9.13079 0.0987612 9.35848 0.274557C9.58616 0.450353 9.71407 0.688783 9.71407 0.937395V11.7981L14.9248 7.77288C15.0377 7.68573 15.1717 7.61659 15.3192 7.56942C15.4667 7.52225 15.6248 7.49798 15.7844 7.49798C15.944 7.49798 16.1021 7.52225 16.2496 7.56942C16.3971 7.61659 16.5311 7.68573 16.644 7.77288C16.7568 7.86004 16.8464 7.9635 16.9075 8.07738C16.9686 8.19125 17 8.3133 17 8.43656C17 8.55981 16.9686 8.68186 16.9075 8.79574C16.8464 8.90961 16.7568 9.01308 16.644 9.10023L9.35956 14.7246C9.24678 14.8119 9.11281 14.8812 8.96531 14.9284C8.81781 14.9757 8.65969 15 8.5 15C8.34031 15 8.18219 14.9757 8.03469 14.9284C7.88719 14.8812 7.75322 14.8119 7.64044 14.7246L0.356041 9.10023C0.243162 9.01308 0.153622 8.90961 0.0925322 8.79574C0.0314425 8.68186 0 8.55981 0 8.43656C0 8.3133 0.0314425 8.19125 0.0925322 8.07738C0.153622 7.9635 0.243162 7.86004 0.356041 7.77288C0.584011 7.59686 0.893203 7.49798 1.2156 7.49798C1.37524 7.49798 1.53331 7.52225 1.68079 7.56942C1.82827 7.61659 1.96228 7.68573 2.07516 7.77288L7.28593 11.7981V0.937395C7.28593 0.688783 7.41384 0.450353 7.64153 0.274557C7.86921 0.0987612 8.17801 0 8.5 0Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_575_875">
      <rect width="17" height="15" fill="white"/>
    </clipPath>
  </defs>
</svg>
</div>
                    </div>
                    <div id='services-options' className="closed" ref={service_options}>
                      <div id='services-options-container'>
                      <a href="/landscaping-services">Landscaping Services</a>
                      <a href="/commercial-cleaning">Commercial Cleaning</a>
                      <a href="/concrete-services">Concrete Services</a>
                      </div>
                    </div>
                    <div className='divider-menu'></div>
                    <div id="contact">
                    <p>Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div id='services-container-nav' ref={services_menu}>
        <div id='services-nav-menu' className="noselect">
          <p id='services-title' onClick={() => location.href = "/services"}>Our Services</p>
          <div id='divider-responsive'>
          <div id='divider-flex'>
          <div id='divider-menu-services'></div>
        </div>
    </div>
    <div id='services-menu'>
      <p onClick={() => location.href = "/landscaping-services"}>Landscaping</p>
      <p onClick={() => location.href = "/commercial-cleaning"}>Commercial Cleaning</p>
      <p onClick={() => location.href = "/concrete-services"}>Concrete Services</p>
    </div>
  </div>
  </div>
        </div>
    )
}