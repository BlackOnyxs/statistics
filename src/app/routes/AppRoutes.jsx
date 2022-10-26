import { Route, Routes, Navigate } from 'react-router-dom'
// import { LoginPage } from '../../auth/pages/LoginPage'
import { HistogramPage } from '../pages/Histogram'
import { NotGroupedPage } from '../pages/NotGroupedPage'
import { PearsonPage } from '../pages/Pearson'

export const AppRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={ <HistogramPage /> } />
    <Route path="/not-grouped" element={ <NotGroupedPage /> } /> 
    <Route path="/pearson" element={ <PearsonPage /> } />

    <Route path="/*" element={ <Navigate to="/" /> } />
   </Routes>
  )
}
