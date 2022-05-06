import React from 'react'
import Grid from '@mui/material/Grid';
import categories from '../LocalData/customers'
import C2 from '../components/C2'
function CustomersCard() {
  return (
    <div>
      <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
          categories.map((obj) => {

            return <C2 cid={obj.customerID}
              cn={obj.companyName}
              cds={obj.contactName}
              cp={obj.contactTitle}
              ca={obj.address}
              cc={obj.city}
              cr={obj.fax}
              cpt={obj.postalCode}
              cpc={obj.country}
            />
          })
        }
      </Grid>
    </div>
  )
}

export default CustomersCard




