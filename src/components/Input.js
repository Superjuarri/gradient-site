import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  max-width: 18rem;
  display: flex;
  align-items: baseline;
  border-bottom: 2px solid ${({ color }) => color};
  font-size: 1.5rem;
`

const Label = styled.label``

const Input = styled.input`
  border: none;
  outline: none;
  padding: 0;
`

const Select = styled.select``

const Option = styled.option``

const Checkbox = styled.input``

const InputText = ({ children, labelText, placeholder, value, onChange }) => {
  return (
    <Form>
      <Label>{`${labelText}: `}</Label>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {children}
    </Form>
  )
}

const InputNumber = ({ labelText, min, max, value, onChange }) => {
  return (
    <Form>
      <Label>{`${labelText}: `}</Label>
      <Input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
      />
    </Form>
  )
}

const InputOption = ({ labelText, options, onChange }) => {
  return (
    <Label>
      {`${labelText}: `}
      <Select onChange={onChange}>
        {options.map((option, index) => (
          <Option key={index} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </Label>
  )
}

const InputCheckbox = ({ labelText, onChange }) => {
  return (
    <Label>
      {`${labelText}: `} <Checkbox type="checkbox" onChange={onChange} />
    </Label>
  )
}

export { InputText, InputNumber, InputOption, InputCheckbox }
