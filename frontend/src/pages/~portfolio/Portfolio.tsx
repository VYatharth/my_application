import { Button, Center, Container, Image } from '@chakra-ui/react';
import { Link, Link as RouterLink } from '@tanstack/react-router';
import Logo from '../../assets/images/fastapi-logo.svg';
import Landing from './Landing/Landing';

const Portfolio = () => {
  return (
    <>
      <Container
        h="100vh"
        maxW="sm"
        alignItems="stretch"
        justifyContent="center"
        gap={4}
        centerContent
      >
        <Landing></Landing>
        <p>This is my portfolio</p>
        <Center>
          <Link as={RouterLink} to="/admin" color="blue.500">
            Admin
          </Link>
        </Center>
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Container>
    </>
  );
};

export default Portfolio;
