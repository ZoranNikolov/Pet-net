import {
	Box,
	Text,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Button,
	useToast,
} from "@chakra-ui/react";
import Navbar from "components/layout/Navbar";
import TextareaAutosize from "react-textarea-autosize";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

export default function Contact() {
	const { register, handleSubmit, reset } = useForm();
	const form = useRef();
	const toast = useToast();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_0v6n4nj",
				"template_5hdvgub",
				form.current,
				"vu-iLvSTPOKJQ0ckO"
			)
			.then(
				(result) => {
					toast({
						title: "Message sent successfully",
						status: "success",
						isClosable: true,
						position: "top",
						duration: 5000,
					});
					form.current.reset();
				},
				(error) => {
					toast({
						title: "Failed sending message",
						description: error.message,
						status: "error",
						isClosable: true,
						position: "top",
						duration: 5000,
					});
				}
			);
	};

	return (
		<>
			<Navbar />
			<Box maxW="900px" mx="auto" py="20">
				<Heading as="h1" fontSize="2xl" fontWeight="bold" mb="4">
					Contact Us
				</Heading>
				<Text as="p" css={{ textIndent: "1em" }}>
					We would love to hear from you! Whether you have a question,
					a suggestion, or just want to say hello, please don't
					hesitate to reach out to us using the form below.
				</Text>
				<form ref={form} onSubmit={sendEmail}>
					<FormControl mt="4" isRequired>
						<FormLabel>Name</FormLabel>
						<Input
							type="text"
							placeholder="John Doe"
							{...register("user_name")}
						/>
					</FormControl>
					<FormControl mt="4" isRequired>
						<FormLabel>Email</FormLabel>
						<Input
							type="email"
							placeholder="john.doe@example.com"
							{...register("user_email")}
						/>
					</FormControl>
					<FormControl mt="4" isRequired>
						<FormLabel>Message</FormLabel>
						<Textarea
							as={TextareaAutosize}
							resize="none"
							name="message"
							placeholder="Write your message here"
							{...register("message")}
						/>
					</FormControl>
					<Button mt="4" colorScheme="teal" type="submit">
						Send
					</Button>
				</form>
			</Box>
		</>
	);
}
