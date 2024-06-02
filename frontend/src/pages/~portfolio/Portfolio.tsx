import { Button, Center, Container, Image } from '@chakra-ui/react';
import { Link, Link as RouterLink } from '@tanstack/react-router';
import Logo from '../../assets/images/fastapi-logo.svg';

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
        <Image
          src={Logo}
          alt="FastAPI logo"
          height="auto"
          maxW="2xs"
          alignSelf="center"
          mb={4}
        />
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
