import React from 'react'
import Grid from '@mui/material/Grid';
import categories from '../LocalData/territories'
import C6 from '../components/C6'
function categoriesCard() {
  return (
    <div>
      <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {
        categories.map((obj) => {
          
              return <C6 cid={obj.territoryID}
                 
                  cds={obj.territoryDescription}
                 crd={obj.regionID}
                />
              
          

        })
      }
       </Grid>
    </div>
  )
}

export default categoriesCard




