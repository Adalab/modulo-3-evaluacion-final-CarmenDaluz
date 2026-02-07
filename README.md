#  Harry Potter Characters Finder by Carmen Daluz

Aplicación web desarrollada con React que muestra un listado de personajes del universo de Harry Potter utilizando una API externa.

Permite buscar, filtrar, ordenar y ver el detalle de cada personaje mediante rutas.

Proyecto realizado como ejercicio final del Módulo 3 (React) de Carmen Daluz.

DEMO

## Tecnologías usadas:
    - React

    - React Router DOM

    - JavaScript 

    - HTML semántico

    - CSS + Grid + Responsive

    - Fetch API (API: https://hp-api.onrender.com/)

    - LocalStorage

## Funcionalidades:
    . Listado de personajes (foto, nombre, casa, especie. Si no hay datos, alternativa).
    . Buscador por nombre (Filtrado en tiempo real mientras escribes. Si no hay resultado mensaje informativo).
    . Filtro por casa mediante radios.
    . Filtro de ascendencia con selector desplegable.
    . Filtro por orden alfabético, con checkbox.
    . Botón reset (limpia los filtros volviendo al estado inicial).
    . Local Storage (los filtros se guardan).
    . Página de detalle de los personajes (cambio de URL) con imagen, nombre, casa, especie, estado, género y nombres alternativos. Si no hay datos, alternativa.
    . Botón "Go Back"


## Estructura del proyecto:
    src/
    ├─ components/
    │   ├─ HPSearcher.jsx   
    │   ├─ Preview.jsx      
    │   ├─ Card.jsx         
    │   ├─ DetailsCard.jsx  
    │
    ├─ services/
    │   ├─ api.js           
    │   └─ localStorage.js  
    │
    ├─ App.jsx              
    └─ estilos CSS

## Instalación

    Clonar el repositorio:
    npm install  
    npm run dev

##  Autora

Carmen Daluz.
