import React from "react";
import SideBarList from "./SideBarList";

export default class SideBar extends React.Component {
    render() {
        let path = this.props.location.pathname.split("/");
        path.splice(0,1);
        let sideBarList = this.props.titles.map((item, index) => {
            return <SideBarList title={item} key={index} url={path[0]}/>
        });
        let classActiveSideBarBlock;
        if(this.props.id === 1) {
            classActiveSideBarBlock = "fa fa-caret-up fa-caret-up_red";
        } else {
            classActiveSideBarBlock = "fa fa-caret-down";
        }
        return (
            <>
                <div className="sidebar-head-container d-flex align-items-center justify-content-between" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <p className="sidebar-head-container__title mb-0 ml-3" >{this.props.header}</p>
                    <i className={classActiveSideBarBlock}/>
                </div>
                <div className="sidebar-main-container mt-4" >
                    <ul className="sidebar-nav collapse show" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample">
                        {sideBarList}
                    </ul>
                </div>
            </>
        );
    }
}