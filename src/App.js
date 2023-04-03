import { useEffect, useState } from "react";
import "./App.css";
import { Auth } from "./components/auth";
import { db, auth, storage } from "./config/firebase";
import { getDocs, collection, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes } from "firebase/storage";

function App() {
	const [movieList, setMovieList] = useState([]);

	// New Movie States
	const [newMovieTitle, setNewMovieTitle] = useState("");
	const [newMovieReleaseDate, setNewMovieReleaseDate] = useState(0);
	const [isNewMovieOscar, setIsNewMovieOscar] = useState(false);

	// Update Title State
	const [updatedTitle, setUpdatedTitle] = useState('')

	// File Upload State
	const [fileUpload, setFileUpload] = useState(null);

	const moviesCollectionRef = collection(db, "movies");

	const getMovieList = async () => {
		console.log("Fetching movie list...");
		alert("Fetching movie list...");
		try {
			const data = await getDocs(moviesCollectionRef);
			// console.log(data);
			const filteredData = data.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			setMovieList([...filteredData]);
		} catch (err) {
			console.error(err);
		}
	};

	const onSubmitMovie = async () => {
		try{
			await addDoc(moviesCollectionRef, {
				title: newMovieTitle,
				releaseDate: newMovieReleaseDate,
				receivedAnOscar: isNewMovieOscar,
				userId: auth?.currentUser?.uid,
			});
		getMovieList();
		} catch (err) {
			console.error(err);
		}
	};

	const deleteMovie = async (id) => {
		const movieDoc = doc(db, "movies", id);
		await deleteDoc(movieDoc);
		getMovieList();
	};

	const updateMovieTitle = async (id) => {
		const movieDoc = doc(db, "movies", id);
		await updateDoc(movieDoc, {title: updatedTitle});
		getMovieList();
	};


	const uploadFile = async () => {
		if (!fileUpload) return;
		const filesFolderRef = ref(storage, `projectFiles/${fileUpload.name}`);
		try {
			await uploadBytes(filesFolderRef, fileUpload);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getMovieList();
	}, []);

	
	return (
		<div className="App">
			fsdfkjsdfsdkjfsldkfjskjfkdjfkd
			<Auth />

			<div>
				<input
					placeholder="Movie title..."
					onChange={(e) => setNewMovieTitle(e.target.value)}
				/>
				<input
					placeholder="Release Date..."
					type="number"
					onChange={(e) =>
						setNewMovieReleaseDate(Number(e.target.value))
					}
				/>
				<input
					type="checkbox"
					checked={isNewMovieOscar}
					onChange={(e) => setIsNewMovieOscar(e.target.checked)}
				/>
				<label> Receiverd an Oscar</label>
				<button onClick={onSubmitMovie}> Submit Movie </button>
			</div>

			<div>
				{movieList.map((movie, index) => (
					<div key={index}>
						<h1
							style={{
								color: movie.receivedAnOscar ? "green" : "red",
							}}
						>
							{movie.title}
						</h1>
						<p>Date: {movie.releaseDate} </p>
						<button onClick={() => deleteMovie(movie.id)}> Delete Movie </button>

						<input placeholder="new title..." onChange={(e) => setUpdatedTitle(e.target.value)} />
						<button onClick={() => updateMovieTitle(movie.id)}> Update title </button>
					</div>
				))}
			</div>
			<div>
				<input type="file"
				onChange={(e) => setFileUpload(e.target.files[0])}
				/>
				<button onClick={uploadFile}> Upload File </button>
			</div>
		</div>
	);
}

export default App;
