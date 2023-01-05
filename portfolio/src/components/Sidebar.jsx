import React from "react";
import Avatar from '../images/foto-perfil.jpeg'
import '../styles/components/sidebar.sass'


import SocialNetworks from "./SocialNetworks";
import InformationContainer from './InformationContainer'

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt='João Victor Porfirio' />
            <p className="title">Desenvolvedor Frontend</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className="btn">
                Download currículo
            </a>
        </aside>
    )


}

export default Sidebar