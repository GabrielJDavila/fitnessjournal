import { useState } from "react"

export default function NewEx() {
    const [newExFormData, setNewExFormData] = useState({
        name: "",
        category: "",
        type: "",
        weightUnit: ""
    })

    console.log(newExFormData.name)

    function clearForm() {
        setNewExFormData({
            name: "",
            category: "",
            type: "",
            weightUnit: ""
        })
    }

    function handleChange(name, value, stateSetter) {
        stateSetter(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <form className="add-ex-form">
            <label htmlFor="new-ex-name">Name</label>
            <input
                type="text"
                name="name"
                onChange={e => handleChange(e.target.name, e.target.value, setNewExFormData)}
                value={newExFormData.name}
                id="new-ex-name"
                placeholder="exercise name"
                className="new-ex-name"
            />

            <label htmlFor="categories-dropdown">Category</label>
            <select name="categories-dropdown" id="categories-dropdown">
                <option value="legs">Legs</option>
                <option value="back">Back</option>
                <option value="chest">Chest</option>
            </select>

            <label htmlFor="ex-type-dropdown">Type</label>
            <select name="ex-type-dropdown" id="ex-type-dropdown" className="ex-type">
                <option value="weight-reps">weight and reps</option>
                <option value="weight-time">Weight and time</option>
                <option value="weight-distance">Weight and distance</option>
            </select>

            <label htmlFor="weight-unit-dropdown">Weight Unit</label>
            <select name="weight-unit" id="weight-unit-dropdown" className="weight-unit">
                <option value="weight-lbs">lbs</option>
                <option value="weight-kg">kg</option>
            </select>
        </form>
    )
}