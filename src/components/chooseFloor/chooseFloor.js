import "./page3.css";
import React from 'react';
// import {SignInScreen, Header} from "../signin.js";

function ChooseFloor(props){
    let [successPage, setSuccessPage] = React.useState(false);
    let[book,setBooking] = React.useState(false);
    let [room, setRoom] = React.useState({room_number : ""})
    let data = {
        hostel_num : props.hNumber.hostel_number,
        room_num : room.room_number
    };

    function selectRoom(e){
        setRoom({...room,  room_number : e.target.innerHTML});
        setBooking(book = true);
    }
    function bookConfirm(){
        localStorage.setItem("user-date", JSON.stringify(data));
        setSuccessPage(successPage = true);
    }

    function SuccessPage(){
        return(
            <div className ="success-msg">
                <h1> Sucess</h1><br/><br/>
                <p>Your room is has been booked successfully</p>
                <ul>
                    Your room details are as follows :
                    <li key = "hostel">Hostel No. : <span className ="value">{props.hNumber.hostel_number}</span></li>
                    <li key ="room">Room No. : <span className ="value">{room.room_number}</span></li>
                </ul>
            </div>
        );
    }

    return(
        <>
        {successPage ? <SuccessPage/> : null}
       
            <div className = "input-header">
                <h1>Choose a Floor</h1>
                <select name ="floors" id ="Floors">
                    <option value="1st Floor" selected>1st Floor</option>
                    <option value="2nd Floor">2nd Floor</option>
                    <option value="3rd Floor">3rd Floor</option>
                </select>
            </div>
            <div className="floor-box">
                <div className="floor"  onClick ={selectRoom}>1</div>
                <div className="floor"  onClick ={selectRoom}>2</div>
                <div className="floor"  onClick ={selectRoom}>3</div>
                <div className="floor"  onClick ={selectRoom}>4</div>
                <div className="floor"  onClick ={selectRoom} id="item1">5</div>
                <div className="floor"  onClick ={selectRoom} id="item2">6</div>
                <div className="floor"  onClick ={selectRoom}>7</div>
                <div className="floor"  onClick ={selectRoom}>8</div>
                <div className="floor"  onClick ={selectRoom}>9</div>
                <div className="floor"  onClick ={selectRoom}>10</div>
            </div>
            {book ? <div className="book" onClick = {bookConfirm}><h2>Book Now</h2></div> : null}
       
        </>
    );
}

export default ChooseFloor