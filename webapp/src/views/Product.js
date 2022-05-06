import React, { useEffect, useState } from "react"
import CompanyMap from "../components/map/CompanyMap"
import Attributes from "../components/product/Attributes"
import Description from "../components/product/Description"
import User from "../components/user/User"
// import { productData } from "../components/mocks/mockData"
import { getProduct, getConfiguration } from "../services/getRequest"

export default function Product() {
  // const {
  //   name,
  //   description,
  //   // picture,
  //   type,
  //   categories,
  //   // investmentEffort,
  //   trl,
  //   businessModels,
  // } = productData

  const [productData, setProductData] = useState(null)
  const [hasUserSection, setHasUserSection] = useState(false)

  const canViewUserSection = (hasUserSection) => {
    if (hasUserSection) {
      return true
    }
    return false
  }

  useEffect(() => {
    getProduct("6781").then((data) => {
      setProductData(data)
    })

    getConfiguration().then((data) => {
      setHasUserSection(data?.hasUserSection)
    })
  }, [])

  return (
    <div className="flex flex-row">
      {/* Big Div */}
      <div className="basis-9/12 pt-14">
        {/* Product Image */}
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
          <div className="flex justify-center shadow-xl w-full bg-white rounded-lg p-4 leading-normal">
            <img
              className="h-fit w-2/5"
              src="https://img.innoloft.com/products/product_783016a3.png"
              alt="Sunset in the mountains"
            />
          </div>
        </div>
        {/* Product main Info */}

        <div className="max-w-sm w-full lg:max-w-full lg:flex mt-4">
          <div className="shadow-xl flex flex-col justify-between w-full bg-white rounded-lg p-4 leading-normall">
            <div className="flex flex-row">
              <div className="basis-1/12">
                <p className="text-2xl">{productData?.name}</p>
                <p className="text-2xl font-bold">
                  ({productData?.type?.name})
                </p>{" "}
              </div>
              <div className="basis-1/4">
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

        <div className="flex flex-row">
          <Description description={productData?.description} />
          <Attributes productData={productData} />
        </div>

        {/* Tab Content */}

        <div className="max-w-sm w-full lg:max-w-full lg:flex mt-4">
          <div className="h-96 shadow-xl flex flex-col justify-between w-full bg-white rounded-lg p-4 leading-normal">
            <p className="text-2xl">Tab Content </p>
          </div>
        </div>
      </div>

      {/* Small Div */}

      <div className="basis-1/4 ml-3 h-96 pt-14">
        {/* User Info */}
        {canViewUserSection(hasUserSection) && (
          <User userData={productData?.user} />
        )}
        {/* Map Info */}
        <CompanyMap mapData={productData?.company} />
      </div>
    </div>
  )
}
