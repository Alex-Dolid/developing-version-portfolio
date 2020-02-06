import React from "react";
import BreadcrumbsList from "./BreadcrumbsList";
import {Link} from "react-router-dom";

export default class Breadcrumbs extends React.Component {
    render() {
        let path = this.props.location.pathname.split("/");
        path.splice(0,1);
        let breadcrumbsList = path.map((item, index) => {
            return <BreadcrumbsList title={item} key={index}/>
        });
        return (
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-5 col-xl-3">
                            <h1 className="breadcrumbs__title mb-0">New Arrivals</h1>
                        </div>
                        <div className="col-sm-7 col-md-6 col-lg-5 col-xl-4 ml-auto">
                            <ul className="breadcrumbs__list d-flex mb-0">
                                <li
                                    className="breadcrumbs__item"><Link to="/"
                                                                     className="breadcrumbs__link">Home</Link></li>
                                {breadcrumbsList}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}