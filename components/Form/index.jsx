import React from 'react'
import { styled } from '../../theme/stitches.config'
import Box from '../Box'
const Form = () => {
  return (
    <FromWrapper>
      <Box css={{
        display: "flex",
        gap: "15px",
        '@bp1': {
          flexDirection: "column",
        }
      }}>
        <Input label="Name" name="name" placeholder="Name" required />
        <Input label="Email" name="email" placeholder="Email" required />
      </Box>
      <Box css={{
        display: "grid",
      }}>
        <Input label="Phone" name="phone" placeholder="Phone" required />
      </Box>
      <TextArea
        label="Message"
        name="message"
        placeholder="Message"
        required
      />


      <Button type="submit">Submit</Button>


    </FromWrapper>
  )
}

export default Form

const FromWrapper = styled('form', {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
})


const Input = styled('input', {
  appearance: "none",
  display: "inline-block",
  lineHeight: "1.4em",
  outline: "none",
  border: "none",
  padding: "15px",
  borderRadius: "8px",
  fontWeight: 400,
  fontSize: "16px",
  backgroundColor: "$gray4",
  color: "rgb(0, 0, 0)",
  boxShadow: "transparent 0px 0px 0px 1px inset"
})


const TextArea = styled('textarea', {
  appearance: "none",
  display: "inline-block",
  lineHeight: "1.4em",
  outline: "none",
  border: "none",
  minHeight: "0px",
  padding: "15px",
  resize: "vertical",
  borderRadius: "8px",
  backgroundColor: "$gray4",
  fontWeight: 400,
  fontSize: "16px",
  color: "rgb(0, 0, 0)",
  boxShadow: "transparent 0px 0px 0px 1px inset",
  '@bp2': {
    width: 'auto'
  }
})

const Button = styled('button', {
  appearance: "none",
  display: "inline-block",
  lineHeight: "1.4em",
  outline: "none",
  border: "none",
  borderRadius: "8px",
  padding: "15px",
  fontWeight: 600,
  fontSize: "16px",
  backgroundColor: "$blackA12",
  cursor: "pointer",
  color: "$whiteA12",
  zIndex: 1,
  opacity: 1,
  transition: 'opacity 0.2s ease-in-out',
  '&:hover': {
    // backgroundColor: "$blackA12",
    opacity: '0.9'
  }
})