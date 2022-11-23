import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import './Inventory.scss'

const IssueItem = () => {
  return (
    <div className='issueItem'>
        <Sidebar/>

        <div className="issueItemContainer">
            <Navbar/>
            <div className="inventoryForm">
                <p className="title">ISSUE ITEM</p>
                <form action="">
                    <div className="formInput">
                        <label>Item Name</label>
                        <input type="text" />
                    </div>
                    <div className="formInput">
                        <label>Category</label>
                        <select>
                            <option value="Cotton Packs">Cotton Packs</option>
                            <option value="Syringe Packs">Syringe Packs</option>
                            <option value="Bed Items">Bed Items</option>
                            <option value="Staff Item">Staff Item</option>
                            <option value="Equipments">Equipments</option>
                        </select>
                    </div>
                    <div className="formInput">
                        <label>Issue Date</label>
                        <input type="date" />
                    </div>
                    <div className="formInput">
                        <label>Return Date</label>
                        <input type="date" />
                    </div>
                    <div className="formInput">
                        <label>Quantity</label>
                        <input type="number" />
                    </div> 
                    <div className="formInput">
                        <label>Issue To</label>
                        <input type="text" />
                    </div>
                    <div className="formInput">
                        <label>Status</label>
                        <select>
                            <option value="Issued">Issued</option>
                            <option value="Returned">Returned</option>
                        </select>
                    </div>
                    <div className="btn">
                        <button>ISSUE ITEM</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default IssueItem