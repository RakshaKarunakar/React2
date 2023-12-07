import  React,{ useState,useEffect }  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'


export default function Form() {

    let initialValue;
    if (localStorage.getItem("Form") === null) {
        initialValue = [];

    } else {
        initialValue = JSON.parse(localStorage.getItem("Form"));
    }

    const [value, setValue] = useState(initialValue);
    console.log(value);

    const [state, setState] = useState("");
    const [state1, setState1] = useState([]);
    const [data, setData] = useState([]);

    const Click = (e) => {
        setState(e.target.value)
        setState({ ...state, [e.target.name]: e.target.value });
    }
    console.log(state)

    //storing entered data in table from state1 //insert 
    const Handlesubmit = (event) => {
        //event.preventDefault();
        const newId = value.length === 0 ? 1 : value[value.length - 1].id + 1;

        let user = {
            id: newId,
            ...state
        }

        const value1 = [...value, user];
        setState1(value1)
        localStorage.setItem("Form", JSON.stringify(value1));

        //to delete using Id
        //await nav("/Tb")

        // const newvalue = ([...state1, state])
        // setState1(newvalue)
        // localStorage.setItem("Form", JSON.stringify(value));
    };

    // useEffect(() => {
    //     setData(JSON.parse(localStorage.getItem("Form")));
    // }, [state1])
    // console.log(data);

    // let number = [1, 2, 3, 4, 5, 6];
    // console.log(number[number.length - 1]);

    return (
        <div className='regbox'>
            <Box className='body'>
                <div><Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Name" variant="standard" onChange={(e) => Click(e)} type='text' name='name' />
                </Box></div>
                <div><Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Email" variant="standard" onChange={(e) => Click(e)} type='text' name='email' />
                </Box></div>
                <div><Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Phone" variant="standard" onChange={(e) => Click(e)} type='number' name='phone' />
                </Box></div>
                <div><Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Address" variant="standard" onChange={(e) => Click(e)} type='text' name='address' />
                </Box></div><br />
                <div>
                    <Stack spacing={2} direction="row">
                        <Link to='/Td'><Button onClick={Handlesubmit} variant="contained">SUBMIT</Button> </Link>
                    </Stack>
                </div>
            </Box>

            <div>
                <Link to='/Td'> <Button type='button' color="primary" > To Table  </Button > </Link>
            </div>
        </div>
    )
}