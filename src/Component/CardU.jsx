import  React,{useState,useEffect}  from 'react';
import '../color.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
//import BusinessIcon from '@mui/icons-material/Business';
//import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Link,useParams} from 'react-router-dom'


export default function CardU() {

    //assign variable to useparams
       const params = useParams()
       console.log(params.id)
   
       //to assign id
       let userId = params.id;
   
    //    //to get data, dependency[]
    //    const [retrive, setRetrive] = useState([]);
    //    const [retrival, setRetrival] = useState([]);
   
    //    useEffect(() => {
    //        const AllUser = (JSON.parse(localStorage.getItem("Form")));
    //        setRetrive(AllUser)
    //        //console.log(setRetrive)
    //        const newRetrive = retrive.filter((i) => i.id === userId)
    //        setRetrival(newRetrive)
    //    }, [])
    //    console.log(retrival);

       
    const [data,setData]=useState([])
    const [single,setSingle]=useState('')
    useEffect(()=>{
    const AllUser=(JSON.parse(localStorage.getItem("Form")));
      setData(AllUser)
      const value=data.filter((i)=>i.id==userId)
      //console.log(value);
      setSingle(value)
        },[])
     console.log(single)



    return (
        <div className='regbox' >
            <Box className='body'>
                
                <div><Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField placeholder="Enter your Name" id="input-with-sx" label="Name" variant="standard" type='text' name='name' />
                </Box></div>
                <div><Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField placeholder="Enter your Email" id="input-with-sx" label="Email" variant="standard" type='text' name='email' />
                </Box></div>
                <div><Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField  placeholder="Enter your Phone no" id="input-with-sx" label="Phone" variant="standard" type='number' name='phone' />
                </Box></div>
                <div><Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField placeholder="Enter your Address" id="input-with-sx" label="Address" variant="standard" type='text' name='address' />
                </Box></div>
                <br/>

                <div>
                    <Stack spacing={2} direction="row">
                        <Link to=''><Button variant="contained" endIcon={<SendIcon />}>SUBMIT</Button> </Link>
                    </Stack>
                </div>
            </Box>
            <div>
                    <Link to='/Table'> <Button type='button' /*variant="contained"*/ color="primary" > To Table  </Button > </Link>
                </div>
        </div>
    )
}
