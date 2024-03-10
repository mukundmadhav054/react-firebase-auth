import React, { useEffect, useState } from "react";
import { auth } from ".././firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Text, Center, Button, Flex, Box } from "@chakra-ui/react";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log("Signed Out Successfully"))
      .catch((error) => console.log(error));
  };
  return (
    <Box my="4">
      <Center>
        {authUser ? (
          <>
            <Flex flexDirection="column">
              <Text>{`Signed In as ${authUser.email}`}</Text>
              <Button onClick={userSignOut}>Sign Out</Button>
            </Flex>
          </>
        ) : (
          <Text>Signed Out</Text>
        )}
      </Center>
    </Box>
  );
};

export default AuthDetails;
