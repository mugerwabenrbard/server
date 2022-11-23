import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import './Pharmacy.scss'

const AddMedicine = () => {
  return (
    <div className='addMedicine'>
        <Sidebar/>

        <div className="addMedicineContainer">
            <Navbar/>

            <div className="addMedicineForm">
            <p className="title">ADD MEDICINE</p>
                <form action="">
                    <div className="formInput">
                        <label>Medicine No</label>
                        <input type="text" />
                    </div>
                    <div className="formInput">
                        <label>Medicine Name</label>
                        <input type="text" />
                    </div>
                    <div className="formInput">
                        <label>Category</label>
                        <select>
                            <option value="Tablet">Tablet</option>
                            <option value="Syrup">Syrup</option>
                            <option value="Injectable">Injectable</option>
                        </select>
                    </div>
                    <div className="formInput">
                        <label>Company Name</label>
                        <input type="text" />
                    </div>
                    <div className="formInput">
                        <label>Purchase Date</label>
                        <input type="date" />
                    </div>
                    <div className="formInput">
                        <label>Price</label>
                        <input type="number" />
                    </div>
                    <div className="formInput">
                        <label>Expiry Date</label>
                        <input type="date" />
                    </div>
                    <div className="formInput">
                        <label>Stock</label>
                        <input type="number" />
                    </div>                  
                    <div className="btn">
                        <button>ADD MEDICINE</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddMedicine