import React, { useState } from "react";
import "./SupplierForm.css";

function SupplierForm() {
    const [showForm, setShowForm] = useState(false);
    const showFormHandle = () => {
        setShowForm(!showForm);
    };
    if (!showForm) {
        return (
            <div className="new-supplier">
                <button onClick={showFormHandle}>Add new supplier</button>
            </div>
        );
    } else {
        return (
            <div className="new-supplier">
                <form>
                    <div className="new-supplier__controls">
                        <div className="new-supplier__control">
                            <label>Supplier name</label>
                            <input
                                type="text"
                                name="nameSup"
                                required="required"
                                placeholder="Enter a name"
                            ></input>
                        </div>
                    </div>
                    <div className="new-supplier__controls">
                        <div className="new-supplier__control">
                            <label>Supplier address</label>
                            <input
                                type="text"
                                name="addressSup"
                                required="required"
                                placeholder="Enter a address"
                            ></input>
                        </div>
                    </div>
                    <div className="new-supplier__controls">
                        <div className="new-supplier__control">
                            <label>Supplier bank account</label>
                            <input
                                type="text"
                                name="bankAccount"
                                required="required"
                                placeholder="Enter a bank account"
                            ></input>
                        </div>
                    </div>
                    <div className="new-supplier__controls">
                        <div className="new-supplier__control">
                            <label>Supplier tax code</label>
                            <input
                                type="text"
                                name="taxCode"
                                required="required"
                                placeholder="Enter a tax code"
                            ></input>
                        </div>
                    </div>
                    <button type="submit">Add</button>
                    <button onClick={showFormHandle}>Cancel</button>
                </form>
            </div>
        );
    }
}

export default SupplierForm;
