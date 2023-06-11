import React from "react";

const Profile = () => {
  return (
    <form className="container">
      <h3>Profile</h3>
      <hr />
      <div className="row">
        <div className="col-2">
          <div className="form-group">
            <img src="https://i.pravatar.cc?u=2" alt="" style={{ width: "100%" }} />
          </div>
        </div>
        <div className="col-5">
          <div className="form-group">
            <p className="mb-0">Email</p>
            <input className='form-control' id='email' name="email" />
          </div>
          <div className="form-group">
            <p className="mb-0 mt-4">Phone</p>
            <input className='form-control' id='phone' name="phone" />
          </div>
        </div>
        <div className="col-5">
          <div className="form-group">
            <p className="mb-0">Name</p>
            <input className='form-control' id='name' name="name" />
          </div>
          <div className="form-group">
            <p className="mb-0 mt-4">Password</p>
            <input className='form-control' id='password' name="password" />
          </div>
          <div className="row">
          <div className="col-6">
            <div className='form-group mt-2'>
              <p>Gender</p>
              <input className='form-check-input' id="gender1" name='gender' type='radio' />
              <label for="gender1">Male</label>
              <input className='form-check-input' id="gender2" name='gender' type='radio' /> <label for="gender2">Female</label>
            </div>
          </div>
          <div className="col-6">
            <div className='form-group mt-2'>
              <button type='submit' className='btn btn-success'>Update</button>
            </div>
          </div>
          </div>
        </div>
      </div>
      <hr />
    </form>
    
  )


};

export default Profile;
