import { useState } from "react"

export default function Category(props) {

    const [toggleEdit, setToggleEdit] = useState(false)
    
    function handleEditToggle() {
        setToggleEdit(prev => !prev)
    }

    const ellipsisStyles = {
        transform: toggleEdit ? "rotate(90deg)" : "rotate(0)"
    }

    return (
        <div className="category-container">
            <p className="category-name">{props.name}</p>
            <i 
                onClick={handleEditToggle}
                className="fa-solid fa-ellipsis-vertical category-edit"
                style={ellipsisStyles}
            ></i>
        </div>
    )
}