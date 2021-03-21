import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',

    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {

      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      background: 'linear-gradient(45deg, #607d8b 30%, #fafafa 90%)',

      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      background: 'linear-gradient(45deg, #607d8b 30%, #fafafa 90%)',

      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: 50,
      [theme.breakpoints.up('sm')]: {
        width: 50,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },

  }));

export default function Sidebar({open,setOpen,opt,setopt}) {
    const classes = useStyles();
    const theme = useTheme();

    
    const handleDrawerClose = () => {
      setOpen(false);
    };
    const items=[
        {
            text:"Home",
            onClick:()=> setopt("home"),
            icon:<HomeIcon />
        },
        {
            text:"Trending",
            onClick:()=> setopt("upcoming") ,
            icon:<TrendingUpIcon/>
        },
        {
            text:"Favourites",
            onClick:()=> console.log("Pressed") ,
            icon:<SubscriptionsIcon />
        }
    ]
    const items1=[
        {
            text:"Library",
            onClick:()=> console.log("Pressed"),
            icon:<LibraryAddIcon/>
        },
        {
            text:"History",
            onClick:()=> console.log("Pressed") ,
            icon:<HistoryIcon/>
        },
        {
            text:"Watch Later",
            onClick:()=> console.log("Pressed") ,
            icon:<WatchLaterIcon/>
        }
    ]

    const drawer = (
        <div>       
            <List>
                {items.map((item,index)=>{                    
                    const{text,onClick,icon}=item;
                    return(
                    <ListItem button key={text} onClick={onClick} Classes={{ Button:classes.b1}} className={classes.b1}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={text}/>                
                         
                    </ListItem>
                )})}
            </List>
        </div>
      );
      const drawer1 = (
        <div>       
            <List>
                {items1.map((item,index)=>{                    
                    const{text,onClick,icon}=item;
                    return(
                    <ListItem button key={text} onClick={onClick} Classes={{ Button:classes.b1}} className={classes.b1}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={text}/>                
                         
                    </ListItem>
                )})}
            </List>
        </div>
      );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
      
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        {drawer}
        <Divider />
        {drawer1}

      </Drawer>
      </div>
  );
}
