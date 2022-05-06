import React from 'react'
import Grid from '@mui/material/Grid';
import categories from '../LocalData/employee_territories'
import C3 from '../components/C3'
function categoriesCard() {
  return (
    <div>
      <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {
        categories.map((obj) => {
          
              return <C3 
                  cid={obj.employeeID}
                  tid={obj.territoryID}
                  
                />
              
          

        })
      }
       </Grid>
    </div>
  )
}

export default categoriesCard




