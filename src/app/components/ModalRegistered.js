import React from "react";


export default class ModalRegistered extends React.Component {
    render() {
        return (
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Sign Up</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="was-validated">
                                <div className="form-row">
                                    <div className="col-md-6 mb-3 custom-control">
                                        <label htmlFor="customControlValidation1">First name</label>
                                        <input type="text" className="form-control" id="customControlValidation1"
                                               placeholder="First name" required pattern="[A-Za-z]{2,}[\s]*"/>
                                            <div className="valid-feedback">Looks good!</div>
                                            <div className="invalid-feedback">Write your First name!</div>
                                    </div>
                                    <div className="col-md-6 mb-3 custom-control">
                                        <label htmlFor="customControlValidation2">Last name</label>
                                        <input type="text" className="form-control " id="customControlValidation2"
                                               placeholder="Last name" required pattern="^[A-Za-z]{2,}[\s]*"/>
                                            <div className="valid-feedback">Looks good!</div>
                                            <div className="invalid-feedback">Write your Last name!</div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-12 mb-3 custom-control">
                                        <label htmlFor="customControlValidation3">Email</label>
                                        <input type="email" className="form-control" id="customControlValidation3"
                                               placeholder="email@example.com" required pattern="^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$"/>
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">Write your email!</div>
                                    </div>
                                    <div className="col-md-12 mb-3 custom-control">
                                        <label htmlFor="customControlValidation4">Password</label>
                                        <input type="password" className="form-control" id="customControlValidation4"
                                               placeholder="Password" required pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}"/>
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">Create 6-characters password which contains upper and lower case letters and numbers</div>
                                    </div>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input form-control "
                                           id="customControlValidation5" required/>
                                        <label className="custom-control-label" htmlFor="customControlValidation5">Agree to terms and conditions</label>
                                        <div className="invalid-feedback">You must agree before submitting.</div>
                                        <div className="valid-feedback">Looks good!</div>
                                </div>

                                <div className="form-row">
                                    <div className="col-md-12">
                                        <button className="button w-100 button_add-to-cart button_sign-in button_animate-modal" type="submit">Sign Up</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}