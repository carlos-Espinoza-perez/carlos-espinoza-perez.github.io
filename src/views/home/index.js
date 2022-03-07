import React, { useEffect, useState } from 'react';

import { Container, Grid, Typography } from '@mui/material';


import PokeCard from './../../components/card/index';
import { getListDataPoke } from '../../utils/getData';

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

function Home__Index() {
    const [data, setData] = useState([]);

    const getPokemones = async () => {
        setData(await getListDataPoke());
    };

    useEffect(()=>{
        getPokemones()
    }, [])
    
    return (
        <React.Fragment>
            <Typography variant="h5" style={ style.title }>
                Lista de Pokémon
            </Typography>


            <Container maxWidth="lg">
                <Grid container spacing={2} rowSpacing={4} justifyContent="center">
                    {
                        data.map(a => (
                            <PokeCard pokemon={a} key={a.id}/>
                        ))
                    }
                </Grid>
            </Container>
        </React.Fragment>
    );
  }

export default Home__Index;