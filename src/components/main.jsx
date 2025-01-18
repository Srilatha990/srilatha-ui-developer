

import React, { useState } from 'react';
import { FaAward } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbBulb } from "react-icons/tb";

const Layout = () => {


  const [activeTab, setActiveTab] = useState('myLibrary'); // 'myLibrary' by default

  const [activeTabThirdColumn, setActiveTabThirdColumn] = useState('mcqs'); // 'mcqs' by default

  const [sidebarVisible, setSidebarVisible] = useState(false);



  // Sample MCQs data
  const mcqsData = [
    {
      question: "What is the chemical formula of water?",
      options: ["H2O", "CO2", "O2", "NaCl"],
      correctAnswer: "H2O",
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
  ];



  const cardData = [
    {
      type: "MCQs",
      createdBy: "Rahul",
      genre: "Tech",
      createdOn: "07/08/2024 | 1:05 PM",
      imageUrl: "../images/img1.jpg",
      heading: "Energy Transfer",
      line: "Easy | 20 Questions | 60s",
    },
    {
      type: "MCQs",
      createdBy: "Rahul",
      genre: "Tech",
      createdOn: "07/08/2024 | 1:05 PM",
      imageUrl: "../images/img1.jpg",
      heading: "Energy Transfer",
      line: "Easy | 20 Questions | 60s",
    },
    {
      type: "MCQs",
      createdBy: "Rahul",
      genre: "Tech",
      createdOn: "08/08/2024 | 2:15 PM",
      imageUrl: "../images/img1.jpg",
      heading: "Energy Transfer",
      line: "Easy | 20 Questions | 60s",
    },
    {
      type: "MCQs",
      createdBy: "Rahul",
      genre: "Tech",
      createdOn: "09/08/2024 | 3:25 PM",
      imageUrl: "../images/img1.jpg",
      heading: "Energy Transfer",
      line: "Easy | 20 Questions | 60s",
    },
  ];




  const sessionData = [
    {
      sessionName: "Energy Transfer",
      difficulty: "Easy",
      questions: 5,
      timeLimit: "60s",
      genre: "Science",
      hostedOn: "07/08/2024 | 1:05 PM",
    },
    {
      sessionName: "Energy Transfer",
      difficulty: "Easy",
      questions: 5,
      timeLimit: "60s",
      genre: "Science",
      hostedOn: "07/08/2024 | 1:05 PM",
    },
    {
      sessionName: "Energy Transfer",
      difficulty: "Easy",
      questions: 5,
      timeLimit: "60s",
      genre: "Science",
      hostedOn: "07/08/2024 | 1:05 PM",
    },
    {
      sessionName: "Energy Transfer",
      difficulty: "Easy",
      questions: 5,
      timeLimit: "60s",
      genre: "Science",
      hostedOn: "07/08/2024 | 1:05 PM",
    },
  ];


  const leaderboardData = [
    {
      rank: 2,
      profileImageUrl: "../images/boy.png", // Profile Image URL
      medalImageUrl: "../images/silvermedal.png", // Medal Image URL (add this new field)
      name: "Jane Doe",
      email: "pr******@gmail.com",
      coins: 2530,
      marvel: "Marvel",
    },
    {
      rank: 1,
      profileImageUrl: "../images/boy.png", // Profile Image URL
      medalImageUrl: "../images/goldmedal.png", // Medal Image URL (add this new field)
      name: "Jane Doe",
      email: "pr******@****",
      coins: 3454,
      marvel: "Games",
    },
    {
      rank: 3,
      profileImageUrl: "../images/boy.png", // Profile Image URL
      medalImageUrl: "../images/bronze.png", // Medal Image URL (add this new field)
      name: "Jane Doe",
      email: "pr******@****",
      coins: 2950,
      marvel: "Anime",
    },
  ];



  const horizontalLeaderboardData = [
    {
      rank: 4,
      imageUrl: "../images/boy.png", // Replace with actual image URL
      name: "Jane Doe",
      email: "pr******@gmail.com",
      marvel: "Marvel",
      coins: 2245,
    },
    {
      rank: 5,
      imageUrl: "../images/boy.png", // Replace with actual image URL
      name: "Jane Doe",
      email: "pr******@***",
      marvel: "Harry Potter",
      coins: 2105,
    },
    {
      rank: 6,
      imageUrl: "../images/boy.png", // Replace with actual image URL
      name: "Jane Doe",
      email: "pr******@***",
      marvel: "Oscar Movie",
      coins: 1920,
    },
    {
      rank: 7,
      imageUrl: "../images/boy.png", // Replace with actual image URL
      name: "Jane Doe",
      email: "pr******@***",
      marvel: "Marvel",
      coins: 1815,
    },
  ];

  return (
    <div className='main' style={{ backgroundColor: 'black', minHeight: '147vh', color: 'white', height: '100%' }}>

      {/* First Row: Logo and Name */}

      <div className="container">
        <div className="row" style={{ backgroundColor: '#1a1a1a', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="col">
            <h4 className="text-left" style={{ color: 'white' }}>Logo + Name</h4>
          </div>

          {/* Menu Icon for Mobile (right corner) */}
          <div className="col-auto d-block d-md-none">
            <button
              className="btn"
              style={{ backgroundColor: 'transparent', border: 'none', fontSize: '30px', color: 'gray' }}
              onClick={() => setSidebarVisible(true)}  // Open Sidebar
            >
              <i className="bi bi-list"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="container" style={{ minHeight: '147vh', marginTop: '6px' }}>
        <div className="row" style={{ height: '147vh' }}>

          {/* First Column: Sidebar with Dark Background */}
          {/* <div className="col-2" style={{ backgroundColor: '#1a1a1a', padding: '12px', paddingTop: '0px', height: '120vh' }}> */}
          <div
            className={`col-2 ${sidebarVisible ? 'd-block' : 'd-none d-md-block'}`} // Show on medium and large screens, toggle on mobile
            style={{ backgroundColor: '#1a1a1a', padding: '12px', paddingTop: '0px', height: '120vh' }}
          >


            {/* Close Button */}
            <div className="d-flex justify-content-end">
              <button
                className="btn d-block d-md-none" // Show only on mobile devices
                style={{ fontSize: '25px', color: 'white', backgroundColor: 'transparent', border: 'none', margin: '0' }}
                onClick={() => setSidebarVisible(false)} // Close the sidebar
              >
                <i className="bi bi-x-circle"></i>
              </button>
            </div>


            {/* 1. Less Than Symbol and Student Button */}
            <div className="d-flex justify-content-end">
              <span style={{ fontSize: '25px', color: 'gray' }}>«</span>
            </div>
            <div className="mb-2">
              <button className=" w-100" style={{ height: '50px', padding: '0px', backgroundColor: '#5732a8', color: 'white', border: 'none', borderRadius: '28px' }}>
                <h6 className='fs-6 mb-0'>Prasanth</h6>
                <p className='fs-6 mt-0'>Student</p>
              </button>
            </div>

            {/* 2. Create Button */}
            <button className="w-100 mb-2" style={{ height: '30px', padding: '0px', border: '2px solid #5732a8', backgroundColor: '#18123b', color: 'white' }}>
              <p className=' '>+ Create</p>
            </button>

            {/* 3. Box with Content */}
            <div style={{
              backgroundColor: '#333333',
              padding: '6px',
              borderRadius: '8px',
              marginBottom: '8px',
              fontSize: '12px',
              width: '100%', // Ensuring uniform width
            }}>
              {/* 3.1 Library Icon and My Library */}
              <div className="d-flex align-items-center mb-1" style={{ width: '100%' }}>
                <i className="bi bi-book" style={{ color: '#324ea8', marginRight: '13px', fontSize: '18px' }}></i>
                <span style={{ fontSize: '14px' }}>My Library</span>
              </div>

              {/* 3.2 Review Icon and Smart Review */}
              <div className="d-flex justify-content-between align-items-center mb-1" style={{ width: '100%' }}>
                <div className="d-flex align-items-center" style={{ flex: 1 }}>
                  <i className="bi bi-file-earmark-text-fill" style={{ color: '#324ea8', marginRight: '13px', fontSize: '18px' }}></i>
                  <span style={{ fontSize: '14px' }}>Smart Review</span>
                </div>
                <span style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '50%',
                  padding: '5px',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <i className="bi bi-lock" style={{ color: '#fff', fontSize: '12px' }}></i>
                </span>
              </div>

              {/* 3.3 Hosted Icon and Hosted Sessions */}
              <div className="d-flex justify-content-between align-items-center mb-1" style={{ width: '100%' }}>
                <div className="d-flex align-items-center" style={{ flex: 1 }}>
                  <i className="bi bi-pc-display-horizontal" style={{ color: '#324ea8', marginRight: '13px', fontSize: '18px' }}></i>
                  <span style={{ fontSize: '14px' }}>Hosted Sessions</span>
                </div>
                <span style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '50%',
                  padding: '5px',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <i className="bi bi-lock" style={{ color: '#fff', fontSize: '12px' }}></i>
                </span>
              </div>
            </div>

            {/* 4. Button with Bulb Icon */}
            <button className=" w-100 mb-1" style={{ height: '40px', fontSize: '14px', fontWeight: 'bold', backgroundColor: "#18123b", border: 'none', color: '#e6d51e' }}>
              <TbBulb style={{ color: '#edb313', marginRight: '10px', fontSize: '18px', fontWeight: 'bold' }} /> Battle of the Brains
            </button>

            {/* 5. Box with Groups and Marketplace */}
            <div style={{
              backgroundColor: '#333333',
              padding: '6px',
              borderRadius: '8px',
              marginBottom: '8px',
              fontSize: '12px',
              width: '100%', // Ensuring uniform width
            }}>
              {/* 5.1 Groups and Lock Icon */}
              <div className="d-flex justify-content-between align-items-center mb-1" style={{ width: '100%' }}>
                <div className="d-flex align-items-center" style={{ flex: 1 }}>
                  <i className="bi bi-people-fill" style={{ color: '#324ea8', marginRight: '13px', fontSize: '18px' }}></i>
                  <span style={{ fontSize: '14px' }}>Groups</span>
                </div>
                <span style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '50%',
                  padding: '5px',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <i className="bi bi-lock" style={{ color: '#fff', fontSize: '12px' }}></i>
                </span>
              </div>

              {/* 5.2 Marketplace and Lock Icon */}
              <div className="d-flex justify-content-between align-items-center mb-1" style={{ width: '100%' }}>
                <div className="d-flex align-items-center" style={{ flex: 1 }}>
                  <i className="bi bi-shop" style={{ color: '#324ea8', marginRight: '13px', fontSize: '18px' }}></i>
                  <span style={{ fontSize: '14px' }}>Marketplace</span>
                </div>
                <span style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '50%',
                  padding: '5px',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <i className="bi bi-lock" style={{ color: '#fff', fontSize: '12px' }}></i>
                </span>
              </div>
            </div>

            {/* 6. Rewards, Notifications, Profile and Settings */}
            <div style={{
              backgroundColor: '#333333',
              padding: '6px',
              borderRadius: '8px',
              marginBottom: '8px',
              fontSize: '12px',
              width: '100%', // Ensuring uniform width
            }}>
              {/* 6.1 Rewards */}
              <div className="d-flex justify-content-between align-items-center mb-1" style={{ width: '100%' }}>
                <div className="d-flex align-items-center" style={{ flex: 1 }}>
                  <FaAward style={{ color: '#324ea8', marginRight: '13px', fontSize: '18px' }} />
                  <span style={{ fontSize: '14px' }}>Rewards</span>
                </div>
              </div>

              {/* 6.2 Notifications with Lock Icon */}
              <div className="d-flex justify-content-between align-items-center mb-1" style={{ width: '100%' }}>
                <div className="d-flex align-items-center" style={{ flex: 1 }}>
                  <i className="bi bi-bell-fill" style={{ color: '#324ea8', marginRight: '13px', fontSize: '18px' }}></i>
                  <span style={{ fontSize: '14px' }}>Notifications</span>
                </div>
                <span style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '50%',
                  padding: '5px',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <i className="bi bi-lock" style={{ color: '#fff', fontSize: '12px' }}></i>
                </span>
              </div>

              {/* 6.3 Profile */}
              <div className="d-flex justify-content-between align-items-center mb-1" style={{ width: '100%' }}>
                <div className="d-flex align-items-center" style={{ flex: 1 }}>
                  <i className="bi bi-person-fill" style={{ color: '#324ea8', marginRight: '13px', fontSize: '18px' }}></i>
                  <span style={{ fontSize: '14px' }}>Profile</span>
                </div>
              </div>

              {/* 6.4 Settings with Lock Icon */}
              <div className="d-flex justify-content-between align-items-center mb-1" style={{ width: '100%' }}>
                <div className="d-flex align-items-center" style={{ flex: 1 }}>
                  <i className="bi bi-gear-fill" style={{ color: '#324ea8', marginRight: '13px', fontSize: '18px' }}></i>
                  <span style={{ fontSize: '14px' }}>Settings</span>
                </div>
                <span style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '50%',
                  padding: '5px',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <i className="bi bi-lock" style={{ color: '#fff', fontSize: '12px' }}></i>
                </span>
              </div>

              {/* 6.5 How to Use */}
              <div className="d-flex justify-content-between align-items-center mb-1" style={{ width: '100%' }}>
                <div className="d-flex align-items-center" style={{ flex: 1 }}>
                  <i className="bi bi-youtube" style={{ color: '#324ea8', marginRight: '13px', fontSize: '18px' }}></i>
                  <span style={{ fontSize: '14px' }}>How to use</span>
                </div>
              </div>

              {/* 6.6 Support Hub */}
              <div className="d-flex justify-content-between align-items-center mb-1" style={{ width: '100%' }}>
                <div className="d-flex align-items-center" style={{ flex: 1 }}>
                  <MdOutlineSupportAgent style={{ color: '#324ea8', marginRight: '13px', fontSize: '18px' }} />
                  <span style={{ fontSize: '14px' }}>Support Hub</span>
                </div>
              </div>

              {/* 6.7 Logout */}
              <div className="d-flex justify-content-between align-items-center mb-1" style={{ width: '100%' }}>
                <div className="d-flex align-items-center" style={{ flex: 1 }}>
                  <i className="bi bi-box-arrow-right" style={{ color: '#324ea8', marginRight: '13px', fontSize: '18px' }}></i>
                  <span style={{ fontSize: '14px' }}>Logout</span>
                </div>
              </div>
            </div>

            {/* 7. Other Links */}
            <div style={{
              backgroundColor: '#333333',
              padding: '6px',
              borderRadius: '8px',
              marginBottom: '8px',
              fontSize: '12px',
              width: '100%', // Ensuring uniform width
            }}>
              <div className="d-flex justify-content-between align-items-center mb-1" style={{ width: '100%' }}>
                <div className="d-flex align-items-center" style={{ flex: 1 }}>
                  <span style={{ fontSize: '14px' }}>Other Links</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-1" style={{ width: '100%' }}>
                <div className="d-flex align-items-center" style={{ flex: 1 }}>
                  <i className="bi bi-star" style={{ color: '#324ea8', marginRight: '13px', fontSize: '18px' }}></i>
                  <span style={{ fontSize: '14px' }}>At your Service</span>
                </div>
              </div>
            </div>

            {/* 8. Upgrade Button */}
            <button className=" w-100 mb-2" style={{ height: '45px', fontSize: '14px', backgroundColor: '#edb313', color: 'white', border: 'none', borderRadius: '8px' }}>
              <i className="bi bi-arrow-up-circle" style={{ color: '#fff', marginRight: '10px', fontSize: '18px' }}></i> Upgrade
            </button>

            {/* 9. Refer a Friend Button */}
            <button className=" w-100" style={{ height: '60px', fontSize: '14px', backgroundColor: "#46a2d4", border: 'none', color: 'white', borderRadius: '8px' }}>
              <i className="bi bi-gift" style={{ color: '#edb313', marginRight: '10px', fontSize: '18px' }}></i> Refer a Friend & earn more coins →
            </button>
          </div>


          {/* Second Column (Content Area) */}
          <div className="col-md-5 col-sm-12 second-column" style={{ padding: '30px' }}>
            {/* Buttons for Switching between My Library and Hosted Sessions */}
            {/* Rectangular Box for Buttons */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center', // Center the box horizontally
                alignItems: 'center', // Center the box vertically
                width: '100%',
                height: '100%', // Ensure the container takes full height
                maxWidth: '370px',
                borderRadius: '28px',
                backgroundColor: '#333333',
                border: '2px solid #333333',
                height: '60px',
                margin: '0 auto', // Auto margin to center horizontally in the second column
                gap: '15px'
              }}
            >
              <button
                className="btn"
                style={{
                  width: '48%',
                  height: '50px',
                  borderRadius: '30px',
                  backgroundColor: activeTab === 'myLibrary' ? '#edb313' : 'black', // Change background color based on active tab
                  color: 'white', // Adjust text color accordingly
                  fontSize: '15px',
                  fontWeight: 'bold'
                }}
                onClick={() => setActiveTab('myLibrary')} // Set active tab to My Library
              >
                My Library
              </button>
              <button
                className="btn"
                style={{
                  width: '48%',
                  height: '50px',
                  borderRadius: '30px',
                  backgroundColor: activeTab === 'hostedSessions' ? '#edb313' : 'black', // Change background color based on active tab
                  color: 'white', // Adjust text color accordingly
                  fontSize: '15px',
                  fontWeight: 'bold'
                }}
                onClick={() => setActiveTab('hostedSessions')} // Set active tab to Hosted Sessions
              >
                Hosted Sessions
              </button>
            </div>


            {/* Content Rendering Based on Active Tab */}
            <div style={{ marginTop: '30px' }}>
              {activeTab === 'myLibrary' ? (
                <div>
                  {/* Render multiple cards */}
                  {cardData.map((card, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        padding: '8px',
                        border: '1px solid gray',
                        borderRadius: '8px',
                        marginTop: '20px',
                        alignItems: 'center',
                      }}
                    >
                      {/* Image Section */}
                      <div style={{ flex: 1, marginRight: '15px', position: 'relative' }}>
                        <img
                          src={card.imageUrl} // Use unique image URL for each card
                          alt="Placeholder"
                          style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                          }}
                        />
                        {/* Pencil Icon in Bottom Right Corner */}
                        <i
                          className="bi bi-pencil"
                          style={{
                            position: 'absolute',
                            bottom: '-20px', // Adjusted bottom position
                            right: '-10px',
                            fontSize: '13px',
                            color: '#42baff',
                            backgroundColor: '#fff',
                            width: '25px',
                            height: '25px',
                            borderRadius: '50%',
                            padding: '5px',
                          }}
                        />
                      </div>


                      {/* Content Section */}
                      <div style={{ flex: 2, marginRight: '15px' }}>
                        <p style={{ fontSize: '15px', fontWeight: 'bold', color: '#79b89c', marginTop: '0px', marginBottom: '0px' }}>{card.heading}</p>
                        <p style={{ fontSize: '13px', color: 'gray', marginTop: '0px', marginBottom: '0px' }}>{card.line}</p>
                        {/* First Row */}
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <p style={{ fontSize: '14px', margin: 0, color: '#edb826', fontWeight: 'bold' }}>{card.type}</p>
                          <p style={{ fontSize: '12px', margin: 0, color: 'gray', fontWeight: 'bold' }}>Created by: <span style={{ fontWeight: 'normal' }}>{card.createdBy}</span></p>
                          <p style={{ fontSize: '12px', margin: 0, color: 'gray', fontWeight: 'bold' }}>Genre: <span style={{ fontWeight: 'normal' }}>{card.genre}</span></p>
                        </div>

                        {/* Second Row */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0px' }}>
                          <p style={{ fontSize: '12px', margin: 0, color: 'gray', fontWeight: 'bold', marginLeft: '39px' }}>Created on: <span style={{ fontWeight: 'normal' }}>{card.createdOn}</span></p>
                        </div>
                      </div>

                      {/* Buttons Section */}
                      <div style={{ marginLeft: '20px', display: 'flex', flexDirection: 'column' }}>
                        <button
                          className=" mb-2"
                          style={{
                            height: '30px',
                            fontSize: '12px',
                            width: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '5px',
                            backgroundColor: '#333333',
                            borderRadius: '5px',
                            border: "none",
                            marginRight: '0px'

                          }}
                        >
                          <i className="bi bi-trash" style={{ fontSize: '12px', color: '#db564f' }}></i>
                        </button>
                        <button className=" mb-2" style={{ height: '40px', fontSize: '16px', backgroundColor: '#65c7fc', color: 'white', border: 'none', borderRadius: '5px' }}>
                          <i className="bi bi-pencil" style={{ marginRight: '10px' }}></i> Edit
                        </button>
                        <button className="btn btn-success" style={{ height: '40px', fontSize: '16px', backgroundColor: '#65c7fc', color: 'white', border: 'none', borderRadius: '5px' }}>
                          <i className="bi bi-play-circle" style={{ marginRight: '10px' }}></i> Start
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  {/* Hosted Sessions Content */}
                  <div style={{ marginBottom: '20px', marginTop: '60px' }}>
                    {/* Search Bar */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#333', borderRadius: '8px', height: '48px' }}>
                      <button
                        style={{ marginRight: '10px', borderRadius: '8px', fontSize: '12px', backgroundColor: '#c154f7', color: 'white', border: 'none', height: '100%', width: '90px' }}
                      >
                        All Genres <i className="bi bi-caret-up-fill"></i>
                      </button>
                      <input
                        type="text"
                        placeholder="Search your hosted games by Titles or session names..."
                        style={{
                          flex: 1,
                          padding: '10px',
                          borderRadius: '20px',
                          fontSize: '13px',
                          border: 'none',
                          backgroundColor: '#333',
                          color: 'gray'
                        }}
                      />
                      <button style={{ backgroundColor: '#333', border: 'none', color: 'gray', marginRight: '10px' }}>
                        <i className="bi bi-search"></i>
                      </button>
                    </div>
                  </div>

                  {/* Session Boxes */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap', // Ensures the items wrap to the next row
                      justifyContent: 'space-between', // Distribute space between the boxes
                      gap: '8px',
                      marginTop: '60px'
                    }}
                  >
                    {/* Render 2 boxes in each row */}
                    {sessionData.map((session, index) => (
                      <div
                        key={index}
                        className="col-12 col-md-6" // Show 1 box on mobile, 2 boxes on medium and large screens
                        style={{
                          border: '2px solid gray',
                          borderRadius: '8px',
                          padding: '10px 0px',
                          color: 'white',
                        }}
                      >
                        <h5 style={{ fontSize: '15px', marginBottom: '10px', color: '#e3ab10', fontWeight: 'bold' }}>
                          {session.sessionName}
                        </h5>
                        <p style={{ fontSize: '12px', margin: '5px 0', color: '#79b89c' }}>Session Name: {session.sessionName}</p>
                        <p style={{ fontSize: '12px', margin: '5px 0', color: 'gray' }}>
                          {session.difficulty} | {session.questions} Questions | {session.timeLimit}
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <div>
                            <p style={{ fontSize: '14px', margin: '5px 0', fontWeight: 'bold', color: '#2878b5' }}>MCQs</p>
                            <p style={{ fontSize: '12px', margin: '5px 0', color: 'gray' }}>Genre: {session.genre}</p>
                            <p style={{ fontSize: '12px', margin: '5px 0', color: 'gray', width: '48%' }}>Hostedon: {session.hostedOn}</p>
                          </div>
                          <div>
                            {/* Remove margin-right on mobile, and keep for medium and larger screens */}
                            <button
                              className="w-100 w-md-auto"
                              style={{
                                marginBottom: '10px',
                                backgroundColor: '#1b8de3',
                                border: 'none',
                                borderRadius: '5px',
                                color: 'white',
                                fontSize: '12px',
                                height: '30px',
                              }}
                            >
                              Host Game
                            </button>
                            <button
                              className="w-100 w-md-auto mr-0 mr-md-3 ml-md-3" // Apply margin-right only on medium and larger screens
                              style={{
                                // marginLeft: '20px',
                                backgroundColor: '#c154f7',
                                border: 'none',
                                borderRadius: '5px',
                                color: 'white',
                                fontSize: '12px',
                                height: '30px',
                              }}
                            >
                              Leaderboard
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}



                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Third Column (MCQs and Leaderboard) */}
          <div className="col-md-5 col-sm-12" style={{ padding: '30px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center', // Center the box horizontally
                alignItems: 'center', // Center the box vertically
                width: '100%',
                height: '100%', // Ensure the container takes full height
                maxWidth: '320px',
                borderRadius: '28px',
                backgroundColor: '#333333',
                border: '2px solid #333333',
                height: '60px',
                margin: '0 auto', // Auto margin to center horizontally in the column
                gap: '15px'
              }}
            >
              <button
                style={{
                  width: '48%',
                  height: '50px',
                  borderRadius: '30px',
                  backgroundColor: activeTabThirdColumn === 'mcqs' ? '#edb313' : 'black', // Conditionally change background color
                  border: 'none',
                  color: 'white', // Change text color for active state
                  fontSize: '15px',
                  fontWeight: 'bold'
                }}
                onClick={() => setActiveTabThirdColumn('mcqs')} // Set active tab to MCQs
              >
                MCQ's
              </button>
              <button
                style={{
                  width: '48%',
                  height: '50px',
                  borderRadius: '30px',
                  backgroundColor: activeTabThirdColumn === 'leaderboard' ? '#edb313' : 'black', // Conditionally change background color
                  border: 'none',
                  color: 'white', // Change text color for active state
                  fontSize: '15px',
                  fontWeight: 'bold'
                }}
                onClick={() => setActiveTabThirdColumn('leaderboard')} // Set active tab to Leaderboard
              >
                Leaderboard
              </button>
            </div>


            {/* Content Rendering Based on Active Tab for Third Column */}
            <div style={{ marginTop: '30px' }}>
              {activeTabThirdColumn === 'mcqs' && (
                <div>
                  {/* First Row - Styled as a search bar */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '8px',
                      backgroundColor: '#333333',
                      borderRadius: '30px',
                      color: '#fff'
                    }}
                  >
                    <div style={{ fontSize: '14px', color: 'gray' }}>1/100</div>
                    <div
                      style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: 'gray',
                        flex: 1,
                        textAlign: 'center',
                      }}
                    >
                      Harry Potter
                    </div>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        // backgroundColor: '#4CAF50',
                        color: '#fff',
                        border: '',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: '2px solid green',
                      }}
                    >
                      60
                    </div>
                  </div>

                  {/* Second Row - Adjusted font size, family, and style */}
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '20px',
                      fontSize: '25px', // Increased font size
                      fontFamily: 'Arial, sans-serif', // Changed font family
                      fontWeight: 'normal', // Set normal font weight
                      color: '#fff',
                      marginTop: '15px',
                    }}
                  >
                    Who directed 'Harry Potter and the Philosophers Stone'?
                  </div>

                  {/* Third Row - Adjusted height for rectangular boxes */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '15px',
                    }}
                  >
                    <div
                      style={{
                        background: 'linear-gradient(to bottom, #9e5ac9, #8137b3)',
                        padding: '30px', // Increased height of the boxes
                        borderRadius: '8px',
                        width: '48%',
                        height: '180px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        fontSize: '18px', // Increased font size
                        fontWeight: 'bold',
                        letterSpacing: '0.2px'
                      }}
                    >
                      Chris Columbus
                    </div>
                    <div
                      style={{
                        background: 'linear-gradient(to bottom, #ff9c7d, #fa734d)', // Light orange (#ff9c7d) to dark orange (#fa734d)
                        padding: '30px', // Increased height of the boxes
                        borderRadius: '8px',
                        width: '48%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '180px',
                        textAlign: 'center',
                        fontSize: '18px', // Increased font size
                        letterSpacing: '0.2px',
                        fontWeight: 'bold',
                      }}
                    >
                      Steven Spielberg
                    </div>
                  </div>

                  {/* Fourth Row - Two boxes side by side with images and names */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '15px',
                    }}
                  >
                    <div
                      style={{
                        width: '48%',
                        height: '190px',
                        textAlign: 'center',
                        borderRadius: '8px',
                        padding: '15px',
                        background: 'linear-gradient(to bottom, #A7F0E7, #3ec7b5)', // Light green (#A7F0E7) to dark green (#3ec7b5)
                      }}
                    >
                      <img
                        src={'../images/peter.jpg'}
                        alt="Chris"
                        style={{ width: '100%', borderRadius: '8px', height: '120px', border: '2px solid white' }}
                      />
                      <p style={{ fontSize: '18px', fontWeight: 'bold', letterSpacing: '0.2px' }}>Peter Jackson</p>
                    </div>
                    <div
                      style={{
                        width: '48%',
                        height: '190px',
                        textAlign: 'center',
                        borderRadius: '8px',
                        padding: '15px',
                        background: 'linear-gradient(to bottom, #8ac7f3, #127fde)', // Light blue (#8ac7f3) to dark blue (#127fde)
                      }}
                    >
                      <img
                        src={'../images/vtim.jpg'}
                        alt="Spielberg"
                        style={{ width: '100%', borderRadius: '8px', height: '120px', border: '2px solid white' }}
                      />
                      <p style={{ fontSize: '18px', fontWeight: 'bold', letterSpacing: '0.2px' }}>Vtim Burton</p>
                    </div>
                  </div>
                  {/* Fifth Row - Buttons (Exit with logout icon on the left and Submit on the right) */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '10px',
                    }}
                  >
                    {/* Exit Button with Logout Icon */}
                    <button
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#FF4D4D',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '30px',
                        padding: '8px 20px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold',
                      }}
                    >
                      <i className="bi bi-box-arrow-right" style={{ marginRight: '8px' }}></i> Exit
                    </button>

                    {/* Submit Button */}
                    <button
                      style={{
                        background: 'linear-gradient(to bottom, #A7F0E7, #3ec7b5)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '10px 20px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold',
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}


              {activeTabThirdColumn === 'leaderboard' && (
                <div className='leader'>
                  {/* Leaderboard Content */}
                  <div style={{ textAlign: 'center', marginBottom: '30px', marginTop: '30px' }}>
                    <img
                      src="../images/leaderboard.png" // Replace with actual image URL
                      alt="Leaderboard Image"
                      style={{ width: '150px', height: '150px', borderRadius: '8px' }}
                    />
                  </div>
                  {/* Second Row - 3 Cards Side by Side */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '20px',
                    }}
                  >
                    {leaderboardData.map((item, index) => {
                      // Set scale based on the rank
                      let scaleValue = 1; // Default scale (100%)

                      // Apply scale based on rank
                      if (item.rank === 1) {
                        scaleValue = 1.2; // Top 1 (Rank 1) should be zoomed in more (120%)
                      } else if (item.rank === 2) {
                        scaleValue = 1; // Top 2 (Rank 2) should be zoomed out a bit (90%)
                      } else if (item.rank === 3) {
                        scaleValue = 0.9; // Top 3 (Rank 3) should have no zoom (normal size)
                      }

                      return (
                        <div
                          key={index}
                          style={{
                            width: '30%',
                            border: '2px solid gray',
                            backgroundColor: '#333333',
                            borderRadius: '8px',
                            padding: '10px',
                            textAlign: 'center',
                            position: 'relative', // Important for positioning the medal image
                            transform: `scale(${scaleValue})`, // Apply scale here
                            transition: 'transform 0.3s ease-in-out', // Smooth transition for zoom effect
                          }}
                        >
                          {/* Medal Image - Top Left Corner */}
                          <img
                            src={item.medalImageUrl} // Replace with the actual medal image URL
                            alt="Medal"
                            style={{
                              position: 'absolute',
                              top: '10px',
                              left: '10px',
                              width: '40px',
                              height: '40px',
                            }}
                          />

                          {/* Rank Display */}
                          <div style={{ fontSize: '18px', marginTop: '0', textAlign: 'center' }}>
                            #{item.rank}
                          </div>

                          {/* Profile Image in the Center */}
                          <img
                            src={item.profileImageUrl}
                            alt="Profile"
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              marginTop: '10px',
                              marginBottom: '10px',
                            }}
                          />

                          <div style={{ fontSize: '13px' }}>{item.name}</div>
                          <div style={{ fontSize: '14px' }}>{item.email}</div>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ fontSize: '13px', marginTop: '10px' }}>{item.marvel}</div>
                            <div style={{ fontSize: '13px', marginTop: '10px' }}>
                              <img
                                src="../images/gold.png" // Replace with coins image URL
                                alt="Coins"
                                style={{ width: '20px', height: '20px' }}
                              />
                              {item.coins}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>


                  {/* Horizontal Row with Headings (before horizontal cards) */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                    <div></div> {/* Empty div to take up space on the left */}

                    {/* Right-aligned Headings */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '70px', padding: '5px' }}>
                      <h6 style={{ fontSize: '15px', color: '#fff', margin: '0', fontWeight: 'bold', color: '#1dad7b' }}>Theme</h6>
                      <h6 style={{ fontSize: '15px', color: '#fff', margin: '0', fontWeight: 'bold', color: '#1dad7b' }}>Coins</h6>
                    </div>
                  </div>

                  {/* Third Row - 4 Horizontal Cards Below One Another */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    {horizontalLeaderboardData.map((item, index) => (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          border: '2px solid gray',
                          padding: '2px',
                          borderRadius: '8px',
                          backgroundColor: '#333333',
                        }}
                      >
                        <div style={{ width: '50px' }}>#{item.rank}</div>
                        <div
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            border: '2px solid gray',
                            margin: '0 10px',
                          }}
                        >
                          <img
                            src={item.imageUrl}
                            alt="Profile"
                            style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: '50%',
                            }}
                          />
                        </div>
                        <div style={{ flex: 1, fontSize: '14px', fontWeight: 'bold' }}>
                          {item.name} <p style={{ fontWeight: 'normal' }}>{item.email}</p>
                        </div>
                        {/* <div>{item.email}</div> */}
                        <div style={{ marginRight: '30px' }}>{item.marvel}</div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <img
                            src="../images/gold.png" // Replace with coins image URL
                            alt="Coins"
                            style={{ width: '20px', height: '20px', marginRight: '5px' }}
                          />
                          {item.coins}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              )}


            </div>
          </div>


        </div>
      </div>
    </div >
  );
};

export default Layout;

