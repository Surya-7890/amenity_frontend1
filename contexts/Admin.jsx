import { createContext, useState } from "react";

export const AdminContext = createContext();

export const fields = [
  {
    image: 'cash',
    name: 'ADD FUNDS',
    params: 'addfund'
  },
  {
    image: 'add',
    name: 'ADD/EDIT ITEM',
    params: 'additem'
  },
  {
    image: 'refund',
    name: 'REFUND',
    params: 'refund'
  },
  {
    image: 'logout',
    name: 'LOGOUT',
    params: 'logout'
  }
]

export const AdminProvider = ({ children }) => {
  const [active, setActive] = useState(0);
  
  return (
    <AdminContext.Provider value={{ setActive, active }}>
      { children }
    </AdminContext.Provider>
  )
}