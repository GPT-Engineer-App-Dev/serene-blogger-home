import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";
import Blog from "./pages/Blog.jsx";
import { useColorMode, Button } from "@chakra-ui/react";

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} position="fixed" top="1rem" right="1rem">
      {colorMode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
};

function App() {
  return (
    <Router>
      <ColorModeSwitcher />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
