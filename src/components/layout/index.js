import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getListDataPoke } from '../../utils/getData';
import HomeIndex from '../../views/home';
import HomeDetails from '../../views/home/detail';

import Header from './../header/index';


class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listPokemon: [],
            listPokemonRespaldo: []
        };
    }

    async componentDidMount() {
        const listPokemon = await getListDataPoke();
        this.setState({
            listPokemon: listPokemon,
            listPokemonRespaldo: listPokemon
        })
    }

    filter(input, _this) {
        const nombre = input.target.value;

        const listNewPokemon = _this.state.listPokemonRespaldo.filter(a => a.name.toLocaleLowerCase().indexOf(nombre.toLocaleLowerCase()) !== -1);
        
        if (listNewPokemon.length === 0) {
            this.setState({
                listPokemon: listNewPokemon
            });

            return
        }


        _this.setState({
            listPokemon: listNewPokemon
        });

    }

    render() {
        return (
            <BrowserRouter>
                <Header filter={(input) => this.filter(input, this)}/>
                <Routes>
                    <Route path='/' element={ <HomeIndex listPokemon={this.state.listPokemon} /> }/>
                    <Route path='/Poke/Details/:id' element={ <HomeDetails /> }/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Layout;