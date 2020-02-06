import React from "react";
import DropdownMenuList from "./DropdownMenuList";

export default class DropdownMenuNav extends React.Component {
    render() {
        let dropdownMenuNavList = this.props.titles.map((item, index) => {
            return <DropdownMenuList title={item} key={index} url={this.props.url}/>
        });

        return (
            <div className="dropdown-item-wrapper float-left">
                <span className="dropdown-item-text">{this.props.header}</span>
                <div className="dropdown-divider"/>
                {dropdownMenuNavList}
            </div>
        );
    }
}