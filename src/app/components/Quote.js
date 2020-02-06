import React from "react";
import img from "../img/poster-author-quote1.png";

export default class Quote extends React.Component {
    render() {
        return (
            <>
                <div className="col-md-12 col-lg-6 col-xl-6 d-flex justify-content-around align-items-start poster-quotes">
                    <div id="carouselExampleCaptions1" className="carousel slide slide-quote d-flex align-items-center justify-content-center" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions1" data-slide-to="0" className="active"/>
                            <li data-target="#carouselExampleCaptions1" data-slide-to="1"/>
                            <li data-target="#carouselExampleCaptions1" data-slide-to="2"/>
                        </ol>
                        <div className="carousel-inner carousel-inner-quote">
                            <div className="carousel-item carousel-item-quote active">
                                <picture>
                                    <source srcSet={this.props.imgWEBP} type="image/webp"  className="d-block poster-quotes__img"/>
                                    <img src={this.props.imgPNG} className="d-block poster-quotes__img" alt="..."/>
                                </picture>
                                <div className="carousel-caption d-none d-block quote-wrapper">
                                    <div className="quote">{this.props.text}</div>
                                    <div className="quote-caption">
                                        <p className="quote-caption__author">{this.props.author}</p>
                                        <p className="quote-caption__location">{this.props.location}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-quote">
                                <picture>
                                    <source srcSet={this.props.imgWEBP} type="image/webp"  className="d-block poster-quotes__img"/>
                                    <img src={this.props.imgPNG} className="d-block poster-quotes__img" alt="..."/>
                                </picture>
                                <div className="carousel-caption d-none d-block quote-wrapper">
                                    <div className="quote">{this.props.text}</div>
                                    <div className="quote-caption">
                                        <p className="quote-caption__author">{this.props.author}</p>
                                        <p className="quote-caption__location">{this.props.location}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-quote">
                                <picture>
                                    <source srcSet={this.props.imgWEBP} type="image/webp"  className="d-block poster-quotes__img"/>
                                    <img src={this.props.imgPNG} className="d-block poster-quotes__img" alt="..."/>
                                </picture>
                                <div className="carousel-caption d-none d-block quote-wrapper">
                                    <div className="quote">{this.props.text}</div>
                                    <div className="quote-caption">
                                        <p className="quote-caption__author">{this.props.author}</p>
                                        <p className="quote-caption__location">{this.props.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}