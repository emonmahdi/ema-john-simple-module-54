import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initialAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initialAuthentication;

/*
steps for authenticaiton
----------------------------
initial setup
--------
step 1:
-------------------
1. Firebase Create account
2. create web app
3. get configuration.
4. initial firebase 
5. Enable auth method.
---------------------------------
step 2
--------
1. Create Login Component 
2. Create Register Component
3. Create Route for Login and Register.
-----------------------------
Step 3:
1. setup sign in method
2. setup sign Out Method
3. user state 
4. special observer.
5. Return necessary methods and state from useFirebase.
------------------------
step 4:
1. create auth context 
2. create auth context provider.
3. use  Auth Provider
4. Create Auth Hook.


*/