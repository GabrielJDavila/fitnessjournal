import { NavLink, Link } from "react-router-dom"

export default function Dashboard() {
    return (
        <main className="dashboard">
            <div className="start-new-workout-container">
                <Link to="AllExercises" className="link-portal">
                    <i className="fa-solid fa-plus nav-item"></i>
                    <p className="link-text">Start New Workout</p>
                </Link>
            </div>
        </main>
    )
}