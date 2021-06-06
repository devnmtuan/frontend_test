import React, {
    useState, useEffect
} from "react";
import "../css/style.css";
import axios from "axios";

function Home() {
 

    useEffect(() => {
        const config ={
            headers:{
                Authorization: 'Bearer '+ localStorage.getItem('token')
            }
        }
        axios.get('user',config).then(res => {
            console.log(res);
        }, err => {
            console.log(err);
        })
    });


    return (
         <h2>You are not login </h2>
    );
}

export default Home;