import React from 'react'
import PropTypes from "prop-types";

const Profile = (props) =>{

        return (
        <center>
        <div style= {{ backgroundColor:"#eeeee4", display: "block",marginTop: "30px" ,width: "40%" , borderWidth: "20px" , borderColor: "#e28743" , border: "solid"}}>
            <img src='./fatma.jpg' alt="no" style={{width: "300px"}}  />
            <h2>{props.fullName}</h2>
            <p>{props.bio}</p>
            <p>{props.age}</p>
            <h3>{props.profession}</h3>
        </div>
        </center>
        )
    }

Profile.defaultProps={
    fullName :"Fatma",
    bio :"Multidiciplinary",
    age :"28",
    profession :"Architect"};

Profile.propTypes ={
     fullName: PropTypes.string ,
     bio: PropTypes.string ,
     age: PropTypes.number ,
     profession : PropTypes.string ,
};   
 
export default Profile
