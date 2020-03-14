import React from "react";

import Button from '@material-ui/core/Button';

import './Reservation.css'

import image1 from '../../images/res-1.jpg'
import image2 from '../../images/res-room-1.jpg'


const Reservation = () => {
    return (

        <div className="reservation row ">

            <div className="col">

                <div className="container">

                    <div className="row">

                        <div className="col">

                            <div className="text-reservation text-center mt-5">

                                <h1 className="text-color-title">
                                    Make Reservation
                                </h1>

                                <p className="text-center">
                                    If you want to reserve a room or table,
                                    please click on the appropriate button
                                    <span className="new-line font-weight-bold">
                                        Thank you!
                                    </span>
                                </p>

                            </div>

                            <div className="d-flex justify-content-between">

                                <div className="col text-center">

                                    <div className="reservation-button col">

                                        <div className="reservation-table-gallery">

                                            <img className="res-room-img"
                                                 src={image2}
                                                 alt="room"
                                                 width="100%"
                                                 height="100%"
                                            />

                                            <div className="col text-center">

                                                <Button
                                                    variant="outlined" color="primary"
                                                    className="bg-white-20 font-weight-bold text-20px res-btn">
                                                    Room
                                                </Button>

                                            </div>

                                        </div>


                                    </div>


                                </div>

                                <div className="reservation-button col">


                                    <div className="col text-center">

                                        <Button
                                            variant="outlined" color="primary"
                                            className="bg-white-20 font-weight-bold text-20px res-btn">
                                            Table
                                        </Button>

                                    </div>

                                    <div className="reservation-table-gallery">

                                        <img className="res-table-img"
                                             src={image1}
                                             alt="table"
                                             width="100%"
                                             height="100%"
                                        />


                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>


                </div>

            </div>

        </div>
    )

};

export default Reservation;