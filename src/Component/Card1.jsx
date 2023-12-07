import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {   //we can use selectUser also
    console.log(props.SelectUser)
    // console.log(props.SelectUser.name)
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image='https://th.bing.com/th/id/OIP.w2McZSq-EYWxh02iSvC3xwHaHa?w=202&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                    title="Profile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">

                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <p >Name:{props.SelectUser.name}</p><br />
                        <p >Phone:{props.SelectUser.phone}</p><br />
                        <p >Email:{props.SelectUser.email}</p><br />
                        <p >Address:{props.SelectUser.dddress}</p><br />
                    </Typography>

                </CardContent>
                <CardActions>
                    {/* <Button size="small">Save</Button> */}
                    <Button size="small" onClick={props.Close}> Close</Button>
                    {/* <Button variant="contained" size="small" onClick={props.Delete}> Delete</Button> */}
                </CardActions>
            </Card>
        </>
    );
}
export{MediaCard}
