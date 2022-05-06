import React from 'react'
import Grid from '@mui/material/Grid';
import categories from '../LocalData/categories'
import C1 from '../components/C1'
function categoriesCard() {
  return (
    <div>
      <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {
        categories.map((obj) => {
          
              return <C1 cid={obj.categoryID}
                  cn={obj.categoryName}
                  cds={obj.description}
                  cp={obj.picture}
                />
              
          

        })
      }
       </Grid>
    </div>
  )
}

export default categoriesCard




