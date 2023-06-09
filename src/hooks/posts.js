import { useToast } from "@chakra-ui/react";
import { uuidv4 } from "@firebase/util";
import {
	arrayRemove,
	arrayUnion,
	collection,
	deleteDoc,
	doc,
	getDocs,
	orderBy,
	query,
	setDoc,
	updateDoc,
	where,
} from "firebase/firestore";
import { db } from "lib/firebase";
import { DASHBOARD } from "lib/routes";
import { useState } from "react";
import {
	useCollectionData,
	useDocumentData,
} from "react-firebase-hooks/firestore";
import { useNavigate } from "react-router-dom";

export function useAddPost() {
	const [isLoading, setLoading] = useState(false);
	const toast = useToast();

	async function addPost(post) {
		setLoading(true);
		const id = uuidv4();
		await setDoc(doc(db, "posts", id), {
			...post,
			id,
			date: Date.now(),
			likes: [],
		});
		toast({
			title: "Post added successfully!",
			status: "success",
			isClosable: true,
			position: "top",
			duration: 2000,
		});
		setLoading(false);
	}

	return { addPost, isLoading };
}

export function useEditPost() {
	const [isLoading, setLoading] = useState(false);
	const toast = useToast();

	async function editPost(post, updatedText) {
		setLoading(true);
		const id = post.id;

		await setDoc(doc(db, "posts", id), {
			...post,
			text: updatedText,
		});
		toast({
			title: "Post edited successfully!",
			status: "success",
			isClosable: true,
			position: "top",
			duration: 2000,
		});
		setLoading(false);
	}

	return { editPost, isLoading };
}

export function useToggleLike({ id, isLiked, uid }) {
	const [isLoading, setLoading] = useState(false);
	async function toggleLike() {
		setLoading(true);
		const docRef = doc(db, "posts", id);
		await updateDoc(docRef, {
			likes: isLiked ? arrayRemove(uid) : arrayUnion(uid),
		});
		setLoading(false);
	}

	return { toggleLike, isLoading };
}

export function useDeletePost(id) {
	const [isLoading, setLoading] = useState(false);
	const toast = useToast();
	const navigate = useNavigate();

	async function deletePost() {
		navigate(DASHBOARD);
		setLoading(true);

		// Delete post document
		await deleteDoc(doc(db, "posts", id));

		// Delete comments
		const q = query(collection(db, "comments"), where("postId", "==", id));
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach(async (doc) => deleteDoc(doc.ref));

		toast({
			title: "Post deleted!",
			status: "info",
			isClosable: true,
			position: "top",
			duration: 2000,
		});
		setLoading(false);
	}
	return { deletePost, isLoading };
}

export function usePost(id) {
	const q = doc(db, "posts", id);
	const [post, isLoading] = useDocumentData(q);

	return { post, isLoading };
}

export function usePosts(uid = null) {
	const q = uid
		? query(
				collection(db, "posts"),
				orderBy("date", "desc"),
				where("uid", "==", uid)
		  )
		: query(collection(db, "posts"), orderBy("date", "desc"));
	const [posts, isLoading, error] = useCollectionData(q);
	const likes = posts
		?.map((post) => post.likes)
		.reduce((acc, val) => acc.concat(val), []);
	if (error) throw error;
	return { posts, likes, isLoading };
}
