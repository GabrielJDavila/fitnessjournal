// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, getDoc, addDoc, setDoc, doc, query } from "firebase/firestore"
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

// Initialize firestore references
export const categoriesCollection = collection(db, "categories")
// export const quads = doc(categoriesCollection, "quads")
// export const hamstrings = doc(categoriesCollection, "hamstrings")
// export const glutes = doc(categoriesCollection, "glutes")
// export const calves = doc(categoriesCollection, "calves")
// export const chest = doc(categoriesCollection, "chest")
// export const back = doc(categoriesCollection, "back")
// export const shoulders = doc(categoriesCollection, "shoulders")
// export const biceps = doc(categoriesCollection, "biceps")
// export const triceps = doc(categoriesCollection, "triceps")
// export const abs = doc(categoriesCollection, "abs")
// export const cardio = doc(categoriesCollection, "cardio")

// add new category subcollection
export async function addNewCategory(category, collectionType) {
    const capitalizedCat = category.charAt(0).toUpperCase() + category.slice(1)
    try {
        await addDoc(collectionType, {
            name: capitalizedCat
        })
    } catch(e) {
        console.log("error adding doc: ", e)
    }
}

// add new exercise to category
export async function addToCategory(name, scheme, weightUnit, collectionType, categoryId) {
    try {
        const categoryDocRef = doc(collectionType, categoryId)
        const exercisesCollectionRef = collection(categoryDocRef, "exercises")
        await addDoc(exercisesCollectionRef, {
            name: name,
            scheme: scheme,
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