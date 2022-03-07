import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Grid, Tooltip } from '@mui/material';

import { Link } from "react-router-dom";

export default function Poke_Card(props) {
  return (
    <Grid item>
        <Link to={`/Poke/Details/${props.pokemon.id}`}>
            <Tooltip title={props.pokemon.name}>
                <Card sx={{ width: 200 }} style={{ borderRadius: '6px' }}>
                    <CardActionArea style={{ padding: '8px' }}>
                        <CardMedia
                            component="img"
                            height="170"
                            image={props.pokemon.image}
                            alt={props.pokemon.name}

                            style={{ margin: 'auto', width: 'initial' }}
                        />
                    </CardActionArea>
                </Card>
            </Tooltip>
        </Link>
    </Grid>
  );
}