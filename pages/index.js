import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from 'react'
import login from "./login"

export default function Home() {

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const login = details =>{
    console.log(details);
  }

  const logout = () =>{
    console.log("logout");
  }

  return (
    <div>
      <Head>
        <title>Men of Law Corporate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Logo.png" />
      </Head>

      <main>
      <div className="App">
        {(user.email != "") ? (
          <div className="welcome">
            <h2>Welcome, <span>{user.name}</span></h2>
            <button>Logout</button>
          </div>
        ):(
          <login />
        )}
      </div>
      
      

          {/* <div className="container-fluid position-absolute top-50 start-50 translate-middle w-100 overlay-dark p-5">
            <div className="container">
              <h1 className="heading-1 text-gold">We're here for you</h1>
              <p className="sub-heading-1 text-light">
                Online legal service that provides legal information and advice.
              </p>
              <button className="btn hero-btn dark-bg text-light" type="button">
                Get Started
              </button>
            </div>
          </div> */}
       
      </main>
    </div>
  );
}
