import React from "react";

export default class BannerBox extends React.Component {
    render() {
        return (
            <div className="col-md-12 col-lg-4 col-xl-4">
                <div className="banner-box d-flex justify-content-center flex-wrap align-items-center align-content-center ">
                    <img src={this.props.img} alt="box-img" className="banner-box__img pb-4"/>
                    <h3 className="banner-box__title pb-4">{this.props.title}</h3>
                    <p className="banner-box__intro">{this.props.intro}</p>
                </div>
            </div>

        );
    }
}