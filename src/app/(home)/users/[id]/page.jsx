"use client";
import Alert from "@/components/Alert";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import ErrorPage from "@/components/ErrorPage";
import InputGroup from "@/components/InputGroup";
import Spinner from "@/components/Spinner";
import { useGetOneUser, useUpdateUser } from "@/hooks/useProfile";
import { useGetToken } from "@/hooks/useToken";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function UpdateUser({ params }) {
  const { id } = params;
  const { push } = useRouter();
  const [showAlert, setShowAlert] = useState({
    isShow: false,
    title: "",
    message: "",
    type: "error",
  });

  const token = useGetToken();

  // query get one user -> if not found show not found page
  const { data, isLoading, isLoadingError } = useGetOneUser(id, token);

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
    },
    onSubmit: () => {
      mutate({ token, userId: id, body: formik.values });
    },
  });

  useEffect(() => {
    if (data) {
      formik.setValues({
        fullname: data.data.data.fullname,
        email: data.data.data.email,
      });
    }
  }, [data]);

  const handleChange = (e) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };

  // mutation here, handle success and error
  const { mutate, isPending } = useUpdateUser({
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

  if (isLoadingError) {
    // render notfound
    return <ErrorPage />;
  }

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
          {showAlert.isShow && (
            <Alert
              type={"error"}
              message={showAlert.message}
              title={showAlert.title}
            />
          )}
          {isLoading ? (
            <div className="flex justify-center items-center px-4 py-5">
              <Spinner />
            </div>
          ) : (
            <form onSubmit={formik.handleSubmit}>
              <div className="p-6.5">
                <InputGroup
                  label={"Fullname"}
                  type="text"
                  name="fullname"
                  value={formik.values.fullname}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />

                <InputGroup
                  label={"Email"}
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                />

                <div className="flex gap-4 justify-end">
                  <Link href={"/users"}>
                    <Button
                      text={"Cancel"}
                      variant="outline"
                      disabled={isPending}
                    />
                  </Link>
                  <Button text={"Update"} type="submit" disabled={isPending} />
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
