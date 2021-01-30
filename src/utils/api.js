import { firebaseConfig } from "../config";
import firebase from "firebase";
require("firebase/auth");

const USER_ID = "userId";
const ID = "id";

let db;

/**
 * Connect Firebase
 * @function _connectFirebase
 * @exports db
 */
export function _connectFirebase() {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  if (!db) {
    db = firebase.firestore();
    // db.settings({ timestampsInSnapshots: true });
  }
}
_connectFirebase();

/**
 * Authentication control
 * @function checkAuthentication
 * @returns {Promise} the number provided by the user id or false.
 */
export function checkAuthentication() {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(async function (user) {
      if (user) {
        const { docs } = await db.collection(firebaseConfig.collectionNames.users).where(ID, "==", user.uid).get();
        if (docs[0] && docs[0].data()) {
          const data = { userId: docs[0].data().id, ...docs[0].data() };
          delete data.id;
          return resolve(data);
        }
        return reject(false);
      }
      return reject(false);
    });
  });
}

/**
 * User create
 * @async
 * @function _createUser
 * @param {string} userName - The username, in text format.
 * @param {string} firstName - The first name, in text format.
 * @param {string} lastName - The last name, in text format. This is optional.
 * @param {number} id - The user id, in int format.
 * @returns {Object} Returns an user info.
 */
async function _createUser(userName, firstName, lastName = "", id) {
  return db.collection(firebaseConfig.collectionNames.users).add({
    id,
    userName,
    firstName,
    lastName,
  });
}

/**
 * Anonymous sign in
 * @async
 * @function signInAnonymous
 * @param {Object} userData object of the userName, firstName, and lastName values
 * @returns {Promise}  Promise object represents the userId and userName
 */
export async function signInAnonymous(userData) {
  if (userData) {
    const { userName, firstName, lastName = "" } = userData;
    const {
      user: { uid },
    } = await firebase.auth().signInAnonymously();
    // await _createUser("mksglu", "Mert", "lastName", uid);
    await _createUser(userName, firstName, lastName, uid);

    return Promise.resolve({ userId: uid, userName, firstName, lastName });
  }
  return Promise.reject();
}

/**
 * Todo data list
 * @async
 * @function getTodos
 * @returns {Object} Returns a login user's docs.
 */
export async function getTodos() {
  const currentUserId = firebase.auth().currentUser.uid;
  const { docs } = await db.collection(firebaseConfig.collectionNames.todos).where(USER_ID, "==", currentUserId).get();
  return docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
}

/**
 * Todo create
 * @async
 * @function createTodo
 * @param {number} userId - The user id, in int format.
 * @param {Object} newTodo - The new todo data.
 * @returns {Object} db
 */
export async function createTodo(userId, newTodo) {
  return db.collection(firebaseConfig.collectionNames.todos).add({ todo: newTodo, userId });
}

/**
 * Todo edit
 * @async
 * @function editTodo
 * @param {number} todoId - The todo id, in int format.
 * @param {Object} newTodo - The edit todo data.
 * @returns {Object} db
 */
export async function editTodo(todoId, newTodo) {
  return db.collection(firebaseConfig.collectionNames.todos).doc(todoId).update({ todo: newTodo });
}

/**
 * Todo delete
 * @async
 * @function deleteTodo
 * @param {number} todoId - The todo id, in int format.
 * @returns {Object} db
 */
export async function deleteTodo(todoId) {
  return db.collection(firebaseConfig.collectionNames.todos).doc(todoId).delete();
}

/**
 * All todo delete
 * @async
 * @function _deleteAllTodos
 * @param {number} userId - The user id, in int format.
 * @returns {Promise}
 */
async function _deleteAllTodos(userId) {
  const deleteAllTodosBelongsToUser = await db.collection(firebaseConfig.collectionNames.todos).where(USER_ID, "==", userId).get();
  const batch = db.batch();
  if (deleteAllTodosBelongsToUser) {
    deleteAllTodosBelongsToUser.forEach((doc) => {
      batch.delete(doc.ref);
    });
  }
  await batch.commit();
  return Promise.resolve();
}

/**
 * User delete
 * @async
 * @function _deleteUser
 * @param {number} userId - The user id, in int format.
 * @returns {Promise}
 */
async function _deleteUser(userId) {
  const deleteUser = await db.collection(firebaseConfig.collectionNames.users).where(ID, "==", userId).get();
  const batch = db.batch();
  if (deleteUser) {
    deleteUser.forEach((doc) => {
      batch.delete(doc.ref);
    });
  }
  await batch.commit();
  return Promise.resolve();
}

/**
 * logOut with delete all todos and user
 * @async
 * @function logOut
 * @returns {Promise}
 */
export async function logOut() {
  const currentUser = firebase.auth().currentUser;
  const _logOutFirebase = await firebase.auth().signOut();
  if (currentUser) {
    return Promise.all([_deleteAllTodos(currentUser.uid), _deleteUser(currentUser.uid), currentUser.delete(), _logOutFirebase]);
  }
  return Promise.reject();
}
