import React from "react"
import CompanyMap from "../components/map/CompanyMap"
import User from "../components/user/User"
import { productData } from "../components/mocks/mockData"

export default function Product() {
  const {
    name,
    description,
    picture,
    type,
    categories,
    investmentEffort,
    trl,
    businessModels,
  } = productData

  const getFormattedStringByName = (arrData) => {
    return arrData?.map((category) => category?.name).join(", ")
  }

  return (
    <div class="flex flex-row">
      {/* Big Div */}
      <div class="basis-9/12 pt-14">
        {/* Product Image */}
        <div class="max-w-sm w-full lg:max-w-full lg:flex">
          <div className="flex justify-center shadow-xl w-full bg-white rounded-lg p-4 leading-normal">
            <img
              class="h-fit w-2/5"
              src="https://img.innoloft.com/products/product_783016a3.png"
              alt="Sunset in the mountains"
            />
          </div>
        </div>
        {/* Product main Info */}

        <div class="max-w-sm w-full lg:max-w-full lg:flex mt-4">
          <div className="shadow-xl flex flex-col justify-between w-full bg-white rounded-lg p-4 leading-normall">
            <div class="flex flex-row">
              <div class="basis-1/12">
                <p class="text-2xl">{name}</p>
                <p class="text-2xl font-bold">({type?.name})</p>{" "}
              </div>
              <div class="basis-1/4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-24 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Description tab */}

        <div class="flex flex-row">
          <div class="basis-1/2">
            <div class="max-w-sm w-full lg:max-w-full lg:flex mt-4">
              <div className="shadow-xl flex flex-col justify-between w-full bg-white rounded-lg p-4 leading-normal">
                <p class="text-2xl mb-4">Description</p>

                <div dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            </div>
          </div>
          <div class="basis-1/2 ml-3">
            <div class="max-w-sm w-full lg:max-w-full lg:flex mt-4">
              <div className="shadow-xl flex flex-col justify-between w-full bg-white rounded-lg p-4 leading-normal">
                <p class="text-2xl">Attributes tab </p>
                <table class="text-xs my-3">
                  <tbody>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Categories
                      </td>
                      <td class="px-2 py-2">
                        {getFormattedStringByName(categories)}
                      </td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        BusinessModels
                      </td>
                      <td class="px-2 py-2">
                        {getFormattedStringByName(businessModels)}
                      </td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Trls
                      </td>
                      <td class="px-2 py-2">{trl?.name}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content */}

        <div class="max-w-sm w-full lg:max-w-full lg:flex mt-4">
          <div className="h-96 shadow-xl flex flex-col justify-between w-full bg-white rounded-lg p-4 leading-normal">
            <p class="text-2xl">Tab Content </p>
          </div>
        </div>
      </div>

      {/* Small Div */}

      <div class="basis-1/4 ml-3 h-96 pt-14">
        {/* User Info */}
        <User />
        {/* Map Info */}
        <CompanyMap />
      </div>
    </div>
  )
}
