import React, { useEffect } from "react"
import axios from "axios"

export default function ProjectList() {
  console.log("Product", process.env.REACT_APP_BACKEND_API_URL)

  useEffect(() => {
    console.log("came here")

    axios
      .get(
        process.env.REACT_APP_BACKEND_API_URL +
          "/configuration/" +
          process.env.REACT_APP_ID,
        {
          headers: {
            Accept: "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            Connection: "keep-alive",
          },
        }
      )
      .then(function (response) {
        // handle success
        console.log(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })

    axios
      .get(process.env.REACT_APP_BACKEND_API_URL + "/trl")
      .then(function (response) {
        // handle success
        console.log(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }, [])

  return (
    <div className="pt-14">
      ProjectList
      <div>view</div>
    </div>
  )
}
