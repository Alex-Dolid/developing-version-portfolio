import React from "react";
import {Link} from "react-router-dom";

export default class FooterCopyright extends React.Component {
    render() {
        let date = new Date();
        let todayYear = date.getFullYear();
        return (
            <footer className="footer-copyright d-flex align-items-center">
                <div className="container copyright">
                    <div className="row d-flex justify-content-between">
                        <div className="col-2 col-sm-2 col-md-4 col-lg-4 col-xl-3 h-25">
                            <div className="copyright__text">
                                &copy; {todayYear} Brand All Rights Reserved.
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 social-icons-wrapper">
                            <a href="https://www.facebook.com" className="copyright__social-icons" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook"><i className="fab fa-facebook-f"/></a>
                            <a href="https://twitter.com/?lang=uk" className="copyright__social-icons" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter"><i className="fab fa-twitter"/></a>
                            <a href="https://www.linkedin.com" className="copyright__social-icons" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Linked-in"><i
                                className="fab fa-linkedin-in"/></a>
                            <a href="https://www.pinterest.com" className="copyright__social-icons" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Pinterest"><i className="fab fa-pinterest-p"/></a>
                            <Link to="/" className="copyright__social-icons copyright__social-icons_disabled" aria-label="You can’t pass to us on Google Plus. We are no longer there."><i className="fab fa-google-plus-g"/></Link>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}