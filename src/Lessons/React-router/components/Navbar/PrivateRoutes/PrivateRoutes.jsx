import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import ROUTES from '../../../routes'

export default function PrivateRoutes() {
  const [login, setLogin] = useState(window.localStorage.getItem('login'))

  return login ? <Outlet /> : <Navigate to={ROUTES.SIGNIN} />
}
