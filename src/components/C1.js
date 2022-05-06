import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function MediaCard({cid,cn,cds,cp}) {
  return (
    
    <Grid item mt={8} mx={8}  sm={6} md={4} >
     <Card sx={{ minWidth: 345, maxwidth :345 }} className="grow dib f3"  >
      <CardMedia
        component="img"
        height="140"
        image={cp}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          🎉 categories 🎉
        </Typography>
        <Typography variant="body2" color="text.secondary">
        CategoryID :- {cid}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        CategoryName :- {cn}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Description :- {cds}
        </Typography>
      </CardContent>
      
    </Card>
    </Grid>
   
  );
}
