"use client";
import Alert from "@/components/Alert";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import ErrorPage from "@/components/ErrorPage";
import InputGroup from "@/components/InputGroup";
import Spinner from "@/components/Spinner";
import { useGetOneArticle, useUpdateArticle } from "@/hooks/useArticle";
import { useGetToken } from "@/hooks/useToken";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function UpdateArticle({ params }) {
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
  const { data, isLoading, isLoadingError } = useGetOneArticle(id, token);

  const formik = useFormik({
    initialValues: {
      title: "",
      thumbnail: "",
      content: "",
      publishedAt: "",
    },
    onSubmit: () => {
      mutate({ token, userId: id, body: formik.values });
    },
  });

  useEffect(() => {
    if (data) {
      formik.setValues({
        title: data.data.data.title,
        thumbnail: data.data.data.thumbnail,
        content: data.data.data.content,
        publishedAt: data.data.data.publishedAt,
      });
    }
  }, [data]);

  const handleChange = (e) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };

  // mutation here, handle success and error
  const { mutate, isPending } = useUpdateArticle({
    onSuccess: () => {
      push("/articles");
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
                  label={"Title"}
                  type="text"
                  name="title"
                  onChange={handleChange}
                  value={formik.values.title}
                  placeholder="Enter the article title"
                />

                <InputGroup
                  label={"Thumbnail"}
                  type="text"
                  name="thumbnail"
                  onChange={handleChange}
                  value={formik.values.thumbnail}
                  placeholder="Enter the thumbnail"
                />

                <InputGroup
                  label={"Content"}
                  type="text"
                  name="content"
                  onChange={handleChange}
                  value={formik.values.content}
                  placeholder="Enter the content of article"
                />

                <InputGroup
                  label={"Published At"}
                  type="text"
                  name="publishedAt"
                  onChange={handleChange}
                  value={formik.values.publishedAt}
                  placeholder="Enter the Published At"
                />

                <div className="flex gap-4 justify-end">
                  <Link href={"/articles"}>
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
