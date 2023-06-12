import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { clearStorage, USER_LOGIN } from "../../util/config";

export default function Header() {

  const {userLogin} = useSelector(state=>state.loginReducer);
  const renderLinkLogin =()=>{
    if(userLogin.email !==''){

      return <>
      
        <span style={{cursor:"pointer"}} onClick={()=>{
          clearStorage(USER_LOGIN);
          window.location.reload();
        }}>Logout</span>
      
      </>
    }
    return <NavLink to="/login">Login</NavLink>
  }

  

  return (
    <div>
      <header class="header">
        <div class="container-fluid">
          <div class="header-content d-flex justify-content-between align-items-center">
            <div class="header-logo">
              <NavLink to="/">
                <img src="./img/image 3.png" alt="" />
              </NavLink>
            </div>
            <div class="header-right">
              <ul>
                <li>
                  <NavLink to="/search">
                    <i className="fa fa-search"></i> Search
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cart" className="mx-2">
                    <span className="fs-5 me-2">()</span>
                    <img src="./img/image 8.png" alt="" />
                  </NavLink>
                </li>
                <li>
                  <NavLink>{renderLinkLogin()}</NavLink> 
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
