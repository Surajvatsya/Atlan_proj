import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function MediaCard({cid,tid}) {
  return (
    
    <Grid item mt={8} mx={8} sm={6} md={4} >
     <Card sx={{ maxWidth: 345 }} className="grow dib f3" >
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ✨ Employee Territories ✨
        </Typography>
        <Typography variant="body2" color="text.secondary">
        EmployeeID :-  {cid}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        TerritoryID :- {tid}
        </Typography>
        
      </CardContent>
    </Card>
    </Grid>
   
  );
}
