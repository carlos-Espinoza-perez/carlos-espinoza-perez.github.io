import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { Container, Grid, Typography } from '@mui/material';


import PokeCard from './../../components/card/index';
import { getListDataPoke } from './../../utils/getData';


let style = {
    title: {
        fontSize: '28px',
        textAlign: 'center',
        marginTop: '12px',
        marginBottom: '12px',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        fontFamily: 'Dancing script'
    }
}


class Filter extends React.Component {
    constructor(args) {
        super(args);
    }

    componentDidMount() {
        debugger
    }

    render() {
        return (
            <h1>Hola</h1>
        )
    }
}

export default Filter;

// export default function Filter() {
//     const [data, setData] = useState([]);
    
//     const { nombre } = useParams();


//     const getPokemones = async () => {
//         let listPokemon = await getListDataPoke();


//         listPokemon = listPokemon.filter(a => a.name.toLocaleLowerCase().indexOf(nombre.toLocaleLowerCase()) !== -1);
        
//         debugger
//         setData(listPokemon);
//     };

//     useEffect(()=>{
//         getPokemones()
//     }, [])
    

//     return (
//         <React.Fragment>
//             <Typography variant="h5" style={ style.title }>
//                 Pokémon que coincide con: { nombre }
//             </Typography>


//             <Container maxWidth="lg">
//                 <Grid container spacing={2} rowSpacing={4} justifyContent="center">
//                     {
//                         data.map(a => (
//                             <PokeCard pokemon={a} key={a.id}/>
//                         ))
//                     }
//                 </Grid>
//             </Container>
//         </React.Fragment>
//     )
// }