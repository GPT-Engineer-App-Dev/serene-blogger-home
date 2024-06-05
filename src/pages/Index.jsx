import { Container, Text, VStack, Heading, Box, Image, Button, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bg}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Text fontSize="lg">Sharing my thoughts and experiences with the world.</Text>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog" objectFit="cover" />
        </Box>
        <Button as={Link} to="/blog" colorScheme="teal" size="lg">Read My Blog</Button>
      </VStack>
    </Container>
  );
};

export default Index;