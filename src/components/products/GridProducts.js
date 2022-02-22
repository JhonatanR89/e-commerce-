import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import games from '../data/Data'
import Product from '../Product'

const game = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function GridProducts() {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>  
          {
            games.map(game=>(
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Product key={game.id} game={game}/>
              </Grid>
            ))
          }  
      </Grid>             
    </Box>
    )
  }
  
export default GridProducts