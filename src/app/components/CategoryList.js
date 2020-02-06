import React from "react";
import {Link} from "react-router-dom";
import $ from "jquery";

export default class CategoryList extends React.Component {
    componentDidMount() {
        $(".category__item").click(
            function () {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        );
    }

    render() {
        let index = this.props.id;
        let classContainer = `category__item category__item_${index}`;
        let classImg = `category__img category__img_${index}`;

        return (
            <div className={classContainer}>
                <Link to={this.props.url}>
                    <div className="category__badge">
                        <p className="category__badge_1">{this.props.title_1}</p>
                        <p className="category__badge_2">{this.props.title_2}</p>
                    </div>
                    <picture>
                        <source srcSet={this.props.imgWEBP} type="image/webp"  className={classImg}/>
                        <img src={this.props.imgPNG} alt="category-layer" className={classImg}/>
                    </picture>
                </Link>
            </div>
        );
    }
}