// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, getDoc, addDoc, doc, query } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARBud_Cbnf3MIwdyIWBWWCT8YATfc7qCI",
  authDomain: "fitness-journal-b27da.firebaseapp.com",
  projectId: "fitness-journal-b27da",
  storageBucket: "fitness-journal-b27da.appspot.com",
  messagingSenderId: "719571269462",
  appId: "1:719571269462:web:ee41e29e30507afe7848f7"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Initialize category references
export const quads = collection(db, "quads")
export const hamstrings = collection(db, "hamstrings")
export const glutes = collection(db, "glutes")
export const calves = collection(db, "calves")
export const chest = collection(db, "chest")
export const back = collection(db, "back")
export const shoulders = collection(db, "shoulders")
export const biceps = collection(db, "biceps")
export const triceps = collection(db, "triceps")
export const abs = collection(db, "abs")
export const cardio = collection(db, "cardio")

export const categoriesArr = [
    quads,
    hamstrings,
    glutes,
    calves,
    chest,
    back,
    shoulders,
    biceps,
    triceps,
    abs,
    cardio
]

// add new exercise to category
export async function addToCategory(name, category, type, weightUnit, collectionName) {
    try {
        const docRef = await addDoc(collectionName, {
            name: name,
            category: category,
            type: type,
            weightUnit: weightUnit
        })
    } catch(e) {
        console.log("error adding doc: ", e)
    }
}

// retrieve categories from firestore
export async function getCategories(collectionName) {
    const q = query(collectionName)
    const snapshot = await getDocs(q)
    const collections = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return collections
}