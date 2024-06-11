"use client";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import InputGroup from "@/components/InputGroup";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function UpdateUser({ params }) {
  const { id } = params;
  const { push } = useRouter();
  const [showAlert, setShowAlert] = useState({
    isShow: false,
    title: "",
    message: "",
    type: "error",
  });

  const formik = useFormik({
    initialValues: {
      // after get fill the initial value
      fullname: "",
      email: "",
    },
    onSubmit: () => {
      // mutate(formik.values)
    },
  });

  const handleChange = (e) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };

  // query get one user -> if not found show not found page

  // mutation here, handle success and error

  return (
    <React.Fragment>
      <Breadcrumb pageName="Update User" />

      <div className="flex flex-col gap-9">
        {/* <!-- Sign Up Form --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Update User
            </h3>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="p-6.5">
              <InputGroup
                label={"Fullname"}
                type="text"
                name="fullname"
                onChange={handleChange}
                placeholder="Enter your full name"
              />

              <InputGroup
                label={"Email"}
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter your email address"
              />

              <Button text={"Update"} type="submit" />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
