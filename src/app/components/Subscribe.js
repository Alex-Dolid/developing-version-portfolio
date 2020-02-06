import React from "react";
import Quote from "./Quote";


export default class Subscribe extends React.Component {
    render() {
        let quotes= this.props.quotes.map((quote, index) => {
            return <Quote
                id={quote.id}
                imgPNG={quote.imgPNG}
                imgWEBP={quote.imgWEBP}
                text={quote.text}
                author={quote.author}
                location={quote.location}
                key={index}
            />
        });
        return (
            <section className="subscribe">
                <div className="subscribe-background">
                    <div className="container h-100">
                        <div className="row h-100 d-flex align-items-center align-content-center">
                            {quotes}
                            <div className="col-md col-lg-1 col-xl-1">
                                <div className="separate-strip"/>
                            </div>
                            <div className="col-md-12 col-lg-5 col-xl-5 poster-subscribe-wrapper">
                                <div className="poster-subscribe ">
                                    <h3 className="poster-subscribe__title">Subscribe</h3>
                                    <div className="poster-subscribe__into">FOR OUR NEWSLETTER AND PROMOTION</div>
                                </div>
                                <div className="text-center">
                                    <form action="#" className="subscribe-form">
                                        <input type="email" className="subscribe-form__email" placeholder="Enter Your Email"
                                               required aria-label="Search for Item..." /><input
                                        type="submit" className="subscribe-form__button" value="Subscribe"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}