import Category from "../components/Category"
import { useState } from "react"
export default function AllCategories() {
    const [toggleEditModal, setToggleEditModal] = useState(false)
    const [openConfirmDeleteModal, setOpenConfirmDeleteModal] = useState(false)

    function toggleDelete() {
        setOpenConfirmDeleteModal(prev => !prev)
    }

    function toggleEdit() {
        setToggleEditModal(prev => !prev)
    }

    const modalStyles = {
        position: "absolute",
        right: "50px",
        left: "50px",
        background: "white",
        boxShadow: "0 0 10px 1px black"
    }

    const editModal =
        <div className="edit-modal" style={modalStyles}>
            <h2>Edit Category</h2>
            <p>Cat. Name</p>
            <p onClick={toggleEdit} className="cancel-btn">cancel</p>
            <button className="confirm-btn">save</button>
        </div>
    
    const confirmDeleteModal =
        <div className="confirm-delete-modal" style={modalStyles}>
            <h2>Delete Category</h2>
            <p>Are you sure you want to delete Cat. Name?</p>
            <p onClick={toggleDelete} className="cancel-btn">cancel</p>
            <button className="confirm-btn">delete</button>
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
            {toggleEditModal && editModal}
            {openConfirmDeleteModal && confirmDeleteModal}
            <Category name={"Legs"} toggleEdit={toggleEdit} toggleDelete={toggleDelete}/>
            <Category name={"Back"} toggleEdit={toggleEdit} toggleDelete={toggleDelete}/>
            <Category name={"Chest"} toggleEdit={toggleEdit} toggleDelete={toggleDelete}/>
        </div>
    )
}