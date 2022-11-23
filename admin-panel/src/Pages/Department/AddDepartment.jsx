import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import '../Payment/Payment.scss'

const AddDepartment = () => {
  return (
    <div className='addPayment'>
        <Sidebar/>
        <div className="addPaymentContainer">
            <Navbar/>
            <div className="paymentForm">
                <p className="title">ADD DEPARTMENT</p>
                <form action="">
                    <div className="formInput">
                        <label>Department No</label>
                        <input type="text" />
                    </div>
                    <div className="formInput">
                        <label>Department Name</label>
                        <input type="text" />
                    </div>
                    <div className="formInput">
                        <label>Department Head</label>
                        <input type="text" />
                    </div>
                    <div className="formInput">
                        <label>Status</label>
                        <select>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="btn">
                        <button>ADD DEPARTMENT</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddDepartment