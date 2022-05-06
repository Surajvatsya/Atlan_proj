import React from 'react'
import Grid from '@mui/material/Grid';
import categories from '../LocalData/regions'
import C8 from '../components/C8'
function categoriesCard() {
  return (
    <div>
      <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
          categories.map((obj) => {

            return <C8 cid={obj.regionID}
              cn={obj.regionDescription}

            />



          })
        }
      </Grid>
    </div>
  )
}

export default categoriesCard




