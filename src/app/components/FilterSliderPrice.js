import React from "react";
import $ from "jquery";

export default class FilterSliderPrice extends React.Component {
    componentDidMount() {
        $(function () {
            $("#slider-range").slider({
                range: true,
                min: 0,
                max: 600,
                values: [52, 500],
                slide: function (event, ui) {
                    $("#amount1").val("$" + ui.values[0]);
                    $("#amount2").val("$" + ui.values[1]);
                }
            });
            $("#amount1").val("$" + $("#slider-range").slider("values", 0));
            $("#amount2").val("$" + $("#slider-range").slider("values", 1));

        });

    }


    render() {
        return (
            <div className="price" onMouseUp={this.props.onMouseUpFilterSliderPrice}>
                <p className="top-filter-block__head">pRICE</p>
                <div id="slider-range" className="mt-4 mb-3" onMouseDown={this.props.onMouseDownFilterSliderPrice} />
                <input type="text" id="amount1" className="amount" readOnly style={{border: 0, color: '#f16d7f',
                    fontWeight: "bold", width: 230}}/>
                <input type="text" id="amount2" className="amount" readOnly style={{border: 0, color:"#f16d7f",
                    fontWeight: "bold", width: 60}}/>
            </div>
        );
    }
}