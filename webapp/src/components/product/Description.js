import React, { Fragment, useState } from "react"
import { CKEditor } from "ckeditor4-react"
import { productData } from "../mocks/mockData"

export default function Description({ description }) {
  const [edit, setEdit] = useState(false)

  const handleEdit = () => {
    setEdit(!edit)
  }
  const handleCancel = () => {
    setEdit(!edit)
  }

  const handleSave = () => {
    setEdit(!edit)
  }

  return (
    <div className="basis-1/2">
      <div className="max-w-sm w-full lg:max-w-full lg:flex mt-4">
        <div className="shadow-xl flex flex-col justify-between w-full bg-white rounded-lg p-4 leading-normal">
          <div class="flex flex-row">
            <div class="basis-2/3">
              <p className="text-2xl mb-4">Description</p>
            </div>

            <div class="basis-1/3">
              <div class="flex flex-row-reverse">
                {edit ? (
                  <Fragment>
                    <div>
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-4 border border-blue-700 rounded ml-2"
                        onClick={() => {
                          handleSave()
                        }}
                      >
                        Save
                      </button>
                    </div>
                    <div>
                      <button
                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-0 px-3 border border-red-700 rounded"
                        onClick={() => {
                          handleCancel()
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </Fragment>
                ) : (
                  <div>
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-3 border border-blue-700 rounded"
                      onClick={() => {
                        handleEdit()
                      }}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {edit ? (
            <CKEditor initData={productData?.description} />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>
      </div>
    </div>
  )
}
