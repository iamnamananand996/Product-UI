import React from "react"
import { productData } from "../mocks/mockData"

export default function User() {
  const { id, email, firstName, lastName, sex, profilePicture, position } = {
    ...productData?.user,
  }

  console.log(email)

  return (
    <div class="max-w-sm w-full lg:max-w-full lg:flex">
      <div className="shadow-xl flex flex-col justify-between w-full bg-white rounded-lg p-4 leading-normal">
        <div class="photo-wrapper p-2">
          <img
            class="w-32 h-32 rounded-full mx-auto"
            src={profilePicture}
            alt={`${firstName} ${lastName}`}
          />
        </div>
        <div class="p-2">
          <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
            {firstName} {lastName}
          </h3>
          <div class="text-center text-gray-400 text-xs font-semibold">
            <p>{position}</p>
          </div>
          <table class="text-xs my-3">
            <tbody>
              <tr>
                <td class="px-2 py-2 text-gray-500 font-semibold">User Id</td>
                <td class="px-2 py-2">{id}</td>
              </tr>
              <tr>
                <td class="px-2 py-2 text-gray-500 font-semibold">Sex</td>
                <td class="px-2 py-2">{sex === 1 ? "Male" : "Female"}</td>
              </tr>
              <tr>
                <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                <td class="px-2 py-2">{email}</td>
              </tr>
            </tbody>
          </table>

          <div class="text-center my-3">
            <a
              class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
              href="#"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
