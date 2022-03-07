import React, { useEffect, useState } from 'react';

import { Container, Grid, Typography } from '@mui/material';


import { getDetailDataPoke } from './../../utils/getData';
import BasicTable from '../../components/pokeDetail/tableHabilidades';

import {useParams} from 'react-router-dom'

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

function Home__Details(props) {
    const [data, setData] = useState([]);
    const { id } = useParams();


    const getDetailPokemon = async (pokemonId) => {
        setData(await getDetailDataPoke(pokemonId));
    };

    useEffect(() => {
        getDetailPokemon(id)
    }, []);


    
    return (
        <React.Fragment>
            <Typography variant="h5" style={ style.title }> <strong>Pokemon: </strong> {data.name} </Typography>
        
            <BasicTable abilities={data.abilities || []} />
        </React.Fragment>
    )
}

export default Home__Details;