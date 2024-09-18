import { database } from "./initFirebase";
import { encryptText, decryptText, USER_DETAILS } from "../utils";
import { handleUserState } from "./auth";

import {
	collection,
	onSnapshot,
	addDoc,
	deleteDoc,
	updateDoc,
	doc,
	query,
	where,
	serverTimestamp,
	orderBy,
} from "firebase/firestore";

// collection ref
const colRef = collection(database, "emergencyPatient");

//Add Notes
function addNewNote(toSendNoteData, userId, setMsg, setIsApiLoading, isSharedNoteType) {
	const { newNoteText, newNoteData } = toSendNoteData;
	if (!userId || !newNoteText || !newNoteData) return setMsg("addNewNote: Please Provide all details");
	setIsApiLoading(true);
	const encryptNoteText = encryptText(newNoteText?.trim());
	const encryptNoteData = encryptText(newNoteData);
	const toAdd = {
		userId,
		noteTitle: encryptNoteText,
		noteText: encryptNoteText,
		noteData: encryptNoteData,
		isNoteSharedWithAll: false,
		createdAt: serverTimestamp(),
		updatedOn: serverTimestamp(),
	};
	addDoc(colRef, toAdd)
		.then((e) => {
			if (isSharedNoteType) window.location.href = "/";
		})
		.catch((err) => {
			setMsg(err.code);
			console.log("addNewNote:", err);
		})
		.finally(() => {
			setIsApiLoading(false);
		});
}

// console.log(getAllNotesOfFolder().unsubscribe);

export { addNewNote };
