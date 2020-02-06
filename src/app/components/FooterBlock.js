import React from "react";
import FooterList from "./FooterList";

export default class FooterBlock extends React.Component {
    render() {
        let footerList = this.props.titles.map((item, index) => {
            return <FooterList
                title={item.title}
                url={item.url}
                key={index}
            />
        });
       return (
           <ul className="nav__block">
               <li className="nav__item nav__item_footer-main">{this.props.header}</li>
               {footerList}
           </ul>
       );
    }
}