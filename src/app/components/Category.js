import React from "react";
import CategoryList from "./CategoryList";


export default class Category extends React.Component {
    render() {
        let categoryList = this.props.categories.map((category, index) => {
            return <CategoryList
                id={category.id}
                title_1={category.title_1}
                title_2={category.title_2}
                url={category.url}
                imgPNG={category.imgPNG}
                imgWEBP={category.imgWEBP}
                key={index}
            />
        });
        return (
            <section className="category">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 d-flex justify-content-start flex-row flex-wrap p-0">
                            {categoryList}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}