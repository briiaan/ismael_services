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
                    <div id='phone'><a href="tel:720-510-8161">+1 (720) 510-8161</a></div>
                    <div className='divider'></div>
                    <div id='language'>EN</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}