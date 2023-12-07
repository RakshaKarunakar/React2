import React, { useState,useEffect } from 'react'
//import Button from '@mui/material/Button';
  
export default function Formone() {
  const [state, setState] = useState();
  const [state1, setState1] = useState([]);
  const [data, setData] = useState([]);

  const Detailsnew = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state)
  }

  //storing entered data in table from state1 
  const handlesubmit = () => {
    const value = ([...state1, state])
    setState1(value)
    localStorage.setItem("State", JSON.stringify(value));
  };

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("State")));
  }, [state1]);

  console.log(data)
  console.log(state1)

  function handleDelete(index) {
    const newState1 = [...data];
    newState1.splice(index, 1);
    setData(newState1);
  }

  return (
    <>
      <div>

        <div className="state1"><center>
          <input placeholder='Enter your Name' onChange={(e) => Detailsnew(e)} type='text' name='name' style={{ margin: '5px' }} /> <br />
          <input placeholder='Enter your Phone no' onChange={(e) => Detailsnew(e)} type='text' name='phone' style={{ margin: '5px' }} /> <br />
          <input placeholder='Enter your Email' onChange={(e) => Detailsnew(e)} type='text' name='email' style={{ margin: '5px' }} /> <br />
          <input placeholder='Enter your Address' onChange={(e) => Detailsnew(e)} type='text' name='address' style={{ margin: '5px' }} /> <br />
          <button className="btn btn-success m-2" style={{ margin: '2px' }} onClick={handlesubmit}> SUBMIT</button>
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
                      <button className="btn btn-danger m-2" type='button' onClick={() => handleDelete(index)} > Delete</button>
                    </td>
                  </tr>
                  </>
                )
              })}
            </tbody>
          </table><hr />
        </div>
      </div>
    </>
  );
}