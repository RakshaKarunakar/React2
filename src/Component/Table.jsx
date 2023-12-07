import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@mui/material';
import Box from '@mui/material/Box';
import Card1 from './Card1'
import CardU from './CardU'
import Deletecard from './Deletecard'
//import Typography from '@mui/material/Typography';

import Modal from '@mui/material/Modal';

export default function Table() {
    const [state, setState] = useState()
    const [state1, setState1] = useState([])
    const [data, setData] = useState([])

    /*const Detailsnew = (e) => {
        setState(e.target.value)
        setState({ ...state, [e.target.name]: e.target.value });
        console.log(state)
    }
   
    //storing entered data in table from state1 
    const Handlesubmit = () => {
        const value = ([...state1, state])
        setState1(value)
        // localStorage.setItem("Data", JSON.stringify(value));
    };
     console.log(state1)*/

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("Form")));
    }, [state1])

    console.log(data)


    //table moadal
    const [SelectUser, setSelectUser] = useState('')
    console.log(SelectUser);

    const [open, setOpen] = React.useState(false);
    const handleOpen = (item) => {
        setOpen(true);
        console.log(item)
        //console.log(handleOpen)
        setSelectUser(item)
    }
    const handleClose = () => setOpen(false);

    //card1---Delete
  const [selectdelete, setselectDelete] = React.useState(false);
  const handleDelete = (item) => {
    setselectDelete(true);
    console.log(item)
    setSelectUser(item)
  }
  const handleDeletes = () => setselectDelete(false);

//   //cardU ---Update 
//   const [selectupdate, setselectUpdate] = React.useState(false);
//   const handleUpdate = (item) => {
//     setselectUpdate(true);
//     console.log(item)
//     setSelectUser(item)
//   }
//   const handleUpdates = () => setselectUpdate(false);

      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      

    return (
        <>
            <div>
                
                <div>
                    <table className="table align-middle mb-0 bg-blue">
                        <thead>
                            <tr className="table-success">
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((item, index) => {
                                return (
                                    <>
                                        <tr className="table-info">
                                            <th>{item.name}</th>
                                            <td>{item.phone}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <Button variant="contained" class="btn btn-primary m-2" onClick={()=> handleOpen(item)}>VIEW</Button>
                                                <Link to={`/CardU/${item.id}`}><Button variant="contained" class="btn btn-success m-2" >UPDATE</Button></Link>
                                                <Button type='button' variant="contained" class="btn btn-danger m-2" onClick={() => handleDelete(item)} > Delete  </Button >
                                            </td>
                                        </tr>

                                    </>
                                )
                            })}
                        </tbody>
                    </table><br /><br /><hr />
                    <div>
                    <Link to='/'> <Button type='button' variant="contained" color="primary" > Exit  </Button > </Link>
                    </div>
                </div>
            </div>

            
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Card1  SelectUser={SelectUser} Close={handleClose} />
        </Box>
      </Modal>
    </div>

    <div>
    <Modal
        open={selectdelete}
        onClose={handleDeletes}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Deletecard  data={data} setData={setData} SelectUser={SelectUser} Deletes={handleDeletes} />
        </Box>
      </Modal>
    </div>
        </>
    )
}
                                        