import { useState } from "react";
import { Container, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button, Image, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const bg = useColorModeValue("white", "gray.800");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, image };
    // Save the new post to localStorage or send it to a backend server
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));
    navigate("/blog");
  };

  return (
    <Container centerContent maxW="container.md" py={8} bg={bg}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h2" size="xl">Add New Post</Heading>
        <FormControl id="title" isRequired>
          <FormLabel>Title</FormLabel>
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl id="content" isRequired>
          <FormLabel>Content</FormLabel>
          <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </FormControl>
        <FormControl id="image">
          <FormLabel>Image</FormLabel>
          <Input type="file" accept="image/*" onChange={handleImageChange} />
          {image && <Image src={image} alt="Preview" boxSize="sm" mt={4} />}
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg">Submit</Button>
      </VStack>
    </Container>
  );
};

export default AddPost;