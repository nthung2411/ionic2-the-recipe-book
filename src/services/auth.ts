import firebase from 'firebase';
export class AuthService {
    signup(email: string, password: string): firebase.Promise<any> {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }
    signin(email: string, password: string): firebase.Promise<any> {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }
}
