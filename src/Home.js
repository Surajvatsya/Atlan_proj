import React from 'react'
import Cards from './components/Cards'
import './Home.css'
import cst from './assets/img/cst.jpg'
import ct from './assets/img/ct.jpg'
import et from './assets/img/et.jpg'
import od from './assets/img/od.jpg'
import rg from './assets/img/rg.jpg'
import sp from './assets/img/sp.jpg'
import tt from './assets/img/tt.jpg'
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
function Home() {
  return (
    <div>
      <h1> ✨⭐ SQL EDITOR ⭐✨</h1>
      <div className='cards'>
        <Grid container    rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item  sm={6} md={4} >
            <Cards data="Categories" pic={ct} />
          </Grid>
          <Grid item  sm={6} md={4}>
            <Cards data="customers"  pic={cst}/>
          </Grid>
          <Grid item  sm={6} md={4}>
            <Cards data="employee_territories" pic={et}/>
          </Grid>
          
          <Grid item  sm={6} md={4} >
            <Cards data="order_details" pic={od}/>
          </Grid>
          
          
          <Grid item  sm={6} md={4} >
            <Cards data="territories" pic={tt}/>
          </Grid>
         
          <Grid item  sm={6} md={4}>
            <Cards data="shippers" pic={sp} />
          </Grid>
          <Grid item  sm={6} md={4}>
            <Cards data="regions"  pic={rg}/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Home