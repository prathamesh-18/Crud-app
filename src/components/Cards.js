import React, {useState}from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import Collapse from '@material-ui/core/Collapse';
import Modal from 'react-modal'
import ReactPlayer from 'react-player'
import YouTubeIcon from '@material-ui/icons/YouTube';
import Form from './Form'
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        // maxHeight:500,
        marginBottom:30,
        
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expand: {

        transform: 'rotate(0deg)',
        marginLeft: '40%' ,
        marginRight:0,
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: red[500],
      },
}));


export default function Cards({data,head,src,r,index,name}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setopen] = useState(false)
  const [openForm, setopenForm] = useState(false)

  const handleclick=(event)=>{
      event.preventDefault();  
      axios.delete(`http://localhost:8000/home/${index}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
    

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={src}
          title="Contemplative Reptile"
          />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {data}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Ratings : {r}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions disableSpacing={false}>        
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={()=>setopen(true)}
            className={classes.button}
            startIcon={<YouTubeIcon />
            }
            >
                Trailer
            </Button>
          <Modal 
                isOpen={open} 
                onRequestClose={()=>setopen(false)}
                style={{
                    overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(255, 255, 255, 0.75)'
                    },
                    content: {
                      maxWidth:'50%',
                      maxHeight:'60%',
                      position: 'absolute',
                      top: '20%',
                      left: '25%',
                      right: '25%',
                      bottom: '20%',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                    }
                  }}              
            >
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=sj9J2ecsSpo"
                    width='100%'
                    height='100%'    
                    
                ></ReactPlayer>
            </Modal>            
        </div>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={()=>setopenForm(true)}
            // onClick={()=>console.log(index)}
            className={classes.button}

            >
                Update
            </Button>
          <Modal 
            isOpen={openForm}
            onRequestClose={()=>setopenForm(false)}
            style={{
              overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.75)'
              },
              content: {
                maxWidth:'50%',
                maxHeight:'60%',
                position: 'absolute',
                top: '20%',
                left: '25%',
                right: '25%',
                bottom: '20%',
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
              }
            }} 
            >

              <Form index={index} name={name}/>
          </Modal>
        </div>

        <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleclick}>
            <DeleteIcon />
        </IconButton>

      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{head}:</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
