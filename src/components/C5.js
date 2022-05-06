import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function MediaCard({cid,cn,cds,cp,cd}) {
  return (
    
    <Grid item mt={8} mx={13} sm={6} md={4} >
     <Card sx={{ maxWidth: 345 }} className="grow dib f3" >
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          🎶 Order Details 🎶
        </Typography>
        <Typography variant="body2" color="text.secondary">
        OrderID :- {cid}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        ProductID :- {cn}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        UnitPrice :- {cds}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Quantity :-   {cp}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
        Discount :-   {cd}
        </Typography>
        
        
      </CardContent>
    </Card>
    </Grid>
   
  );
}
