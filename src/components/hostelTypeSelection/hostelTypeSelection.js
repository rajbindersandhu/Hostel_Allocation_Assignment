import "./page1.css";
import React from 'react';
import ChooseHostel from"../chooseHostel/chooseHostel.js";
//import {SignInScreen, Header} from "../signin.js";

function HostelTypeSelection(){

    let [pageChange , setPage] = React.useState(false);
    let [hostelType , setHostelType] = React.useState({type : ""});
    function changePage(e){
        setHostelType({...hostelType, type : e.target.innerHTML});
        setPage(pageChange = true);
    }

    return (
        <>
            {pageChange ? <ChooseHostel/> : 
                <div> 
                    <h1>Choose Your Hostel</h1>
                    <div className = "choice-box">
                        <div className ="girl-box" onClick={changePage}>
                            Girls Hostel
                        </div>
                        <div className="boy-box" onClick={changePage}>
                            Boys Hostel
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default HostelTypeSelection;