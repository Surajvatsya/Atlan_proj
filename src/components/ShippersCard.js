import React from 'react'
import Grid from '@mui/material/Grid';
import categories from '../LocalData/shippers'
import C7 from '../components/C7'
function categoriesCard() {
  return (
    <div>
      <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {
        categories.map((obj) => {
          
              return <C7 cid={obj.shipperID}
                  cn = {obj.companyName}
                  cp={obj.phone}
                />
              
          

        })
      }
       </Grid>
    </div>
  )
}

export default categoriesCard




