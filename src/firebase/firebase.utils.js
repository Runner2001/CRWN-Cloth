import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { collection, doc, getDoc, getFirestore, setDoc, writeBatch } from 'firebase/firestore'

const config = {

    apiKey: "AIzaSyAawT2hsogo_hIQPKXATMOt9rD8ha-vnng",

    authDomain: "shopify-94d2b.firebaseapp.com",

    projectId: "shopify-94d2b",

    storageBucket: "shopify-94d2b.appspot.com",

    messagingSenderId: "462804900112",

    appId: "1:462804900112:web:8bf2dbea119739592c2d95"

};

const app = initializeApp(config);

//initialize
export const auth = getAuth(app);
export const firestore = getFirestore(app);

//UserRef of Firestore
const collectionRef = collection(firestore, 'users');

export const createUserProfileDocument = async (userAuth, additionData) => {
    if (!userAuth) return;

    const userRef = doc(collectionRef, userAuth.uid)
    const snapshot = await getDoc(userRef);
    // console.log(snapshot.exists());

    if (!snapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createAt,
                ...additionData
            })
        }
        catch (error) {
            console.log(error.message);
        }
    }
    return userRef;
}

//Adding Shop data to FireStore 
export const addCollectionAndDoc = async (collectionKey, collectionArray) => {
    const collectionRef = collection(firestore, collectionKey);

    const batch = writeBatch(firestore);
    collectionArray.forEach(obj => {
        const newDocRef = doc(collectionRef);
        //setDoc(newDocRef, obj)
        batch.setDoc(newDocRef, obj)
        // console.log(newDocRef);
    });

    return await batch.commit();
}

// Get Firestore data for redux
export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    // console.log(transformedCollections)
    return transformedCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;

        return accumulator
    }, {})
}


//Authentiation
export const googleProvider = new GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select account' });
googleProvider.setCustomParameters({
    'login_hint': 'user@example.com'
});
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);