import React,{useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UseState() {
    const [state, setState] = useState();
    const [state1, setState1] = useState([]);
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [editingItem, setEditingItem] = useState(null);

    const Detailsnew = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
        console.log(state)
    }

    //storing entered data in table from state1 
    const handsubmit = () => {
        const value = ([...state1, state])
        setState1(value)
        localStorage.setItem("Data1", JSON.stringify(value));
    };

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("Data1")));
    }, [state1]);

    console.log(data)
    console.log(state1)


    function handleDelete(index) {
        const newState1 = [...data];
        newState1.splice(index, 1);
        setData(newState1);
    }

    const handleView = (index) => {
        setSelectedItem(data[index]);
    };
    
    const handleEdit = (index) => {
        setEditingItem(data[index]); 
    };

    const handleUpdate = () => {
        if (editingItem) {
            const updatedData = [...data];
            updatedData[data.indexOf(editingItem)] = state;
            setData(updatedData);
            localStorage.setItem('Data', JSON.stringify(updatedData));
            setEditingItem(null); 
        }
    };

    const handleCloseView = () => {
        setSelectedItem(null);
    };


    return (
        <>
            <div>

                <div className="state1"><center>
                    <input placeholder='Enter your Name' onChange={(e) => Detailsnew(e)} type='text' name='name' style={{ margin: '5px' }} /> <br />
                    <input placeholder='Enter your Phone no' onChange={(e) => Detailsnew(e)} type='text' name='phone' style={{ margin: '5px' }} /> <br />
                    <input placeholder='Enter your Email' onChange={(e) => Detailsnew(e)} type='text' name='email' style={{ margin: '5px' }} /> <br />
                    <input placeholder='Enter your Address' onChange={(e) => Detailsnew(e)} type='text' name='address' style={{ margin: '5px' }} /> <br />
                    <button className="btn btn-success m-2" style={{ margin: '2px' }} onClick={handsubmit}> SUBMIT</button>
                </center></div>
                <div>
                    <table className="table">
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
                                            <button className="btn btn-success m-2" type='button' onClick={() => handleView(index)} > View</button>
                                            <button className="btn btn-primary m-2" type='button' onClick={() => handleEdit(index)} > Edit</button>
                                            <button className="btn btn-danger m-2" type='button' onClick={() => handleDelete(index)} > Delete</button>
                                        </td>
                                    </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table><br /><br /><hr />
                </div>
            </div>

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">

                    </Typography>
                    <Typography variant="body2" color="text.secondary">

                        {selectedItem && (
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Details</h5>
                                    <p className="card-text">
                                        <strong>Name:</strong> {selectedItem.name}
                                        <br />
                                        <strong>Phone:</strong> {selectedItem.phone}
                                        <br />
                                        <strong>Email:</strong> {selectedItem.email}
                                        <br />
                                        <strong>Address:</strong> {selectedItem.address}
                                    </p>
                                    <button className="btn btn-primary" onClick={handleCloseView} > Close </button>
                                </div>
                            </div>
                        )}
                         </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"></Button>
                </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">

                    </Typography>
                    <Typography variant="body2" color="text.secondary">

                        {editingItem && (
                            <div className="form" style= {{backgroundImage: 'linear-gradient( 79deg, #7439db, #c66fbc 48%, #F7944D)',display:'inline-grid'}}>
                                <h5>Edit Details</h5>
                                <input placeholder="Enter your Name" onChange={(e) => Detailsnew(e)} type="text" name="name" style={{ margin: '5px' }} value={state.name || ''} />
                                <br />
                                <input placeholder="Enter your Phone no" onChange={(e) => Detailsnew(e)} type="text" name="phone" style={{ margin: '5px' }} value={state.phone || ''} />
                                <br />
                                <input placeholder="Enter your Email" onChange={(e) => Detailsnew(e)} type="text" name="email" style={{ margin: '5px' }} value={state.email || ''} />
                                <br />
                                <input placeholder="Enter your Address" onChange={(e) => Detailsnew(e)} type="text" name="address" style={{ margin: '5px' }} value={state.address || ''} />
                                <br />
                                <button className="btn btn-success m-2" style={{ margin: '2px' }} onClick={handleUpdate} > {' '} Update </button>
                            </div>
                        )}
                    </Typography>
                </CardContent>
            </Card><br /><hr />
        </>
    );
}
