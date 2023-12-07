import  React/*, useState,useEffect }*/  from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import Image from './Card image.jpg';

export default function Cardnew() {
    let Array = [
        {
            Image: "https://mui.com/static/images/avatar/3.jpg",
            Name: 'Sujani',
            Phone: '9955441225',
            Email: 'sujani@gmail.com',
            Address: 'Udupi',
        }
    ];

    // const [state, setState] = useState()
    // const [state1, setState1] = useState([])
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     setData(JSON.parse(localStorage.getItem("Form")));
    // }, [state1])

    // console.log(data)

    // function HandleDelete(index) {
    //     const newState1 = [...data];
    //     newState1.splice(index, 1);
    //     setData(newState1);
    // }
    

    return (
        <div style={{display:"flex", gap:"50px"}}>
           {/* {data?.map((item) => { */}
            {Array.map((item) => {
                return (
                    <>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={item.Image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">

                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <p >Name:{item.Name}</p><br />
                                    <p >Phone:{item.Phone}</p><br />
                                    <p >Email:{item.Email}</p><br />
                                    <p >Address:{item.Address}</p><br />
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Edit</Button>
                                <Button /* onClick={() => HandleDelete(index)}*/ size="small">Save Changes</Button>
                            </CardActions>
                        </Card>
                    </>
                );
            })}
        </div>
    );
}