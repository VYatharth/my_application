import { Container, Heading, Text } from '@chakra-ui/react';
import { Outlet } from '@tanstack/react-router';
import AddBlog from './add-blog/AddBlog';

const Admin = () => {
  return (
    <Container
      h="100vh"
      maxW="sm"
      alignItems="stretch"
      justifyContent="center"
      gap={4}
      centerContent
    >
      <Heading size="xl" color="ui.main" textAlign="center" mb={2}>
        Admin panel
      </Heading>
      <Text align="center">Admin panel text</Text>
      <AddBlog />
      {/* <Outlet /> */}
    </Container>
  );
};

export default Admin;
