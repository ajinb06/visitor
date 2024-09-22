import React from 'react'
import Navbar from './Navbar'

const AddVisitor = () => {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">First name</label>
                    <input type="text" className="form-control" placeholder='enter first name' />
                </div>
                <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Last name</label>
                    <input type="text" className="form-control" placeholder='enter last name' />
                </div>
                <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Purpose</label>
                    <input type="text" className="form-control" placeholder='enter purpose for visit' />
                </div>
                <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Whom to meet</label>
                    <select name="select member" id="" className="form-select">
                        <option value="HR manager">Select whom to meet</option>
                        <option value="PRINCIPLE">PRINCIPLE</option>
                        <option value="HOD EEE">HOD EEE</option>
                        <option value="HOD CSE">HOD CSE</option>
                        <option value="HOD CE">HOD CE</option>
                        <option value="HOD MECH">HOD MECH</option>
                        <option value="HOD EC">HOD EC</option>
                        <option value="other">other</option>
                    </select>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success">SUBMIT</button>
                </div>
            </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default AddVisitor
