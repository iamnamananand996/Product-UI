import React, { useEffect } from "react"
import { useState } from "react"
import { getConfiguration } from "../services/getRequest"
import UserContext from "../context/UserContext"

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getConfiguration().then((data) => {
      setUser(data)
    })
  }, [])

  const userProviderValue = {
    user,
  }

  return (
    <UserContext.Provider value={userProviderValue}>
      {children}
    </UserContext.Provider>
  )
}
