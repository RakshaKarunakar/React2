import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Deletecard({SelectUser,Deletes,data,setData}) {
    console.log(SelectUser);
    
    const Delete = async (item)=>{
        Deletes()
        const newValue = data.filter((i)=>i.id!=item.id);
        console.log(newValue);
        //console.in(item,'item)
        setData(newValue);
        localStorage.setItem('data',JSON.stringify(newValue));
        
    }

  return (
    <div>
        <>
            <Card sx={{ maxWidth: 500 }}>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <h4>Are you surewant to delete {SelectUser.name}!!! </h4><br />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={Deletes}>Close</Button>
                    <Button size="small" onClick={()=> Delete(SelectUser)}> yes Delete</Button>
                </CardActions>
            </Card>
        </>
    </div>
  )
}
export{Deletecard}
