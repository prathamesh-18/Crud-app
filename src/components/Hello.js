import React ,{useState,useEffect}from 'react';
import clsx from 'clsx';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Modal from 'react-modal'
import InputForm from './InputForm'
import Cards from './Cards'
import Button from '@material-ui/core/Button';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: '#212121',
  },
  back: {
    
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 60,
  },
  contentShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

export default function Hello({open,setOpen,opt,setopt}) {
  const classes = useStyles();
  const theme = useTheme();
  const [posts, setPosts] = useState([])
  const [openForm, setopenForm] = useState(false)

  useEffect(() => {
      axios.get("http://localhost:8000/"+opt)
      .then(res =>{
          // console.log(res)
          setPosts(res.data)
      })
      .catch(error => {
          console.log(error)
      })
  },[posts])
  const base='https://image.tmdb.org/t/p/w200'
  return (
    <div className={classes.root} style={{color: "red"}}>
      <CssBaseline />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        <Grid container spcaing={3}>
            {                
             posts.map(name => 
                    <Grid key={name.id} item
                        xs={12} sm={6} md={4} lg={4} xl={3}
                        >
                        <Cards  
                        data={name.title ||name.name} head={name.overview} src={base+name.poster_path}
                        r={name.vote_average} index={name.id} name={name}/>
                    </Grid>
                )
            }
        </Grid>
        <Button
            variant="contained"
            color="secondary"
            onClick={()=>setopenForm(true)}x  
            className={classes.button}
            >
              Add
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

              <InputForm/>

              

          </Modal>

      </main>
    </div>
  );
}
