"use client";
import Alert from "@/components/Alert";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import InputGroup from "@/components/InputGroup";
import { useCreateArticle } from "@/hooks/useArticle";
import { useGetToken } from "@/hooks/useToken";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CreateArticle() {
  const { push } = useRouter();
  const [showAlert, setShowAlert] = useState({
    isShow: false,
    title: "",
    message: "",
    type: "error",
  });

  const token = useGetToken();

  const { mutate, isPending } = useCreateArticle({
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

  const formik = useFormik({
    initialValues: {
      title: "",
      thumbnail: "",
      content: "",
      publishedAt: "",
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
      <Breadcrumb pageName={"Create Article"} />

      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Create Article
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
                label={"Title"}
                type="text"
                name="title"
                onChange={handleChange}
                placeholder="Enter the article title"
              />

              <InputGroup
                label={"Thumbnail"}
                type="text"
                name="thumbnail"
                onChange={handleChange}
                placeholder="Enter the thumbnail"
              />

              <InputGroup
                label={"Content"}
                type="text"
                name="content"
                onChange={handleChange}
                placeholder="Enter the content of article"
              />

              <InputGroup
                label={"Published At"}
                type="text"
                name="publishedAt"
                onChange={handleChange}
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
                <Button text={"Create"} type="submit" disabled={isPending} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
