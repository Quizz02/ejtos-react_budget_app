import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Dropdown = () => {
    let updatedCurrency = '';
    const {currency, dispatch} = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        updatedCurrency = event.target.value;
        setNewCurrency(updatedCurrency);
        dispatch({ type: 'CHG_CURRENCY', payload: updatedCurrency });
    }


    return (
        <>
            <div class="dropdown">
                <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Currency ({newCurrency})
                </button>
                <ul class="dropdown-menu">
                    <li><button class="dropdown-item" value={"$"} onClick={handleCurrencyChange}>$ Dollar</button></li>
                    <li><button class="dropdown-item" value={"£"} onClick={handleCurrencyChange}>£ Pound</button></li>
                    <li><button class="dropdown-item" value={"€"} onClick={handleCurrencyChange}>€ Euro</button></li>
                    <li><button class="dropdown-item" value={"₹"} onClick={handleCurrencyChange}>₹ Ruppee</button></li>
                </ul>
            </div>
        </>
    )
}

export default Dropdown;