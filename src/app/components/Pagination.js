import React from "react";
import {Link} from "react-router-dom";

export default class Pagination extends React.Component {
    render() {
        return (
            <nav aria-label="..." className="d-flex align-items-center">
                <ul className="pagination m-0">
                    <li className="page-item disabled">
                        <Link className="page-link" to={this.props.location.pathname} tabIndex="-1"
                           aria-disabled="true"><i className="fa fa-chevron-left"/></Link>
                    </li>
                    <li className="page-item active"><Link className="page-link button_animate-products" to={this.props.location.pathname} >1</Link></li>
                    <li className="page-item disabled" aria-current="page"><Link className="page-link button_animate-products" to={this.props.location.pathname}>2</Link></li>
                    <li className="page-item disabled"><Link className="page-link button_animate-products" to={this.props.location.pathname}>3</Link></li>
                    <li className="page-item disabled">
                        <Link className="page-link" to={this.props.location.pathname}><i
                            className="fa fa-chevron-right"/></Link>
                    </li>
                </ul>
            </nav>
        );
    }
}