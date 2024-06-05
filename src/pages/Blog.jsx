import { useEffect, useState } from "react";
import { Container, Heading, VStack, Box, Text, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={8}>
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
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default Blog;