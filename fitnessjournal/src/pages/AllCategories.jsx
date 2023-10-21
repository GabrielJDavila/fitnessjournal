import Category from "../components/Category"
import { useState } from "react"
export default function AllCategories() {
    
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
            <Category name={"Legs"}/>
            <Category name={"Back"}/>
            <Category name={"Chest"}/>
        </div>
    )
}