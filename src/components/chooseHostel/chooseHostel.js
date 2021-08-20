import "./page2.css";
import React from 'react';
import ChooseFloor from "../chooseFloor/chooseFloor.js";
//import {SignInScreen, Header} from "../signin.js";

function ChooseHostel(){
    let [hostel, setHostel] = React.useState({
        hostel_number : ""
    });

    let [pageChange , setPage] = React.useState(false);

    function changePage(e){
        setHostel({...hostel,  hostel_number : e.target.innerHTML});
        setPage(pageChange = true);
    }

    return(

        <>
            {pageChange ? <ChooseFloor hNumber ={hostel}/> :

            <div>
                <h1>Choose a Hostel</h1>
                <div className ="hostel-box">
                    <div className="hostel" onClick = {changePage}>B1</div>
                    <div className="hostel" onClick = {changePage}>B2</div>
                    <div className="hostel" onClick = {changePage}>B3</div>
                    <div className="hostel" onClick = {changePage}>B4</div>
                    <div className="hostel" onClick = {changePage}>B5</div>
                    <div className="hostel" onClick = {changePage}>B6</div>
                </div>
            </div>}
        </>
    );
}

export default ChooseHostel;