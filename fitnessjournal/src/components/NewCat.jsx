
export default function NewCat() {
    return (
        <form className="new-cat-container">
            <h3 className="new-cat-title">New Category</h3>
            <input
                type="text"
                className="new-cat"
            />
            <div className="new-cat-btns-container">
                <p className="cancel-btn">cancel</p>
                <button className="confirm-btn">save</button>
            </div>
        </form>
    )
}