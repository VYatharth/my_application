import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { useForm, type SubmitHandler } from 'react-hook-form';
import useCustomToast from '../../../hooks/useCustomToast';
import { UserService } from '../../../client';
import { Suspense } from 'react';

function Users() {
  const { data: items } = useSuspenseQuery({
    queryKey: ['items'],
    queryFn: () => UserService.indexUsersGet(),
  });

  return (
    <ol>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.id}</span> -<span>{item.username}</span> -
          <span color={!item.email ? 'ui.dim' : 'inherit'}>
            {item.email || 'N/A'}
          </span>
          {/* <Td>
            <ActionsMenu type={"Item"} value={item} />
          </Td> */}
        </li>
      ))}
    </ol>
  );
}

const AddBlog = () => {
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    criteriaMode: 'all',
    defaultValues: {
      new_password: '',
    },
  });

  const showToast = useCustomToast();
  const navigate = useNavigate();

  const savePost = async () => {
    return true;
  };

  // const mutation = useMutation({
  //   mutationFn: savePost,
  //   onSuccess: () => {
  //     showToast('Success!', 'Password updated.', 'success');
  //     reset();
  //     navigate({ to: '/' });
  //   },
  //   onError: (err) => {
  //     showToast('Something went wrong.', 'error detail', 'error');
  //   },
  // });

  const onSubmit: SubmitHandler<any> = async (data) => {
    // mutation.mutate(data);
  };
  return (
    <Container
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      h="100vh"
      maxW="sm"
      alignItems="stretch"
      justifyContent="center"
      gap={4}
      centerContent
    >
      <Heading size="xl" color="ui.main" textAlign="center" mb={2}>
        Reset Password
      </Heading>
      <Text textAlign="center">
        Please enter your new password and confirm it to reset your password.
      </Text>
      <Suspense fallback={<Text>test</Text>}>
        <Users />
      </Suspense>
      <FormControl mt={4} isInvalid={!!errors.new_password}>
        <FormLabel htmlFor="password">Set Password</FormLabel>
        <Input id="password" placeholder="Password" type="password" />
        {errors.new_password && (
          <FormErrorMessage>{errors.new_password.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl mt={4}>
        <FormLabel htmlFor="confirm_password">Confirm Password</FormLabel>
        <Input id="confirm_password" placeholder="Password" type="password" />
      </FormControl>
      <Button variant="primary" type="submit">
        Reset Password
      </Button>

      
    </Container>
  );
};

export default AddBlog;
