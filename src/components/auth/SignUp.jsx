import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Heading,
  VStack,
  Box,
  Card,
  FormControl,
  FormLabel,
  Stack,
  CardBody,
} from "@chakra-ui/react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const submitHanlder = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <VStack>
        <VStack as="header" spacing="6" my="4" className="sign-in-container">
          <Heading as="h2" size="2xl">
            Create Account
          </Heading>
        </VStack>
        <Card maxW="sm" variant="outline" borderColor="#d0d7de">
          <CardBody bg="#F2EDEB" borderRadius="md">
            <form onSubmit={submitHanlder}>
              <VStack>
                <FormControl>
                  <FormLabel size="sm">Email Address</FormLabel>
                  <Input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email"
                    size="md"
                    bg="white"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel size="sm">Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                      bg="white"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  colorScheme="green"
                  variant="solid"
                  size="sm"
                  type="submit"
                >
                  Sign Up
                </Button>
              </VStack>
            </form>
          </CardBody>
        </Card>
      </VStack>
    </>
  );
};

export default SignUp;
