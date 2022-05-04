import React from "react"

export default function Product() {
  return (
    <div class="flex flex-row">
      {/* Big Div */}
      <div class="basis-9/12 pt-14">
        {/* Product Image */}
        <div class="max-w-sm w-full lg:max-w-full lg:flex">
          <div className="flex justify-center w-full border-r border-b border-l lg:border-l-0 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 leading-normal">
            <img
              class="h-fit w-2/5"
              src="https://img.innoloft.com/products/product_783016a3.png"
              alt="Sunset in the mountains"
            />
          </div>
        </div>
        {/* Product main Info */}

        <div class="max-w-sm w-full lg:max-w-full lg:flex mt-4">
          <div className="flex flex-col justify-between w-full border-r border-b border-l lg:border-l-0 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 leading-normal">
            <p class="text-2xl">Product main Info</p>
          </div>
        </div>

        {/* Description tab */}

        <div class="max-w-sm w-full lg:max-w-full lg:flex mt-4">
          <div className="flex flex-col justify-between w-full border-r border-b border-l lg:border-l-0 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 leading-normal">
            <p class="text-2xl">Description tab </p>
          </div>
        </div>

        {/* Tab Content */}

        <div class="max-w-sm w-full lg:max-w-full lg:flex mt-4">
          <div className="h-96 flex flex-col justify-between w-full border-r border-b border-l lg:border-l-0 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 leading-normal">
            <p class="text-2xl">Tab Content </p>
          </div>
        </div>
      </div>

      {/* Small Div */}

      <div class="basis-1/4 ml-3 h-96 pt-14">
        {/* User Info */}
        <div class="max-w-sm w-full lg:max-w-full lg:flex">
          <div className="h-96 flex flex-col justify-between w-full border-r border-b border-l lg:border-l-0 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 leading-normal">
            <p class="text-2xl">User Info</p>
          </div>
        </div>
        {/* Map Info */}
        <div class="max-w-sm w-full lg:max-w-full lg:flex mt-4">
          <div className="h-96 flex flex-col justify-between w-full border-r border-b border-l lg:border-l-0 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 leading-normal">
            <p class="text-2xl">Map</p>
          </div>
        </div>
      </div>
    </div>
  )
}
