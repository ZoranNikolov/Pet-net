import { useToast } from "@chakra-ui/react";
import { collection, doc, query, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "lib/firebase";
<<<<<<< HEAD
import { useState, useEffect, useContext } from "react";
=======
<<<<<<< HEAD
import { useState } from "react";
>>>>>>> 662a2026f88859e34c9858d79d1db2e829058176
import {
	useCollectionData,
	useDocumentData,
} from "react-firebase-hooks/firestore";
<<<<<<< HEAD
// import { UserContext } from "components/auth/UserContextProvider";
=======
import { useContext } from "react";
import { UserContext } from "components/auth/UserContextProvider";
=======
import { useEffect, useState } from "react";
import { useCollectionData, useDocumentData } from "react-firebase-hooks/firestore";
>>>>>>> 191462c267b134778f997f0da05dfc3d97a2a1ed
>>>>>>> 662a2026f88859e34c9858d79d1db2e829058176

export function useUser(id) {
	const q = query(doc(db, "users", id));
	const [user, isLoading] = useDocumentData(q);

	return { user, isLoading };
}

export function useUsers() {
	const [users, isLoading] = useCollectionData(collection(db, "users"));
	return { users, isLoading };
}

export function useUpdateAvatar(uid) {
	const [isLoading, setLoading] = useState(false);
	const [file, setFile] = useState(null);
	const [fileURL, setFileURL] = useState(null);
	const toast = useToast();
<<<<<<< HEAD
	// const { setAvatarUrl } = useContext(UserContext);

	async function updateAvatar() {
		if (!file) {
			toast({
				title: "No file selected",
				description: "Please select a file to upload",
				status: "error",
				duration: 5000,
				isClosable: true,
				position: "top",
			});

			return;
		}

		setLoading(true);

		const fileRef = ref(storage, "avatars/" + uid);
		await uploadBytes(fileRef, file);

		const avatarURL = await getDownloadURL(fileRef);
		// setAvatarUrl(avatarURL);

		const docRef = doc(db, "users", uid);
		await updateDoc(docRef, { avatar: avatarURL });

=======
<<<<<<< HEAD
	const { setAvatarUrl } = useContext(UserContext);

	async function updateAvatar() {
		if (!file) {
			toast({
				title: "No file selected",
				description: "Please select	a file to upload",
				status: "error",
				duration: 5000,
				isClosable: true,
				position: "top",
			});

			return;
		}

		setLoading(true);

		const fileRef = ref(storage, "avatars/" + uid);
		await uploadBytes(fileRef, file);

		const avatarURL = await getDownloadURL(fileRef);
		setAvatarUrl(avatarURL); //new

		const docRef = doc(db, "users", uid);
		await updateDoc(docRef, { avatar: avatarURL });

=======
  
	async function updateAvatar() {
	  if (!file || !(file instanceof Blob && file.type.startsWith('image/'))) {
>>>>>>> 191462c267b134778f997f0da05dfc3d97a2a1ed
>>>>>>> 662a2026f88859e34c9858d79d1db2e829058176
		toast({
			title: "Profile updated",
			status: "success",
			isClosable: true,
			position: "top",
			duration: 5000,
		});

		setFile(null);
		setFileURL(null);
		setLoading(false);
	}

	useEffect(() => {
		if (file) {
			setFileURL(URL.createObjectURL(file));
		} else {
			setFileURL(null);
		}
	}, [file]);

	return {
		setFile,
		updateAvatar,
		isLoading,
		fileURL,
	};
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
  }
  
>>>>>>> 191462c267b134778f997f0da05dfc3d97a2a1ed
>>>>>>> 662a2026f88859e34c9858d79d1db2e829058176
