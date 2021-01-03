// Initialize Firebase
const config = {
  apiKey: "AIzaSyB3KhN4IO-eFSnW0-R5YCrjPY5iA1Xc-Yk",
  authDomain: "proyecto-final-71ed2.firebaseapp.com",
  databaseURL: "https://proyecto-final-71ed2.firebaseio.com",
  projectId: "proyecto-final-71ed2",
  storageBucket: "proyecto-final-71ed2.appspot.com",
  messagingSenderId: "551788436915",
  appId: "1:551788436915:web:ab3dfe2a1ed487953dffc6",
  measurementId: "G-FT6G73QBF7"

};
firebase.initializeApp(config);

// Get a reference to the database service
const database = firebase.database();

function writeUserData(name, email, age) {
  const id = generateUUID();
  firebase.database().ref(`users/${id}`).set({
    name,
    email,
    age
  });
}

// Initial load data
readUserData();

// Shortcuts to DOM Elements.
const $usersList = document.getElementById('usersList');


function readUserData() {
  const starCountRef = firebase.database().ref('users/');
  starCountRef.on('value', function (snapshot) {
    refreshUI(snapshot.val());
  });
}


function refreshUI(users) {
  let tBody = '';
  Object.keys(users).forEach(function (key) {
    console.log(key, users[key]);
    const tRow =
      `
        <tr>
          <td>${users[key].name}</td>
          <td>${users[key].email}</td>
          <td>$ ${users[key].age}</td>
        </tr>
      `;
    tBody += tRow;
  });

  $usersList.innerHTML = tBody;
};


function generateUUID() {
  let d = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
};
