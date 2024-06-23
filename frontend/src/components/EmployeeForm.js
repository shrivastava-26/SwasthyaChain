import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const DoctorForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const createDoctor = async (data) => {

    const savedUserResponse = await fetch(
      `${process.env.REACT_APP_BASE_URL}/createUser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      }
    );

    console.log("FORM RESPONSE......", savedUserResponse);

    navigate("/")
  };

  return (
    <div>
      <form onSubmit={handleSubmit(createDoctor)} className="mt-8">
        <div className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="text-base font-medium text-gray-900 dark:text-gray-900"
            >
              {" "}
              Doctor Name{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent py-2 px-3 text-sm placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter You Full Name"
                {...register("name")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-base font-medium text-gray-900 dark:text-gray-900"
            >
              {" "}
              Doctor Email Id{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent py-2 px-3 text-sm placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="email"
                placeholder="Enter Your Email"
                {...register("email")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="title"
              className="text-base font-medium text-gray-900 dark:text-gray-900"
            >
              {" "}
              Doctor Title{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent py-2 px-3 text-sm placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter Your Doctor Title"
                {...register("title")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="department"
              className="text-base font-medium text-gray-900 dark:text-gray-900"
            >
              {" "}
              Doctor Department{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent py-2 px-3 text-sm placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter Your Doctor Department"
                {...register("department")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="role"
              className="text-base font-medium text-gray-900 dark:text-gray-900"
            >
              {" "}
              Doctor Role{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent py-2 px-3 text-sm placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter Your Doctor Role"
                {...register("role")}
              ></input>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-yellow-400  px-3.5 py-2.5 text-base font-semibold leading-7 text-black hover:bg-yellow-200"
            >
              Add Doctor
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DoctorForm;
