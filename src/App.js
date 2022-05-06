import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  Home  from './Home'
import CategoriesCard from './components/CategoriesCard'
import CustomersCard from './components/CustomersCard'
import EmployeeterritoriesCard from './components/Employee_territoriesCard'
import OrderdetailsCard from './components/Order_detailsCard'
import TerritoriesCards from './components/TerritoriesCards'
import ShippersCard from './components/ShippersCard'
import RegionsCard from './components/RegionsCard'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={< CategoriesCard  />} />
        <Route path="/customers" element={< CustomersCard  />} />
        <Route path="/employee_territories" element={< EmployeeterritoriesCard  />} />
        <Route path="/order_details" element={< OrderdetailsCard  />} />
       
        <Route path="/regions" element={< RegionsCard  />} />
        <Route path="/shippers" element={< ShippersCard  />} />
        <Route path="/territories" element={< TerritoriesCards  />} />
       
      </Routes>
    </div>
  )
}

export default App