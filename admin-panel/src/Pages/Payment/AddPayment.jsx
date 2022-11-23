import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import './Payment.scss'

const AddPayment = () => {
  return (
    <div className='addPayment'>
        <Sidebar/>
        <div className="addPaymentContainer">
            <Navbar/>
            <div className="paymentForm">
                <p className="title">ADD PAYMENT</p>
                <form action="">
                    <div className="formInput">
                        <label>Bill No</label>
                        <input type="text" />
                    </div>
                    <div className="formInput">
                        <label>Patient ID</label>
                        <input type="text" />
                    </div>
                    <div className="formInput">
                        <label>Patient Name</label>
                        <input type="text" />
                    </div>
                    <div className="formInput">
                        <label>Doctor Name</label>
                        <input type="text" />
                    </div>
                    <div className="formInput">
                        <label>Admit Date</label>
                        <input type="date" />
                    </div>
                    <div className="formInput">
                        <label>Discharge Date</label>
                        <input type="date" />
                    </div>
                    <div className="formInput">
                        <label>Discount</label>
                        <input type="number" />
                    </div>
                    <div className="formInput">
                        <label>Amount Paid</label>
                        <input type="number" />
                    </div>
                    <div className="formInput">
                        <label>Payment Method</label>
                        <select>
                            <option value="Cash">Cash</option>
                            <option value="Cheque">Cheque</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Bank Transfer">Bank Transfer</option>
                            <option value="Insurance">Insurance</option>
                        </select>
                    </div>
                    <div className="formInput">
                        <label>Payment Status</label>
                        <select>
                            <option value="paid">Paid</option>
                            <option value="Unpaid">Unpaid</option>
                            <option value="Partial'">Partial</option>
                        </select>
                    </div>
                    <div className="btn">
                        <button>ADD PAY</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddPayment