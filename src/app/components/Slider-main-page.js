import React from "react";
import imgPNG from "../img/slider-layer.png";
import imgWEBP from "../img/slider-layer.webp"

export default class SliderMainPage extends React.Component {
    render() {
        return (
            <section className=" d-flex align-items-center carousel slide slide-slider" id="carouselExampleCaptions" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active" />
                    <li data-target="#carouselExampleCaptions" data-slide-to="1" />
                    <li data-target="#carouselExampleCaptions" data-slide-to="2" />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <picture>
                            <source srcSet={imgWEBP} type="image/webp"  className="d-block w-100"/>
                            <img src={imgPNG} className="d-block w-100" alt="..."/>
                        </picture>
                        <div className="carousel-caption carousel-caption-slider d-none d-block">
                            <div className="slider__rectangle float-left"/>
                            <h1 className="slider__title overflow-hidden">THE BRAND<span className="slider__title_first-line">OF LUXURIOUS</span><span className="slider__title_last-line">FASHION</span>
                            </h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <picture>
                            <source srcSet={imgWEBP} type="image/webp"  className="d-block w-100"/>
                            <img src={imgPNG} className="d-block w-100" alt="..."/>
                        </picture>
                        <div className="carousel-caption carousel-caption-slider d-none d-block">
                            <div className="slider__rectangle float-left"/>
                            <h1 className="slider__title overflow-hidden">
                                THE BRAND
                                <span className="slider__title_first-line">OF LUXURIOUS</span>
                                <span className="slider__title_last-line">FASHION</span>
                            </h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <picture>
                            <source srcSet={imgWEBP} type="image/webp"  className="d-block w-100"/>
                            <img src={imgPNG} className="d-block w-100" alt="..."/>
                        </picture>
                        <div className="carousel-caption carousel-caption-slider d-none d-block">
                            <div className="slider__rectangle float-left"/>
                            <h1 className="slider__title overflow-hidden">
                                THE BRAND
                                <span className="slider__title_first-line">OF LUXURIOUS</span>
                                <span className="slider__title_last-line">FASHION</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="sr-only">Next</span>
                </a>
            </section>
        );
    }
}