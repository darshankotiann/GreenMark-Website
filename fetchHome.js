const firebaseConfig = {
	apiKey: "AIzaSyBEdY3S1jBFEeGNTXCtt72D8zKd6G50yWg",
	authDomain: "greenmark-admin.firebaseapp.com",
	projectId: "greenmark-admin",
	storageBucket: "greenmark-admin.appspot.com",
	messagingSenderId: "746283097286",
	appId: "1:746283097286:web:f3b53c0167df1e9c2a4bc7"
};
const app = firebase.initializeApp(firebaseConfig);
const firestore = app.firestore();