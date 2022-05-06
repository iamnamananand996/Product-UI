import React from "react"
// import { productData } from "../mocks/mockData"

export default function User({ userData }) {
  const { id, email, firstName, lastName, sex, profilePicture, position } = {
    ...userData,
  }

  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex mb-4">
      <div className="shadow-xl flex flex-col justify-between w-full bg-white rounded-lg p-4 leading-normal">
        <div className="photo-wrapper p-2">
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src={profilePicture}
            alt={`${firstName} ${lastName}`}
          />
        </div>
        <div className="p-2">
          <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
            {firstName} {lastName}
          </h3>
          <div className="text-center text-gray-400 text-xs font-semibold">
            <p>{position}</p>
          </div>
          <table className="text-xs my-3">
            <tbody>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">
                  User Id
                </td>
                <td className="px-2 py-2">{id}</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Sex</td>
                <td className="px-2 py-2">{sex === 1 ? "Male" : "Female"}</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                <td className="px-2 py-2">{email}</td>
              </tr>
            </tbody>
          </table>

          <div className="text-center my-3">
            <a
              className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
              href="!#"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
