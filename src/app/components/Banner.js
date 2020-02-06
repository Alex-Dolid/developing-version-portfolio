import React from "react";
import BannerBox from "./BannerBox";

class Banner extends React.Component {
    render() {
        let bannerBoxes = this.props.bannerBoxesInfo.map((bannerBox, index) => {
            return <BannerBox
                id={bannerBox.id}
                title={bannerBox.title}
                intro={bannerBox.intro}
                img={bannerBox.img}
                key={index}
            />
        });
        return (
            <section className="banner">
                <div className="container ">
                    <div className="row">
                        {bannerBoxes}
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;