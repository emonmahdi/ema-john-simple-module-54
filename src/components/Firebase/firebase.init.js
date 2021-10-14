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
step 2: setup component
--------
1. Create Login Component 
2. Create Register Component
3. Create Route for Login and Register.
-----------------------------
Step 3:set auth system
1. setup sign in method
2. setup sign Out Method
3. user state 
4. special observer.
5. Return necessary methods and state from useFirebase.
------------------------
step 4: create auth context hook(useAuth)
1. create auth context 
2. create auth context provider.
3. set context provider context value
3. use  Auth Provider
4. Create Auth Hook.
-------------------------
step 5:create Private Route 
1. create private route
2. set private route.

--------------------------
step 6: Redirect after login 
1. after login redirect user to their desire destination
*/