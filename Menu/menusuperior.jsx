import React, { useEffect, useState } from "react";
import logo from '../img/logotora75x72.png';
import style from '../Menu/style.css';

function Menusuperior() {

    const btnMobile = document.getElementById('btn-mobile');
    const [click, setClick] = useState("")

    useEffect(() => {
        const nav = document.getElementById('nav')
        nav.classList.toggle('active')


    }, [])




    function toggleMenu(value) {
        setClick(btnMobile)

        
    }




    return (
        <div id="header">
            <img href="" id='logo' src={logo} type="submit"></img>
            <nav id="nav">
                <button id="btn-mobile" onClick={toggleMenu}><span id="hamburguer"></span></button>
                <ul id="menu" >
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Cadastro</a></li>
                    <li><a href="">Consulta QRcode</a></li>
                    <li><a href="">CPF's Inválidos</a></li>
                    <li><a href="">Sair</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Menusuperior;