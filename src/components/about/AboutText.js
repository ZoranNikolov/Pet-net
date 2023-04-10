import { Box, Heading, Text } from "@chakra-ui/react";

export default function AboutContent() {
	const HEADING =
		"Welcome to Pet-Net, a social media platform for pets and their owners!";
	const TEXT = [
		{
			id: 1,
			content: `Our mission is to create a safe and welcoming community where pets can be celebrated, 
				and their owners can connect, learn, and grow together. At Pet-Net, we believe that pets deserve 
				to be treated with love and respect, and that responsible pet ownership is key to building happy 
				and healthy relationships with our furry friends. Our platform is designed to provide pet owners 
				with the resources and support they need to be the best pet parents possible, while also having 
				fun and building connections with like-minded individuals.`,
		},
		{
			id: 2,
			content: `As a member of our community, you'll have access to a range of features designed specifically 
			for pet owners. These include the ability to create a profile for your pet, connect with other pet owners, 
			and participate in discussions on a range of pet-related topics. You'll also have access to exclusive 
			pet content, including articles, videos, and expert advice on topics like nutrition, behavior, and 
			training. Our vision for the future of Pet-Net is to continue to grow and evolve alongside our community.
			We're constantly exploring new ways to improve the platform and offer new features that will benefit 
			our users. Whether it's through partnerships with pet-related businesses, or new initiatives that support 
			animal welfare, we're committed to creating a platform that truly serves the needs of pet owners.`,
		},
		{
			id: 3,
			content: `Finally, we want you to know that the team behind Pet-Net is made up of passionate pet owners 
			just like you. We understand the joy and challenges that come with being a pet parent, and we're committed 
			to creating a platform that reflects that understanding. We welcome your feedback and suggestions, and 
			we're always looking for ways to improve the platform based on your input. Thank you for choosing Pet-Net 
			as your go-to platform for all things pets. We look forward to seeing you and your furry friends on the site!`,
		},
	];
	return <div>AboutContent</div>;
}
