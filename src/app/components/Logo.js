import React from "react";
import {configObj as config} from "../data/site";
import {Link} from "react-router-dom";
import $ from "jquery";

export default class Logo extends React.Component {
    componentDidMount() {
        $(".logo").click(
            function () {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        );
    }

    render() {
        let siteName;
        let lastLetterSiteName = config.site.siteName.charAt(config.site.siteName.length - 1);
        for (let i = 0; config.site.siteName.length > i; i++) {
            siteName = config.site.siteName.slice(0, i);
        }

        return (
            <div className="logo d-flex align-items-center">
                <Link to="/" className="logo__text d-flex align-items-center">
                    <img src={config.site.img} alt="logo" className="logo__img"/>&nbsp;
                    <span className="logo__text_first-letter">{siteName}<span
                        className="logo__text_last-letter">{lastLetterSiteName}</span></span></Link>
            </div>
        );
    }
}