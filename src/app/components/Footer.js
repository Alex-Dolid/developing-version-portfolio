import React from "react";
import Logo from "./Logo";
import FooterBlock from "./FooterBlock";

export default class Footer extends React.Component {
    render() {
        let footerBlock = this.props.footerBlock.map((item, index) => {
            return <FooterBlock
                header={item.header}
                titles={item.titles}
                key={index}
            />
        });
        return (
            <section className="footer">
                <div className="container">
                    <div className="row d-flex align-items-end">
                        <div className="col-lg-5 col-xl-5">
                            <Logo/>
                            <div className="footer__about-us">
                                <p>Objectively transition extensive data rather than cross functional solutions.
                                    Monotonectally
                                    syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate
                                    an
                                    expanded array of processes and cross-unit partnerships.</p>
                                <p>Efficiently plagiarize 24/365 action items and focused infomediaries.
                                    Distinctively seize superior initiatives for wireless technologies. Dynamically
                                    optimize.</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7 col-xl-7">
                            <nav className="footer-nav d-flex">
                                {footerBlock}
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}