import React from 'react'
import Grid from '@mui/material/Grid';
import categories from '../LocalData/order_details'
import C5 from '../components/C5'
function categoriesCard() {
  return (
    <div>
      <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {
        categories.map((obj) => {
          
              return <C5 cid={obj.orderID}
                  cn={obj.productID}
                  cds={obj.unitPrice}
                  cp={obj.quantity}
                  cd={obj.discount}
                />
        })
      }
       </Grid>
    </div>
  )
}

export default categoriesCard




