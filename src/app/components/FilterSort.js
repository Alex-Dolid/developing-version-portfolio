import React from "react";

export default class FilterSort extends React.Component {
    render() {
        return (
            <div className="sort d-flex align-items-center mt-4 flex-wrap">
                <div className="sort__name d-flex align-items-center ml-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Sort By</div>
                    </div>
                    <button className="button-sort-select">Name<i
                        className="fa fa-caret-down ml-3"/></button>
                </div>
                <div className="sort__name sort__name_last d-flex align-items-center ml-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Show</div>
                    </div>
                    <button className="button-sort-select">09
                        <i className="fa fa-caret-down fa-caret-down_last ml-3"/></button>
                </div>
            </div>
        );
    }


}