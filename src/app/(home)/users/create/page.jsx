"use client";
import Alert from "@/components/Alert";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import InputGroup from "@/components/InputGroup";
import { useCreateUser } from "@/hooks/useProfile";
import { useGetToken } from "@/hooks/useToken";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CreateUser() {
  const { push } = useRouter();
  const [showAlert, setShowAlert] = useState({
    isShow: false,
    title: "",
    message: "",
    type: "error",
  });

  const token = useGetToken();

  const { mutate, isPending } = useCreateUser({
    onSuccess: () => {
      push("/users");
    },
    onError: (error) => {
      const result = error.response.data;

      setShowAlert({
        isShow: true,
        title: "Terjadi Kesalahan",
        message: result.message,
      });
    },
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    onSubmit: () => {
      mutate({ token, body: formik.values });
    },
  });

  const handleChange = (e) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };

  return (
    <React.Fragment>
      <Breadcrumb pageName={"Create User"} />

      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Create User
            </h3>
          </div>
          {showAlert.isShow && (
            <Alert
              type={"error"}
              message={showAlert.message}
              title={showAlert.title}
            />
          )}
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

              <InputGroup
                label={"Password"}
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter your password"
              />

              <div className="flex gap-4 justify-end">
                <Link href={"/users"}>
                  <Button
                    text={"Cancel"}
                    variant="outline"
                    disabled={isPending}
                  />
                </Link>
                <Button text={"Create"} type="submit" disabled={isPending} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
