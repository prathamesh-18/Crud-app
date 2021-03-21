import React ,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '75%',
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function InputForm({index}) {
  const classes = useStyles();

  const [data,setData]=useState({ 
    'title': '', 
    'overview':'',
    'poster_path':'',
    'vote_average':'',
  })

  const handleclick=()=>{
    axios.post("http://localhost:8000/home/",data)
    .then(res => {
        console.log(res);
        console.log(res.data);
      })
}

  return (
    //   <button onClick={handleclick}>update</button>

    <form className={classes.root} noValidate autoComplete="off" onSubmit={(handleclick)}>
    <div>
      <TextField  label="Title" value={data.title} onChange={e=>setData({...data,'title':e.target.value})} /><br/>
      <TextField  label="Overview" value={data.overview} onChange={e=>setData({...data,'overview':e.target.value})} /><br/>
      <TextField  label="Image Path" value={data.poster_path} onChange={e=>setData({...data,'poster_path':e.target.value})} /><br/>
      <TextField  label="Rating" value={data.vote_average} onChange={e=>setData({...data,'vote_average':e.target.value})} /><br/>
      <Button type="submit" variant="contained" color="primary">Add</Button>
    </div>
    </form>
  );
}
