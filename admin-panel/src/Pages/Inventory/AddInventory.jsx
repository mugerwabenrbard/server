import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'

const AddInventory = () => {
  return (
    <div className='addInventory'>
        <Sidebar/>

        <div className="addInventoryContainer">
            <Navbar/>

            <div className="inventoryForm">
                <p className="title">ADD INVENTORY</p>
                <form action="">
                    <div className="formInput">
                        <label>Inventory No</label>
                        <input type="text" />
                    </div>
                    <div className="formInput">
                        <label>Name</label>
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
                        <label>Purchase Date</label>
                        <input type="date" />
                    </div>
                    <div className="formInput">
                        <label>Quantity</label>
                        <input type="number" />
                    </div> 
                    <div className="formInput">
                        <label>Price</label>
                        <input type="number" />
                    </div>
                    <div className="formInput">
                        <label>Details</label>
                        <input type="text" />
                    </div>
                                     
                    <div className="btn">
                        <button>ADD INVENTORY</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddInventory