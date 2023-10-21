import { useState } from "react"

export default function Category(props) {

    const [openConfirmDeleteModal, setOpenConfirmDeleteModal] = useState(false)
    const [openEditModal, setOpenEditModal] = useState(false)
    
    function handleEdit() {
        setToggleEdit(prev => !prev)
    }

    function handleEdit() {
        setOpenEditModal(prev => !prev)
    }

    function handleDelete() {
        setOpenConfirmDeleteModal(prev => !prev)
    }

    return (
        <div className="category-container">
            <p className="category-name">{props.name}</p>
            <div className="category-component-btns">
                <i
                    className="fa-solid fa-pen-to-square category-edit"
                    onClick={handleEdit}
                ></i>
                <i
                    className="fa-solid fa-trash category-delete"
                    onClick={handleDelete}
                ></i>
            </div>
        </div>
    )
}