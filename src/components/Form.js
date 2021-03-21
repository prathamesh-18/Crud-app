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

export default function Form({index,name}) {
  const classes = useStyles();

  const [data,setData]=useState({ 
    'title': name.title, 
    'overview':name.overview,
    'poster_path':name.poster_path,
    'vote_average':name.vote_average,
  })

  const handleclick=(e)=>{
    // console.log(name.index)
    axios.put("http://localhost:8000/home/"+index,data)
    .then(res => {
        console.log(res);
        console.log(res.data);
      })
}

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={(handleclick)}>
    <div>
      <TextField  label="Title" value={data.title} onChange={e=>setData({...data,'title':e.target.value})} /><br/>
      <TextField  label="Overview" value={data.overview} onChange={e=>setData({...data,'overview':e.target.value})} /><br/>
      <TextField  label="Image Path" value={data.poster_path} onChange={e=>setData({...data,'poster_path':e.target.value})} /><br/>
      <TextField  label="Rating" value={data.vote_average} onChange={e=>setData({...data,'vote_average':e.target.value})} /><br/>
      <Button type="submit" variant="contained" color="primary">Update</Button>
    </div>
    </form>
  );
}
