/* eslint-disable react/no-children-prop */
// @ts-nocheck
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useToast,
} from '@chakra-ui/react'
import {signIn, useSession} from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useForm} from 'react-hook-form'
import {IoLogoGithub, IoLogoGoogle, IoMail, IoSend} from 'react-icons/io5'
import {Email} from 'types/email'

export const SignIn = () => {
  const router = useRouter()
  const toast = useToast()
  const {status} = useSession()
  const {
    handleSubmit,
    register,
    formState: {errors, isSubmitting},
  } = useForm<Email>()

  const onSubmit = async ({email}: Email) => {
    const res = await signIn('email', {redirect: false, email: email})
    if (res?.ok) {
      toast({
        title: 'Access Sent',
        description: 'We send you an email to access your account.',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'bottom-right',
      })
    }
  }

  const {error}: any = router.query

  const errors_auth = {
    Signin: 'Try signing in with a different account.',
    OAuthSignin: 'Try signing in with a different account.',
    OAuthCallback: 'Try signing in with a different account.',
    OAuthCreateAccount: 'Try signing in with a different account.',
    EmailCreateAccount: 'Try signing in with a different account.',
    Callback: 'Try signing in with a different account.',
    OAuthAccountNotLinked:
      'To confirm your identity, sign in with the same account you used originally.',
    EmailSignin: 'The e-mail could not be sent.',
    CredentialsSignin:
      'Sign in failed. Check the details you provided are correct.',
    SessionRequired: 'Please sign in to access this page.',
    default: 'Unable to sign in.',
  }

  if (status === 'authenticated') router.push('/')
  if (status === 'unauthenticated') {
    return (
      <Box
        display='flex'
        overflowY='hidden'
        alignItems='center'
        w='100%'
        h='100vh'
      >
        <Head>
          <title>Lifesy | Login</title>
          <meta name='description' content='Your Habit Manager' />
          <link rel='icon' href='/logo.svg' />
        </Head>
        <Box w='40%'>
          <Image
            alt='Background login Lifesy'
            width='3000'
            height='3000'
            priority
            src='/login.jpg'
          />
        </Box>
        <Box w='50%' p='100'>
          <Image alt='Logo Lifesy' width='100' height='100' src='/logo.svg' />
          <Heading as='h2' size='2xl' mt='4' mb='4'>
            Hey, hello 👋
          </Heading>
          <Text fontSize='sm' mb='8'>
            Lifesy is your simple and fast habit tracker
          </Text>
          {error && (
            <Alert status='error'>
              <AlertIcon />
              <Box>
                <AlertTitle>Access Error!</AlertTitle>
                <AlertDescription>{errors_auth[error]}</AlertDescription>
              </Box>
            </Alert>
          )}
          <Box display='flex' mt='4' alignItems='center'>
            <Button
              onClick={() => signIn('google')}
              aria-label='GoogleProvider'
              leftIcon={<IoLogoGoogle />}
              mr='4'
              w='100%'
            >
              Google
            </Button>
            <Button
              onClick={() => signIn('github')}
              aria-label='GitHubProvider'
              leftIcon={<IoLogoGithub />}
              w='100%'
            >
              GitHub
            </Button>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.email}>
              <InputGroup mt='4'>
                <InputLeftElement pointerEvents='none' children={<IoMail />} />
                <Input
                  {...register('email', {
                    required: 'Enter your email before sending',
                    pattern: {
                      value: /^S+@S+$/i,
                      message: 'Enter a valid email address',
                    },
                  })}
                  name='email'
                  placeholder='joseph@mail.com'
                />
              </InputGroup>
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              w='100%'
              mt='4'
              type='submit'
              isLoading={isSubmitting}
              aria-label='EmailProvider'
              leftIcon={<IoSend />}
            >
              Email
            </Button>
          </form>
        </Box>
      </Box>
    )
  }
}

export default SignIn
