import React, {useState} from "react";
import {CheckCircleIcon} from "@chakra-ui/icons";
import {Box, Button, Flex, Link} from "@chakra-ui/react";
import {useCanvas} from "../../CanvasContext";
export default function ColorPalette() {
  const {selectedColor, setSelectedColor} = useCanvas();
  const colors = [
    {value: "#2C5282"},
    {value: "#fa6502"},
    {value: "#DD6B20"},
    {value: "#000"},
  ];
  return (
    <Box pos='fixed' bottom='10' left='5' zIndex={12}>
      <Flex gap={5} className='canvaBtns'>
        {colors.map((color, index) => (
          <Button
            key={index}
            colorScheme={color.value}
            background={color.value}
            rounded={100}
            size='sm'
            value={color.value}
            className='activeBtn'
            isActive={selectedColor === color.value}
            onClick={e => {
              setSelectedColor(e.target.value);
            }}
          >
            {selectedColor === color.value ? <CheckCircleIcon /> : null}
          </Button>
        ))}
      </Flex>
    </Box>
  );
}
