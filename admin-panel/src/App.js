import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="users">
            <Route index element={<List/>}/>
            <Route path="new" element={<New/>}/>
          </Route>
          <Route path="patients">
            <Route index element={<Datatable/>}/>
            <Route path="add-patient" element={<New title='Patient Information'/>}/>
            <Route path="edit-patient/:id" element={<New title='Patient Information'/>}/>
            <Route path="patient-profile" element={<PatientProfile/>}/>
          </Route>
          <Route path="doctors">
            <Route index element={<Datatable title='Doctors'/>}/>
            <Route path="add-doctor" element={<New title='Doctor Information'/>}/>
            <Route path="edit-doctor/:id" element={<New title='Doctor Information'/>}/>
            <Route path="doctor-profile" element={<DoctorProfile/>}/>
          </Route>
          <Route path="staffs">
            <Route index element={<Datatable title='Staff'/>}/>
            <Route path="add-staff" element={<New title='Staff'/>}/>
            <Route path="edit-staff/:id" element={<New title='Staff'/>}/>
            <Route path="staff-profile" element={<DoctorProfile/>}/>
          </Route>
          <Route path="payments">
            <Route index element={<Payment/>}/>
            <Route path="add-payment" element={<AddPayment/>}/>
            <Route path="invoice" element={<Invoice/>}/>
          </Route>
          <Route path="department-list">
            <Route index element={<DepartmentList/>}/>
            <Route path="add-department" element={<AddDepartment/>}/>
          </Route>
          <Route path="pharmacy">
            <Route index element={<Pharmacy/>}/>
            <Route path="add-medicine" element={<AddMedicine/>}/>
          </Route>
          <Route path="inventory">
            <Route index element={<Inventory/>}/>
            <Route path="add-inventory" element={<AddInventory/>}/>
            <Route path="issued-items" element={<IssuedItems/>}/>
            <Route path="issue-item" element={<IssueItem/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
