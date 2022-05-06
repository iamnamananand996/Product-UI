import React from "react"
// import { productData } from "../mocks/mockData"

export default function CompanyMap({ mapData }) {
  const { name, logo, address } = {
    ...mapData,
  }

  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div className="shadow-xl flex flex-col justify-between w-full bg-white rounded-lg p-4 leading-normal">
        <section className="text-gray-600 body-font relative">
          <div className="absolute inset-0 bg-gray-300">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="map"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.778504978557!2d6.096176234222788!3d50.77967940597658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c09963c8e4ae6b%3A0xbb82ea0594132a59!2sInnoloft%20GmbH!5e0!3m2!1sen!2sus!4v1651772297306!5m2!1sen!2sus"
            ></iframe>
          </div>
          <div className="container pr-16 pl-16 pt-80 pb-6 mx-auto flex">
            <div className="lg:w-full md:w-full bg-white rounded-lg p-4 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-5 shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                {name}
              </h2>
              <img className="h-fit w-20" src={logo} alt="" />

              <div className="flex flex-row">
                <div className="basis-1/6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mt-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="basis-5/6">
                  <p className="text-xs text-gray-500 mt-3">
                    #{address?.house}, {address?.street}, {address?.city?.name},{" "}
                    {address?.country?.name}, {address?.zipCode}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
