import {useState} from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header'
import Hello from './components/Hello'
import Sidebar from './components/Sidebar'
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});
function App() {
  const classes = useStyles();

  const [open, setOpen] = useState(false)
  const[opt,setopt]=useState('home')
  return (
    <div className="App" >
      <Header open={open} setOpen={setOpen}/> 
      <Sidebar open={open} setOpen={setOpen} opt={opt} setopt={setopt}/>
      <Hello className={classes.root} open={open} setOpen={setOpen} opt={opt} setopt={setopt}/>
    </div>
  );
}

export default App;
