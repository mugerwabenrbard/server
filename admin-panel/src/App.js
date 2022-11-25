import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Datatable from "./Pages/Datatable/Datatable";
import AddDepartment from "./Pages/Department/AddDepartment";
import DepartmentList from "./Pages/Department/DepartmentList";
import DoctorProfile from "./Pages/DoctorProfile/DoctorProfile";
import AddInventory from "./Pages/Inventory/AddInventory";
import Inventory from "./Pages/Inventory/Inventory";
import IssuedItems from "./Pages/Inventory/IssuedItems";
import IssueItem from "./Pages/Inventory/IssueItem";
import List from "./Pages/List/List";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import New from "./Pages/New/New";
import PatientProfile from "./Pages/PatientProfile/PatientProfile";
import AddPayment from "./Pages/Payment/AddPayment";
import Invoice from "./Pages/Payment/Invoice";
import Payment from "./Pages/Payment/Payment";
import AddMedicine from "./Pages/Pharmacy/AddMedicine";
import Pharmacy from "./Pages/Pharmacy/Pharmacy";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

function App() {
  
  const {user} = useSelector(state=>state.auth)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={!user ? <Login/> : <Navigate to="/dashboard"/>}/>
            <Route path="/register" element={!user ? <Register/> : <Navigate to="/dashboard"/>}/>
            <Route path="dashboard" element={user ? <Dashboard/> : <Navigate to="/"/>}/>
            <Route path="users">
              <Route index element={user ? <List/> : <Navigate to="/"/>}/>
              <Route path="new" element={user ? <New/> : <Navigate to="/"/>}/>
            </Route>
            <Route path="patients">
              <Route index element={user ? <Datatable/> : <Navigate to="/"/>}/>
              <Route path="add-patient" element={user ? <New title='Patient Information'/> : <Navigate to="/"/>}/>
              <Route path="edit-patient/:id" element={user ? <New title='Patient Information'/> : <Navigate to="/"/>}/>
              <Route path="patient-profile" element={user ? <PatientProfile/> : <Navigate to="/"/>}/>
            </Route>
            <Route path="doctors">
              <Route index element={user ? <Datatable title='Doctors'/> : <Navigate to="/"/>}/>
              <Route path="add-doctor" element={user ? <New title='Doctor Information'/> : <Navigate to="/"/>}/>
              <Route path="edit-doctor/:id" element={user ? <New title='Doctor Information'/> : <Navigate to="/"/>}/>
              <Route path="doctor-profile" element={user ? <DoctorProfile/> : <Navigate to="/"/>}/>
            </Route>
            <Route path="staffs">
              <Route index element={user ? <Datatable title='Staff'/> : <Navigate to="/"/>}/>
              <Route path="add-staff" element={user ? <New title='Staff'/> : <Navigate to="/"/>}/>
              <Route path="edit-staff/:id" element={user ? <New title='Staff'/> : <Navigate to="/"/>}/>
              <Route path="staff-profile" element={user ? <DoctorProfile/> : <Navigate to="/"/>}/>
            </Route>
            <Route path="payments">
              <Route index element={user ? <Payment/> : <Navigate to="/"/>}/>
              <Route path="add-payment" element={user ? <AddPayment/> : <Navigate to="/"/>}/>
              <Route path="invoice" element={user ? <Invoice/> : <Navigate to="/"/>}/>
            </Route>
            <Route path="department-list">
              <Route index element={user ? <DepartmentList/> : <Navigate to="/"/>}/>
              <Route path="add-department" element={user ? <AddDepartment/> : <Navigate to="/"/>}/>
            </Route>
            <Route path="pharmacy">
              <Route index element={user ? <Pharmacy/> : <Navigate to="/"/>}/>
              <Route path="add-medicine" element={user ? <AddMedicine/> : <Navigate to="/"/>}/>
            </Route>
            <Route path="inventory">
              <Route index element={user ? <Inventory/> : <Navigate to="/"/>}/>
              <Route path="add-inventory" element={user ? <AddInventory/> : <Navigate to="/"/>}/>
              <Route path="issued-items" element={user ? <IssuedItems/> : <Navigate to="/"/>}/>
              <Route path="issue-item" element={user ? <IssueItem/> : <Navigate to="/"/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
