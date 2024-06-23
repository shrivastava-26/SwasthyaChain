import React from "react";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import DoctorForm from "../components/EmployeeForm";

const CreateDoctorPage = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-green-600">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0 " >
            <img
              className="h-150 mt-6 w-150 rounded-full"
              src="https://img.freepik.com/free-vector/man-doctor-woman-nurse-stand-with-patient-card-medical-staff-uniform-study-discuss-examination-result-make-note-therapist-giving-treatment-recommendation-prescription-putting-signature_575670-1316.jpg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              <h3 className="text-4xl font-bold text-white">
               Connect with Doctors!
              </h3>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
              Add a Doctor
            </h2>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
              <Link
                to={"/"}
                className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700 flex items-center gap-3"
              >
                <FaBackward />
                Back to all Doctor List
              </Link>
            </p>

            <DoctorForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateDoctorPage;
