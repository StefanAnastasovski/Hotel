import React, {Component} from "react";

import Aux from "../../hoc/Auxilliary";

import Button from '@material-ui/core/Button';


import './Order.css'

import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';

import "react-datepicker/dist/react-datepicker.css";


import reservationMenuImage from '../../images/roomservice-menu.jpg'
import reservationServicesImage from '../../images/services.jpg'

class Order extends Component {
//new Date(year, month, date, hours, minutes, seconds, ms)
    state = {
        orderDate: new Date(),
        time: '10:00',
        showResServices: false,
        showResMenu: false,
        totalPrice: '0 $',
        selectedOption: 'breakfast-menu'
    };

    orderDateHandle = date => {
        this.setState({
            orderDate: date
        });
    };

    showResServices = () => {
        this.setState({
            showResServices: true
        });
    };

    showResMenu = () => {
        this.setState({
            showResMenu: true
        });
    };

    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };

    calculateServicesTotalPriceHandler = (price) => {
        console.log(price.target.checked);
        var targetPrice = price.target;

        if (targetPrice.checked) {

            this.setState(prevState => ({
                totalPrice: (parseInt(prevState.totalPrice) + parseInt(targetPrice.value)).toString() + ' $'
            }));
        } else {
            this.setState(prevState => ({
                totalPrice: (parseInt(prevState.totalPrice) - parseInt(targetPrice.value)).toString() + ' $'
            }));
        }
    };


    render() {

        const styleBorderRadius = {
            borderRadius: '20px ',
        };

        const styleInputField = {
            borderRadius: '10px',
            padding: '5px 3px',
            border: '1px solid grey',

        };

        let showReservationInfo;
        let showReservationDate;
        let reservationTitle = 'Place an Order';
        let showReservationPage;
        let showOrder;
        let additionalRequestText;
        let totalPriceField;
        totalPriceField = (

            <div className="col total-price-services text-center mb-2">

                <label htmlFor="totalpriceservices" className='pr-2'>Total Price:</label>
                <input type="text" disabled name="totalprice"
                       id="totalpriceservices" value={this.state.totalPrice}
                       className="total-price-services-field pl-1 text-center"
                />

            </div>
        );

        additionalRequestText = (
            <p className="text-additional-request-size">
                * You will be charged only for those
                additional requests that we offer.
            </p>
        );

        if (this.state.showResServices) {

            reservationTitle = 'Choose Additional Services';
            showOrder = (
                <Aux>

                    <div className="row justify-content-between px-5 py-3">

                        <div>

                            <input type="checkbox" id="bath-towels"
                                   name="bathtowels" value="25"
                                   onChange={this.calculateServicesTotalPriceHandler}
                            />
                            <label htmlFor="bath-towels" className='pl-2'>Bath Towels</label><br/>

                            <input type="checkbox" id="hand-towels"
                                   name="handtowels" value="35"
                                   onChange={this.calculateServicesTotalPriceHandler}
                            />
                            <label htmlFor="hand-towels" className='pl-2'>Hand Towels</label><br/>

                            <input type="checkbox" id="wash-cloths"
                                   name="washcloths" value="45"
                                   onChange={this.calculateServicesTotalPriceHandler}
                            />
                            <label htmlFor="wash-cloths" className='pl-2'>Wash Cloths</label><br/>

                            <input type="checkbox" id="bath-mats"
                                   name="bathmats" value="55"
                                   onChange={this.calculateServicesTotalPriceHandler}
                            />
                            <label htmlFor="bath-mats" className='pl-2'>Bath Mats</label><br/>

                        </div>

                        <div>

                            <input type="checkbox" id="flat-sheets"
                                   name="flatsheets" value="65"
                                   onChange={this.calculateServicesTotalPriceHandler}
                            />
                            <label htmlFor="flat-sheets" className='pl-2'>Flat Sheets</label><br/>

                            <input type="checkbox" id="fitted-sheets"
                                   name="fittedsheets" value="75"
                                   onChange={this.calculateServicesTotalPriceHandler}
                            />
                            <label htmlFor="fitted-sheets" className='pl-2'>Fitted Sheets</label><br/>

                            <input type="checkbox" id="pillowcases"
                                   name="pillowcases" value="85"
                                   onChange={this.calculateServicesTotalPriceHandler}
                            />
                            <label htmlFor="pillowcases" className='pl-2'>Pillowcases</label><br/>

                            <input type="checkbox" id="roomcleaning"
                                   name="roomcleaning" value="95"
                                   onChange={this.calculateServicesTotalPriceHandler}
                            />
                            <label htmlFor="roomcleaning" className='pl-2'>Room Cleaning</label>

                        </div>


                    </div>

                    <div className="row">

                        <div className="col text-center mb-3">

                            <textarea placeholder="Additional Requests" rows="5"
                                      className="w-75 m-auto"
                                      style={styleInputField}>
                            </textarea>

                            {additionalRequestText}

                        </div>

                    </div>

                    {totalPriceField}

                </Aux>
            );

        } else if (this.state.showResMenu) {

            reservationTitle = 'Order Food & Drinks';
            showOrder = (
                <Aux>

                    <div className="row justify-content-between flex-column px-5 py-3">


                        <div className="row justify-content-between flex-row text-center">

                            <div className="radio">
                                <label>
                                    <input type="radio" value="breakfast-menu"
                                           checked={this.state.selectedOption === 'breakfast-menu'}
                                           onChange={this.handleOptionChange}/>
                                    Breakfast
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="lunch-menu"
                                           checked={this.state.selectedOption === 'lunch-menu'}
                                           onChange={this.handleOptionChange}/>
                                    Lunch
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="dinner-menu"
                                           checked={this.state.selectedOption === 'dinner-menu'}
                                           onChange={this.handleOptionChange}/>
                                    Dinner
                                </label>
                            </div>

                        </div>


                        <div className="col pl-1">

                            <select name="meal-order" className="w-100 meal-order" onClick={this.menuCheckboxHandler}>

                                <option value="meal1">Meal 1</option>
                                <option value="meal2">Meal 2</option>
                                <option value="meal3">Meal 3</option>
                                <option value="meal4">Meal 4</option>
                                <option value="meal5">Meal 5</option>
                                <option value="meal6">Meal 6</option>

                            </select>

                        </div>

                        <div className="col meal-ingredients mt-3">

                            <div className="meal-ingredients-text">

                                <h5 className="text-color-title font-weight-bold">Ingredients:</h5>

                                <p>
                                    Ingredient 1
                                    ingredient 2
                                    ingredient 3
                                </p>

                            </div>

                        </div>


                    </div>

                    <div className="row">

                        <div className="col text-center mb-3">

                            <textarea placeholder="Additional Requests" rows="5"
                                      className="w-75 m-auto"
                                      style={styleInputField}>
                            </textarea>

                            {additionalRequestText}

                        </div>

                    </div>

                    {totalPriceField}

                </Aux>
            );

        } else {

            showReservationPage = (

                <Aux>

                    <div className="text-reservation text-center mt-3">

                        <h1 className="text-color-title">
                            Place an Order
                        </h1>

                        <p className="text-center">
                            If you want to order food or drinks from our menu,
                            or you want to order room service,
                            please click on the appropriate button.
                            <span className="new-line font-weight-bold">
                                Thank you!
                            </span>
                        </p>

                    </div>

                    <div className="d-flex justify-content-between">

                        <div className="col text-center">

                            <div className="reservation-services-gallery ">

                                <img className="res-room-img"
                                     src={reservationServicesImage}
                                     alt="room"
                                     width="100%"
                                     height="100%"
                                />

                            </div>

                            <div className="reservation-button col ">

                                <div className="col text-center">

                                    <Button onClick={this.showResServices}
                                            variant="outlined" color="primary"
                                            className="bg-white-20 font-weight-bold text-20px res-btn">
                                        Services
                                    </Button>

                                </div>

                            </div>

                        </div>

                        <div className="col text-center">

                            <div className="col reservation-button">

                                <Button onClick={this.showResMenu}
                                        variant="outlined" color="primary"
                                        className="bg-white-20 font-weight-bold text-20px res-btn">
                                    Menu
                                </Button>

                            </div>

                            <div className="reservation-menu-gallery">

                                <img className="res-table-img"
                                     src={reservationMenuImage}
                                     alt="table"
                                     width="100%"
                                     height="100%"
                                />

                            </div>

                        </div>

                    </div>

                </Aux>

            );
        }
        if (this.state.showResServices || this.state.showResMenu) {

            showReservationPage = (

                <div className="room container">

                    <div className="row">

                        <div className="col my-3">

                            <h1 className="text-color-title text-center">

                                {reservationTitle}

                            </h1>

                            <div className="col d-flex">

                                <div className="col p-3 border border-info room-res-form" style={styleBorderRadius}>

                                    <form method="POST" action="/home">

                                        <div className="row">

                                            <div className="col d-flex flex-column">

                                                <div className="col d-flex flex-row">

                                                    <div className="col">

                                                        <h4 className='text-center'>What Do You Want To Order?</h4>
                                                        {showOrder}

                                                    </div>

                                                    <div className="col d-flex align-items-center">

                                                        <div className='col'>
                                                            <div className="row">

                                                                <div className="col">

                                                                    <label className="w-100 pr-1">
                                                                        First Name:
                                                                        <input type="text" className="new-line w-100"
                                                                               name="firstname"
                                                                               required style={styleInputField}/>
                                                                    </label>

                                                                </div>

                                                                <div className="col">

                                                                    <label className="w-100 pl-1">
                                                                        Last Name:
                                                                        <input type="text" className="new-line w-100"
                                                                               name="lastname"
                                                                               required style={styleInputField}/>
                                                                    </label>

                                                                </div>

                                                            </div>

                                                            <div className="row">

                                                                <div className="col-4 p-0">

                                                                    <label className="w-100 pr-1">
                                                                        Room Number:
                                                                        <input type="text" className="new-line w-100"
                                                                               name="room-number"
                                                                               required
                                                                               style={styleInputField}/>
                                                                    </label>

                                                                </div>

                                                                <div className="col-8 p-0">

                                                                    <label className="w-100 pl-1">
                                                                        Bill Number:
                                                                        <input type="text" className="new-line w-100"
                                                                               name="bill-number"
                                                                               style={styleInputField}
                                                                               required/>
                                                                    </label>

                                                                </div>

                                                            </div>

                                                            <div className="row">

                                                                <div className="col">

                                                                    <label className="w-100">
                                                                        <span className="new-line">Date:</span>
                                                                        <DatePicker
                                                                            selected={this.state.orderDate}
                                                                            onChange={this.orderDateHandle}
                                                                        />
                                                                    </label>

                                                                </div>

                                                                <div className="col">

                                                                    <label className="w-100">
                                                                        <span className="new-line">Time:</span>
                                                                        <TimePicker
                                                                            className="bg-white"
                                                                            onChange={this.onTimeChange}
                                                                            value={this.state.time}
                                                                        />
                                                                    </label>

                                                                </div>

                                                            </div>

                                                            <div className="row py-2">

                                                                {showReservationInfo}

                                                            </div>

                                                            <div className="col d-flex">

                                                                {showReservationDate}

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="col text-center w-50 m-auto">

                                                    <input type="submit"
                                                           className="w-100 reserve-btn font-weight-bold"
                                                           style={styleInputField}
                                                           value="Order"/>

                                                </div>

                                            </div>

                                        </div>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            );
        }


        // }

        return (

            <div className="reservation row ">

                <div className="col">

                    <div className="container">

                        <div className="row">

                            <div className="col">

                                {showReservationPage}

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        )

    }

}

export default Order;