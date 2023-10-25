import { useEffect, useState } from "react"
import { categoriesArr, getCategories } from "../firebase"
import { collection } from "firebase/firestore"

export default function NewEx() {
    const [newExFormData, setNewExFormData] = useState({
        name: "",
        category: "",
        scheme: "",
        weightUnit: ""
    })
    const [loadedCategories, setLoadedCategories] = useState([])

    async function loadCategoriesFromFirebase(collection) {
        try {
            const data = await getCategories(collection)
            setLoadedCategories(data)
        } catch(e) {
            console.log("error: ", e)
        }
    }

    // function IterateThroughArr() {
    //     return categoriesArr.map(item => {
    //         return (
                
    //         )
    //     })
    // }

    useEffect(() => {
        loadCategoriesFromFirebase()
    }, [])

    console.log(loadedCategories)

    function clearForm() {
        setNewExFormData({
            name: "",
            category: "",
            scheme: "",
            weightUnit: ""
        })
    }

    function handleChange(name, value, stateSetter) {
        stateSetter(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const categoryOptions = categoriesArr.map(category => {
        return (
            `<option value=${category}>${category}</option`
        )
    })

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
            <select
                name="category"
                onChange={e => handleChange(e.target.name, e.target.value, setNewExFormData)}
                id="categories-dropdown-menu"
                className="categories-dropdown"
            >
                {categoryOptions}
            </select>

            <label htmlFor="ex-type-dropdown">Type</label>
            <select
                name="scheme"
                onChange={e => handleChange(e.target.name, e.target.value, setNewExFormData)}
                id="ex-type-dropdown"
                className="ex-scheme"
            >
                <option value="weight-reps">weight and reps</option>
                <option value="weight-time">Weight and time</option>
                <option value="weight-distance">Weight and distance</option>
            </select>

            <label htmlFor="weight-unit-dropdown">Weight Unit</label>
            <select
                name="weightUnit"
                onChange={e => handleChange(e.target.name, e.target.value, setNewExFormData)}
                id="weight-unit-dropdown"
                className="weight-unit"
            >
                <option value="weight-lbs">lbs</option>
                <option value="weight-kg">kg</option>
            </select>
        </form>
    )
}