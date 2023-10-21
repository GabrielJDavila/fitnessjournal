import Category from "../components/Category"
import { useState } from "react"
export default function AllCategories() {
    
    const editModalStyles = {
        position: "absolute",
        right: "50px",
        left: "50px",
        background: "white",
        boxShadow: "0 0 10px 1px black"
    }

    const editModal =
        <div className="editModal" style={editModalStyles}>
            <h2>Edit Category</h2>
            <p>Cat. Name</p>
            <p>cancel</p>
            <button>save</button>
        </div>

    return (
        <div className="all-ex-page-container">
            <form className="search-ex-form">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                    type="search"
                    placeholder="search exercise"
                    className="search-ex-input"
                />
            </form>
            {editModal}
            <Category name={"Legs"}/>
            <Category name={"Back"}/>
            <Category name={"Chest"}/>
        </div>
    )
}