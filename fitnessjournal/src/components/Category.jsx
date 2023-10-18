
export default function Category(props) {
    return (
        <div className="category-container">
            <p className="category-name">{props.name}</p>
            <i className="fa-solid fa-ellipsis-vertical category-nav"></i>
        </div>
    )
}