import React, {Component} from 'react';
import styled, { css } from 'styled-components';
import MenuHeader from '../Components/MenuHeader/index';
import Footer from '../Components/Footer/index';


export default function Home () {
    return (
        <div style={containerHome}>
                <MenuHeader />
            
            <div style={containerBody}>

            </div>

            <Footer />

        </div>
    )
}

const containerHome = {
    display:'flex',
    width:'100vw',
    height:'100vh',
    backgroundColor:'#FFF'
}



const containerBody = {
    height:"100%"
}