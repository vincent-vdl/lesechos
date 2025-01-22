import { Box, BoxProps } from '@chakra-ui/react';

type Props = BoxProps;

export function Separator({ ...props }: Props): JSX.Element {
  return (
    <Box
      backgroundColor="red.600"
      borderRadius="md"
      height="3px"
      marginTop="9px"
      width="70px"
      {...props}
    />
  );
}

export type SeparatorProps = Props;
