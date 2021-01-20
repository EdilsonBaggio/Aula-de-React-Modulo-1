import './App.css'

import React from 'react'

import Primero from './componentes/Primeiro'
import Comparametro from './componentes/Comparametro'
import Comfilhos from './componentes/Comfilhos'
import Card from './componentes/layout/Card'
import Repeticao from './componentes/Repeticao'
import Condicional from './componentes/Condicional'
import CondicionalComIf from './componentes/CondicionalComIf'

export default (props) => (

    <div className="app">
        <Card titulo="CondicionalComIf">
            <CondicionalComIf numero={10}></CondicionalComIf>
        </Card>
        <Card titulo="Condicional">
            <Condicional numero={15}></Condicional>
        </Card>
        <Card titulo="Repetiçao">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="Componente com filhos">
            <Comfilhos>
                <ul>
                    <li>Home</li>
                    <li>Blog</li> 
                    <li>Trabalhos</li>
                    <li>Contatos</li>
                </ul>
            </Comfilhos>
        </Card>
        <Card titulo="Componente com parametro">
            <Comparametro titulo="Este é o titulo" subtitulo="este é o subtitulo"/>
        </Card>
        <Card titulo="Primeiro componente">
          <Primero/>
        </Card>
        {/*<Comfilhos>
            <ul>
                <li>Home</li>
                <li>Blog</li>
                <li>Trabalhos</li>
                <li>Contatos</li>
            </ul>
        </Comfilhos>**/}
        {/*<Primero/>
        <Comparametro titulo="Este é o titulo" subtitulo="este é o subtitulo"/>*/}
    </div>

)

