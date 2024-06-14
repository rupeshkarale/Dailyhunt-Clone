import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <>
      {[...Array(3)].map((_, index) => (
        <Box
          key={index}
          mb="6"
          p="4"
          boxShadow="md"
          borderRadius="md"
          bg="white"
        >
          <Skeleton height="20px" mb="4" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
          <Skeleton height="200px" mt="4" />
        </Box>
      ))}
    </>
  );
};

export default Loading;
