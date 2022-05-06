import React from "react"

export default function Attributes({ productData }) {
  const getFormattedStringByName = (arrData) => {
    return arrData?.map((category) => category?.name).join(", ")
  }

  return (
    <div className="basis-1/2 ml-3">
      <div className="max-w-sm w-full lg:max-w-full lg:flex mt-4">
        <div className="shadow-xl flex flex-col justify-between w-full bg-white rounded-lg p-4 leading-normal">
          <p className="text-2xl">Attributes tab </p>
          <table className="text-xs my-3">
            <tbody>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">
                  Categories
                </td>
                <td className="px-2 py-2">
                  {getFormattedStringByName(productData?.categories)}
                </td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">
                  BusinessModels
                </td>
                <td className="px-2 py-2">
                  {getFormattedStringByName(productData?.businessModels)}
                </td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Trls</td>
                <td className="px-2 py-2">{productData?.trl?.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
