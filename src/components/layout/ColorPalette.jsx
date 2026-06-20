import React from "react";
import {CheckCircleIcon} from "@chakra-ui/icons";
import {Box, Button, Flex, IconButton, Tooltip} from "@chakra-ui/react";
import {FaPaintBrush, FaEraser} from "react-icons/fa";
import {useCanvas} from "../../CanvasContext";

export default function ColorPalette() {
  const {selectedColor, setSelectedColor, isDrawMode, toggleDrawMode, clearCanvas} =
    useCanvas();
  const colors = [
    {value: "#2C5282"},
    {value: "#fa6502"},
    {value: "#DD6B20"},
    {value: "#000"},
  ];
  return (
    <Box pos='fixed' bottom='10' left='5' zIndex={12}>
      <Flex gap={3} align='center' className='canvaBtns'>
        <Tooltip
          label={isDrawMode ? "Done drawing" : "Doodle on the page"}
          placement='top'
        >
          <IconButton
            aria-label='Toggle draw mode'
            icon={<FaPaintBrush />}
            rounded='full'
            size='md'
            color={isDrawMode ? "white" : "mutedText"}
            bg={isDrawMode ? "#DD6B20" : undefined}
            _hover={{bg: isDrawMode ? "#C05E1C" : undefined}}
            boxShadow='md'
            onClick={toggleDrawMode}
          />
        </Tooltip>

        {isDrawMode &&
          colors.map((color, index) => (
            <Button
              key={index}
              background={color.value}
              _hover={{background: color.value, opacity: 0.85}}
              rounded='full'
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

        {isDrawMode && (
          <Tooltip label='Clear drawing' placement='top'>
            <IconButton
              aria-label='Clear drawing'
              icon={<FaEraser />}
              rounded='full'
              size='md'
              color='mutedText'
              boxShadow='md'
              onClick={clearCanvas}
            />
          </Tooltip>
        )}
      </Flex>
    </Box>
  );
}
