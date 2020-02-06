import React from "react";
import DropdownMenuList from "./DropdownMenuList";

export default class DropdownMenuHeaderSearch extends React.Component {
    render() {
        let dropdownMenuList = this.props.titles.map((item, index) => {
            return <DropdownMenuList title={item} key={index} url={this.props.url}/>
        });
        return (
            <>
                <span className="dropdown-item-text">{this.props.header}</span>
                <div className="dropdown-divider"/>
                {dropdownMenuList}
            </>
        );
    }
}