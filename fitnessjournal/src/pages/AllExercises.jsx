
export default function AllExercises() {
    return (
        <div className="page-container">
            <form className="search-ex-form">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                    type="search"
                    placeholder="search exercise"
                    className="search-ex-input"
                />
            </form>
            <div className="category-container">
                <p className="category-name">Category</p>
                <i className="fa-solid fa-ellipsis-vertical category-nav"></i>
            </div>
            <div className="category-container">
                <p className="category-name">Category</p>
                <i className="fa-solid fa-ellipsis-vertical category-nav"></i>
            </div>
            <div className="category-container">
                <p className="category-name">Category</p>
                <i className="fa-solid fa-ellipsis-vertical category-nav"></i>
            </div>
        </div>
    )
}