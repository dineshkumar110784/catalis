import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import PrintIcon from '@mui/icons-material/Print';
import FilterListIcon from '@mui/icons-material/FilterList';

function Animallicense() {
  const [productData, setProductData]= useState([]);
  const [filterData, setFilterData]= useState([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(()=>{
    const getProduct= async()=>{
     try{
      const reqData= await fetch("https://jsonplaceholder.typicode.com/users");
      const resData = await reqData.json();
      console.log(resData);
      setProductData(resData);
      setFilterData(resData)
     } catch(error)
     {
      console.log("Error Fetching data ",error);
     }
    }
    getProduct();
  }, [])

  const handleDelete=(val)=>{
    //alert(val)
    const filterdata= productData.filter( (item)=>item.id!==val);
    setProductData(filterdata)
  }

  const handleSearch=(e)=>{
    const searchdata= filterData.filter( (item)=>item.name.toLowerCase().includes(e.target.value) || item.email.toLowerCase().includes(e.target.value));
    setProductData(searchdata)
  }

  
  return (
    
    <Paper sx={{ width: '100%'}}>
      <h2 className='mx-3 mt-3'>Aminal Master</h2>

    <TableContainer sx={{ maxHeight: 800 }}>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <input type='text' className='form-control' placeholder='Enter Keywords...'  style={{width:"300px"}} onChange={ handleSearch}/>
      <h3><FilterListIcon style={{fontSize:"35px"}} className='mx-1'/></h3>
     <h3><PrintIcon style={{fontSize:"35px"}} className='mx-1'/></h3>
    <Link to="/addUser"className="btn btn-primary me-md-2" type="button">+ ADD</Link>
 
</div>
        <Table stickyHeader aria-label="sticky table">
        <TableHead>
            <TableRow >
            <TableCell className='fw-bolder'> Sr. No</TableCell>
            <TableCell className='fw-bolder'> Name</TableCell>
            <TableCell className='fw-bolder'> Username</TableCell>
            <TableCell className='fw-bolder'> Email</TableCell>           
            <TableCell className='fw-bolder'> Country</TableCell>
            <TableCell className='fw-bolder'> Actions</TableCell>
           
            </TableRow>
            </TableHead>
            <TableBody>
           
              { productData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map( (pdata, index)=>(
             <TableRow key={index}>
              <TableCell >
                {index+1}
            </TableCell>
            <TableCell >
                {pdata.name}
            </TableCell>
            <TableCell>
                {pdata.username}
            </TableCell>
            <TableCell>
                {pdata.email}
            </TableCell>
            <TableCell>
                {pdata.email}
            </TableCell>
            <TableCell>
            <Link to={`/editUser/${ pdata.id}`} className="btn btn-success mx-2"><CreateIcon/></Link>
              <Link className='btn btn-danger mx-1' onClick={()=>handleDelete(pdata.id)}> <DeleteIcon/></Link>
            </TableCell>
            </TableRow >
              ))              

              }
                    
                  

          

            </TableBody>
        </Table>

   </TableContainer>

   <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={productData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
   </Paper>
  );
}

export default Animallicense;
