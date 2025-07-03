import React from 'react'
import './Add_new.css'

const Add_new = () => {
    const prodAdd=(e)=>{
        e.preventDefault;
        alert('Product Added Successfully')
    }
  return (
    <div className='main-con'>
        <h1>Add New Product</h1>
        <form onSubmit={prodAdd}>
            <div className="form-new">
                <label htmlFor=""className=''>Name</label>
                <input type="text" required/>
            </div>
            <div className="form-new">
                <label htmlFor=""className=''>Code</label>
                <input type="text" required/>
            </div>
            <div className="form-new">
                <label htmlFor=""className=''>Brand</label>
                <input type="text" required/>
            </div>
            <div className="form-new">
                <label htmlFor=""className=''>Price</label>
                <input type="text" required/>
            </div>
            <div className="form-new">
                <label htmlFor=""className=''>Product Unit</label>
                <input type="text" required/>
            </div>
            <div className="form-new">
                <label htmlFor=""className=''>Created On</label>
                <input type="date" required/>
            </div>
            <button type="submit">Submit</button>
        </form>
      
    </div>
  )
}

export default Add_new
