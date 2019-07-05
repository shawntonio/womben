import React, { useState, useRef } from 'react';
import Axios from 'axios';
import { v4 as randomString } from 'uuid';

function NewOfferingForm(props) {
	const [title, setTitle] = useState(null)
	const [description, setDescription] = useState(null)
	const [price, setPrice] = useState(null)

	const imgInput = useRef(null)
	const imgPreview = useRef(null)

	const handleSubmit = (e) => {
		e.preventDefault()
		getSig(imgInput.current.files[0])
	}

	const addToDB = img => {
		Axios.put('/api/offerings', {
			title,
			description,
			price,
			img
		}).catch(console.log)
	}

	const getSig = (file) => {
		// setLoading(true)
		const filename = `${randomString()}-${file.name.replace(/\s/g, '-')}`

		Axios.get(`/aws/get-sig`, {
			params: {
				filename,
				filetype: file.type
			}
		}).then(res => {
			const { signedRequest, url } = res.data
			uploadFile(file, signedRequest, url)
		}).catch(console.log)
	}

	const uploadFile = (file, signedRequest, img) => {
		const options = {
			headers: {
				'Content-Type': file.type,
			},
		}

		Axios.put(signedRequest, file, options).then(() => {
			Axios.post('/api/offerings', {
				title,
				description,
				price,
				img
			}).then(() => props.history.push('/admin/offerings'))
			.catch(console.log)
		}).catch(console.log)
	}

	const previewImg = file => {
		console.log(file)
		imgPreview.current.file = file

		const reader = new FileReader();
    reader.onload = e => imgPreview.current.src = e.target.result;
    reader.readAsDataURL(file);
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="title">Title</label>
			<input onChange={(e) => setTitle(e.target.value)} id="title" type="text" />

			<label htmlFor="price">Price</label>
			<input onChange={(e) => setPrice(e.target.value)} id="price" type="text" />

			<label htmlFor="description">Description</label>
			<textarea onChange={(e) => setDescription(e.target.value)} id="description" type="text" />

			<input 
				type="file"
				ref={imgInput}
				style={{ display: 'none' }}
				onChange={() => previewImg( imgInput.current.files[0])}
			/>
			<img className='img-preview' onClick={() => imgInput.current.click()} ref={imgPreview} src='https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg' alt='uploaded'/>

			<button>Submit</button>
		</form>
	)
}

export default NewOfferingForm