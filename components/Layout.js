import { Box } from "./Box.js";
import Nav from "./Nav.js";
import Footer from "./Footer";

export const Layout = ({ children }) => (
  <Box>
    <Nav></Nav>
    {children}
      <div style={{ height: "10vh" }}></div>
    <Footer></Footer>
  </Box>
);
