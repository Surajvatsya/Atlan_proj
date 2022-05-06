import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import logo from '../assets/img/SE.png'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ data, pic }) {
  const [expanded, setExpanded] = React.useState(false);

  const navigate = useNavigate();


const generate= (x,z)=>{
  return Math.floor((Math.random() * x) + 1 + z)
} 

Math.floor((Math.random() * 12) + 1)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "AliceBlue"}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           SE
          </Avatar>
        }
        title={`Retrive data by clicking on  ${data}  button`}
     
       
        subheader= {`${data} last updated on ${generate(30,0)}/${generate(12,0)}/${generate(5,2015)}`}
      />
       
      <CardMedia
        component="img"
        height="194"
        image={pic}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">

          <Button variant="contained"  endIcon={<SendIcon />} onClick={() => {
            navigate('/' + data);
          }}    >
            {data}

          </Button>

        </Typography>

      </CardContent>

      <CardActions disableSpacing>

        <IconButton aria-label="share">
          <a href="whatsapp://send?text = Please visit https://atlon-608d0.web.app/ to fetch your query " data-action="share/whatsapp/share"
            target="_blank" > <WhatsAppIcon /> </a>

        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
         
          <Typography paragraph>
             Records related to this card is all about {data}.
          </Typography>
          <Typography paragraph>
            You can share the link among your colleague by clicking on whatsapp icon.
          </Typography>
          <Typography paragraph>
            Click on {data} to see all records.
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
