import { Box, Flex, Icon, FlexProps } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

export function NavItem({ icon, children, ...rest }: NavItemProps) {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        fontSize="sm"
        align="center"
        p="2"
        mx="2"
        borderRadius="md"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'green.500',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="sm"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}
