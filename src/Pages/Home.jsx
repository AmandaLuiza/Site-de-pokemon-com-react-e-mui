import { useState, useEffect } from 'react'
import { Grid, Card, Typography } from '@mui/material'

function Home () {
    const [pokemon, setPokemon] = useState()
    useEffect(() => {
      const loadData = async() => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1054")
        .then((res) => res.json())
        .then((data) => data.results)
        .catch((err) => console.log(err))
        setPokemon(res)
      } 
       loadData()
    },[])
    return (
        <>
          <Grid mt={1} container spacing={2}>
          {
          pokemon?.map(
            (monstrinho)=>(
              <Grid item md={2.4}>
                <Card elevation={4} key={monstrinho.name} sx={{padding: "10px"}}>
                  <img style={{width:"200px", height:"200px"}} src={`https://img.pokemondb.net/artwork/large/${monstrinho.name}.jpg`}></img>
                  <Typography variant='h5' sx={{display: 'flex', justifyContent:'center'}} >{monstrinho.name}</Typography>
                </Card>
              </Grid>
            )
            )}
          </Grid>
        </> 
      )
}

export default Home