import * as firebase from 'firebase';

const config = {
    apiKey: "Ef59XcxOAuCDUiKCMjhjn9J1vpnoOsRt0FdI7m2J",
    databaseURL: "https://wolox-point.firebaseio.com",
    projectId: "wolox-point"
};

firebase.initializeApp(config);

const databaseRef = firebase.database().ref();

const firebaseRef = databaseRef.child("todos");

const valuesToArray = (object = {}) => Object.keys(object).map(key => object[key]);

export const getValues = firebaseRef.on("value", async snapshot => {
    const wait = await snapshot;
    console.log('snapshot', snapshot);
    const hey = await valuesToArray(snapshot && snapshot.val());
    console.log('hey', hey);
});
