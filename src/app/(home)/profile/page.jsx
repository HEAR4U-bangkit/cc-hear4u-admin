"use client";
import Alert from "@/components/Alert";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import InputGroup from "@/components/InputGroup";
import Spinner from "@/components/Spinner";
import {
  useGetOneUser,
  useGetProfile,
  useUpdatePassword,
  useUpdateUser,
} from "@/hooks/useProfile";
import { useGetToken } from "@/hooks/useToken";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const token = useGetToken();
  const [showProfileAlert, setShowProfileAlert] = useState({
    isShow: false,
    title: "",
    message: "",
    type: "error",
  });
  const [showPasswordAlert, setShowPasswordAlert] = useState({
    isShow: false,
    title: "",
    message: "",
    type: "error",
  });

  const { data: dataToken } = useGetProfile(token);

  const userId = dataToken?.data?.data?.id;

  const {
    data: dataProfile,
    isLoading,
    refetch,
  } = useGetOneUser(userId, token);

  const profileForm = useFormik({
    initialValues: {
      fullname: "",
      email: "",
    },
    onSubmit: () => {
      mutateProfile({
        token,
        userId: dataProfile?.data?.data.id,
        body: profileForm.values,
      });
    },
  });

  const passwordForm = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmationPassword: "",
    },
    onSubmit: () => {
      mutatePassword({
        token,
        userId: dataProfile?.data?.data.id,
        body: passwordForm.values,
      });
    },
  });

  useEffect(() => {
    if (dataProfile) {
      profileForm.setValues({
        fullname: dataProfile?.data?.data.fullname,
        email: dataProfile?.data?.data.email,
      });
    }
  }, [dataProfile]);

  const handleChange = (e, form) => {
    form == "profile"
      ? profileForm.setFieldValue(e.target.name, e.target.value)
      : passwordForm.setFieldValue(e.target.name, e.target.value);
  };

  const { mutate: mutateProfile, isPending: isPendingProfile } = useUpdateUser({
    onSuccess: () => {
      setShowProfileAlert({
        isShow: true,
        type: "success",
        title: "Berhasil",
        message: "Berhasil update profile!",
      });

      refetch();
    },
    onError: (error) => {
      const result = error.response.data;

      setShowProfileAlert({
        isShow: true,
        type: "error",
        title: "Terjadi Kesalahan",
        message: result.message,
      });
    },
  });

  const { mutate: mutatePassword, isPending: isPendingPassword } =
    useUpdatePassword({
      onSuccess: () => {
        setShowPasswordAlert({
          isShow: true,
          type: "success",
          title: "Berhasil",
          message: "Berhasil update password!",
        });
      },
      onError: (error) => {
        const result = error.response.data;

        setShowPasswordAlert({
          isShow: true,
          type: "error",
          title: "Terjadi Kesalahan",
          message: result.message,
        });
      },
    });

  return (
    <React.Fragment>
      <Breadcrumb pageName="Profile" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        {/* Update Profile */}
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Update Profile
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              {showProfileAlert.isShow && (
                <Alert
                  type={showProfileAlert.type}
                  message={showProfileAlert.message}
                  title={showProfileAlert.title}
                />
              )}
              {isLoading ? (
                <div className="flex justify-center items-center px-4 py-5">
                  <Spinner />
                </div>
              ) : (
                <form onSubmit={profileForm.handleSubmit}>
                  <InputGroup
                    label={"Fullname"}
                    type="text"
                    name="fullname"
                    value={profileForm.values.fullname}
                    onChange={(e) => handleChange(e, "profile")}
                    placeholder="Enter your full name"
                  />

                  <InputGroup
                    label={"Email"}
                    type="email"
                    name="email"
                    value={profileForm.values.email}
                    onChange={(e) => handleChange(e, "profile")}
                    placeholder="Enter your email address"
                  />

                  <div className="flex justify-end">
                    <Button
                      text={"Update"}
                      type="submit"
                      disabled={isPendingProfile}
                    />
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Update Password */}
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Update Password
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              {showPasswordAlert.isShow && (
                <Alert
                  type={showPasswordAlert.type}
                  message={showPasswordAlert.message}
                  title={showPasswordAlert.title}
                />
              )}
              <form onSubmit={passwordForm.handleSubmit}>
                <InputGroup
                  label={"Old Password"}
                  type="password"
                  name="oldPassword"
                  onChange={(e) => handleChange(e, "password")}
                  placeholder="Enter your old password"
                />

                <InputGroup
                  label={"New Password"}
                  type="password"
                  name="newPassword"
                  onChange={(e) => handleChange(e, "password")}
                  placeholder="Enter your new password"
                />

                <InputGroup
                  label={"Confirmation Password"}
                  type="password"
                  name="confirmationPassword"
                  onChange={(e) => handleChange(e, "password")}
                  placeholder="Retype your new password"
                />

                <div className="flex justify-end">
                  <Button
                    text={"Update"}
                    type="submit"
                    disabled={isPendingPassword}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
