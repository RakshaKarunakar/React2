import React, { useState,useEffect } from 'react'
import Button from '@mui/material/Button';
//import Box from '@mui/material/Box';

export default function TableForm() {
    const [state, setState] = useState();
    const [state1, setState1] = useState([]);
    const [data, setData] = useState([]);
    //const [editingItem, setEditingItem] = useState(null);

    const Detailsnew = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
        console.log(state)
    }

    //storing entered data in table from state1 
    const handlesubmit = () => {
        const value = ([...state1, state])
        setState1(value)
        localStorage.setItem("Data", JSON.stringify(value));
    };

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("Data")));
    }, [state1])

    console.log(data)
    console.log(state1)


    function handleDelete(index) {
        // const newState1 = [...state1];
        // newState1.splice(index, 1);
        // setState1(newState1);    
        const newState1 = [...data];
        newState1.splice(index, 1);
        setData(newState1);
    }
    // const handleUpdate = () => {
    //     if (editingItem) {
    //         const updatedData = [...data];
    //         updatedData[data.indexOf(editingItem)] = state;
    //         setData(updatedData);
    //         localStorage.setItem('Data', JSON.stringify(updatedData));
    //         setEditingItem(null); 
    //     }
    // };


    return (
        <>
            <div>
                <div >
                    <center>
                        <div className="regbox">
                            <div>
                                <input placeholder='Enter your Name' onChange={(e) => Detailsnew(e)} type='text' name='name' style={{ margin: '5px' }} /> <br />
                                <input placeholder='Enter your Phone no' onChange={(e) => Detailsnew(e)} type='text' name='phone' style={{ margin: '5px' }} /> <br />
                                <input placeholder='Enter your Email' onChange={(e) => Detailsnew(e)} type='text' name='email' style={{ margin: '5px' }} /> <br />
                                <input placeholder='Enter your Address' onChange={(e) => Detailsnew(e)} type='text' name='address' style={{ margin: '5px' }} /> <br />
                                <button className="btn btn-success m-2" style={{ margin: '2px' }} onClick={handlesubmit}> SUBMIT</button>
                            </div>
                        </div>
                    </center>
                </div>
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
                                                <button className="btn btn-success m-2" type='button' data-bs-toggle="modal" data-bs-target={`#View${index}`}> View</button>
                                                <button className="btn btn-primary m-2" type='button' data-bs-toggle="modal" data-bs-target={`#Edit${index}`}> Edit</button>
                                                <button className="btn btn-danger m-2" type='button' onClick={() => handleDelete(index)}  /*data-bs-toggle="modal" data-bs-target={`#Delete${index}`} */ > Delete</button>
                                            </td>
                                        </tr>
                                        <div class="modal fade" id={`View${index}`} data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="ViewlLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="ViewlLabel">PROFILE</h1>
                                                        <Button type="Button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
                                                    </div>
                                                    <div class="modal-body" style= {{backgroundImage: 'linear-gradient( 79deg, #7439db, #c66fbc 48%, #F7944D)',display:'inline-grid'}}>
                                                        <h4 >Name:{item.name}</h4>
                                                        <h4 >Phone:{item.phone}</h4>
                                                        <h4 >Email:{item.email}</h4>
                                                        <h4 >Address:{item.dddress}</h4>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <Button type="button" class="btn btn-secondary m-2" data-bs-dismiss="modal"> Close</Button>
                                                        <Button type="button" class="btn btn-primary m-2" data-bs-dismiss="modal"> Ok</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="modal fade" id={`Edit${index}`} data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="EditLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="EditLabel"> Profile Edit</h5>
                                                        <Button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
                                                    </div>
                                                    <div class="modal-body">
                                                    <div class="mb-3">
                                                            <label for="name" class="col-form-label">NAME</label>
                                                            <input type="text" class="form-control" id="name" value={item.name} />
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="phone" class="col-form-label">PHONE</label>
                                                            <input type="text" class="form-control" id="phone" value={item.phone} />
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="email" class="col-form-label">EMAIL</label>
                                                            <input type="text" class="form-control" id="email" value={item.email} />
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="address" class="col-form-label">ADDRESS</label>
                                                            <input type="text" class="form-control" id="address" value={item.address} />
                                                        </div>
                                                        {/*<input placeholder="Enter your Name" onChange={(e) => Detailsnew(e)} type="text" name="name" style={{ margin: '5px' }} value={item.name} />
                                                        <br />
                                                        <input placeholder="Enter your Phone no" onChange={(e) => Detailsnew(e)} type="text" name="phone" style={{ margin: '5px' }} value={item.phone} />
                                                        <br />
                                                        <input placeholder="Enter your Email" onChange={(e) => Detailsnew(e)} type="text" name="email" style={{ margin: '5px' }} value={item.email} />
                                                        <br />
                                                        <input placeholder="Enter your Address" onChange={(e) => Detailsnew(e)} type="text" name="address" style={{ margin: '5px' }} value={item.address} />
                                                        <br />
                                                        <button className="btn btn-success m-2" style={{ margin: '2px' }} onClick={handleUpdate} > {' '} Update </button> */}
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        

                                    </>
                                )
                            })}
                        </tbody>
                    </table><br /><br /><hr />
                </div>
            </div>
        </>
    )
}
