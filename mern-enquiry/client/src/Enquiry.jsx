import React, { useEffect, useState } from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import EnquiryList from "./Enquiry/EnquiryList";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2/dist/sweetalert2.js";
import axios from "axios";

function Enquiry() {
  let [enquiryList, setEnquiryList] = useState([]);

  let [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    _id: "",
  });
  let saveEnquiry = (e) => {
    e.preventDefault();
    // let formData={
    //     name:e.target.name.value,
    //     email:e.target.email.value,
    //     phone:e.target.phone.value,
    //     message:e.target.message.value
    // }
    if (formData._id) {
      axios
        .put(
          `http://localhost:8020/api/enquiry/update/${formData._id}`,formData
        )
        .then((res) => {
          // console.log(res.data);
          toast.success("Updated Successfully");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            _id: ""
          })
           getAllenquiry()
        });
       
    } else {
      axios
        .post("http://localhost:8020/api/enquiry/insert", formData)
        .then((res) => {
          console.log(res.data);
          toast.success("Enquiry saved Successfully");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          getAllenquiry();
        });
    }
  };
  // get Data
  let getAllenquiry = () => {
    axios
      .get("http://localhost:8020/api/enquiry/view", formData)
      .then((res) => {
        // console.log(res); // check full response
        return res.data;
      })
      .then((finalData) => {
        if (finalData.status) {
          setEnquiryList(finalData.EnquiryList);
        }
        // console.log(enquiryList)
      })

      .catch((err) => {
        console.log(err);
      });
  };

  let getValue = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    let oldData = { ...formData };
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  useEffect(() => {
    getAllenquiry();
  }, []);

  return (
    <div className=" mx-10">
      <ToastContainer />
      <h1 className="text-4xl text-center py-6 font-bold">Enquiry Form</h1>
      <div className="grid grid-cols-[30%_auto] gap-10 mb-5">
        <div className="bg-gray-200 p-4">
          <h2 className="text-2xl font-bold">Enquiry Form</h2>

          <form action="" onSubmit={saveEnquiry}>
            <div className="py-1">
              <Label htmlFor="name">Your Name</Label>
              <TextInput
                type="name"
                value={formData.name}
                onChange={getValue}
                name="name"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="py-1">
              <Label htmlFor="email">Your Email</Label>
              <TextInput
                type="email"
                value={formData.email}
                onChange={getValue}
                name="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="py-1">
              <Label htmlFor="phone">Your Phone</Label>
              <TextInput
                type="text"
                value={formData.phone}
                onChange={getValue}
                name="phone"
                placeholder="Enter Your Phone"
                required
              />
            </div>
            <div className="py-1">
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={getValue}
                placeholder="Enter a Message...."
                required
                rows={4}
              />
            </div>
            <div className="py-1">
              <Button type="submit" className="w-full">
                {formData._id ? "Update" : "Save"}
              </Button>
            </div>
          </form>
        </div>
        <EnquiryList
          data={enquiryList}
          render={getAllenquiry()}
          Swal={Swal}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
}

export default Enquiry;
