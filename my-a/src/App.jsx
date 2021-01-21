import './App.css'

import React from 'react'

import Primero from './componentes/basicos/Primeiro'
import Comparametro from './componentes/basicos/Comparametro'
import Comfilhos from './componentes/basicos/Comfilhos'
import Card from './componentes/layout/Card'
import Repeticao from './componentes/Repeticao'
import Condicional from './componentes/basicos/Condicional'
import CondicionalComIf from './componentes/basicos/CondicionalComIf'

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
    </div>

)

