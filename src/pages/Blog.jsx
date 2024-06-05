import { useEffect, useState } from "react";
import { Container, Heading, VStack, Box, Text, Image, Button, useColorModeValue } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Blog = () => {
  const bg = useColorModeValue("white", "gray.800");
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      const updatedPosts = [...posts];
      updatedPosts.splice(index, 1);
      setPosts(updatedPosts);
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
    }
  };

  return (
    <Container centerContent maxW="container.md" py={8} bg={bg}>
      <VStack spacing={4}>
        <Heading as="h2" size="xl">Blog</Heading>
        <Button as={Link} to="/add-post" colorScheme="teal" size="lg">Add New Post</Button>
        {posts.length === 0 ? (
          <Text>No posts available.</Text>
        ) : (
          posts.map((post, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%">
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.content}</Text>
              {post.image && <Image src={post.image} alt={post.title} mt={4} />}
              <Button colorScheme="red" size="sm" onClick={() => handleDelete(index)}>Delete</Button>
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default Blog;