import React from "react";
import { Box, BoxProps } from "./Box";

export function Divider(boxProps: BoxProps) {
  return (
    <Box marginVertical="s24" {...boxProps}>
      <Box
        alignSelf="center"
        width={"100%"}
        height={1}
        backgroundColor="gray1"
      />
    </Box>
  );
}
