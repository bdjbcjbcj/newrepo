import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function EnquiryList({data,render,Swal,setFormData}) {
  // console.log(data)
  
  let deleteRow=(delId)=>{
    Swal.fire({
  title: "Do you want to save the changes?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",
  
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
     axios.delete(`http://localhost:8020/api/enquiry/delete/${delId}`)
    .then(()=>{
      toast.success('Deleted Successfully')
      render()
    })
  }
  else if (result.isDenied) Swal.fire("Changes are not saved", "", "info");
});
  }
  let editRow=(editid)=>{
    axios.get(`http://localhost:8020/api/enquiry/single/${editid}`)
    .then((res)=>{
      let data =res.data
      setFormData(data.enquiry)
      
    })
}
  return (
    <div className="bg-gray-200 p-4">
      <ToastContainer/>
      <h2 className="text-2xl font-bold mb-4">Enquiry List</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>Sr No</TableHeadCell>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Phone No</TableHeadCell>
              <TableHeadCell>Message</TableHeadCell>
              <TableHeadCell>
                <span>Delete</span>
              </TableHeadCell>
              <TableHeadCell>
                <span>Edit</span>
              </TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
           {
           data.length>=1 ?
           data.map((item, index)=>{
            return(
              <TableRow key={index} className="bg-white dark:border-gray-700">
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.message}</TableCell>
                <TableCell>
                  <button onClick={()=>deleteRow(item._id)} className="bg-red-600 text-white px-4 py-2 rounded-md cursor-pointer">delete</button>
                </TableCell>
                <TableCell>
                  <button onClick={()=>editRow(item._id)} className="bg-red-600 text-white px-4 py-2 rounded-md cursor-pointer">Edit</button>
                </TableCell>
                
              </TableRow>
            )
           })
  : 
  <TableRow>
    <TableCell colSpan={7} className="text-center dark:border-gray-700">
      No Data Found
    </TableCell>
  </TableRow>
}

          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default EnquiryList;
