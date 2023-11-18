import {useState, useRef, useEffect} from "react"
import "../styles/topnav.scss"

export default function Topnav() {
    return(
        <>
        <div id='topnav-responsive-container'>
            <div id='topnav-responsive-container-grid'>
                <div id='top-nav-responsive-grid'>
                    <div id='top-nav-elements'>
                    <div className='divider'></div>
                    <div id='phone'><a href="tel:000-000-0000">+1 (123) 456-7890</a></div>
                    <div className='divider'></div>
                    <div id='language'>EN</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}