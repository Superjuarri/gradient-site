import React from 'react'
import styled from 'styled-components'

const TypedInputWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`

const ClickedInputWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`

const Label = styled.label`
  font-size: 1.25rem;
  font-weight: 700;
  white-space: nowrap;
  margin-right: 1rem;
`

const Input = styled.input`
  margin-right: 1rem;
`

const Select = styled.select``

const Option = styled.option``

const Checkbox = styled.input``

const InputText = ({ labelText, placeholder, value, onChange }) => {
  return (
    <TypedInputWrapper>
      <Label>{`${labelText}: `}</Label>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </TypedInputWrapper>
  )
}

const InputNumber = ({ labelText, value, min, max, step, onChange }) => {
  return (
    <TypedInputWrapper>
      <Label>{`${labelText}: `}</Label>
      <Input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
      />
    </TypedInputWrapper>
  )
}

const InputRange = ({ labelText, value, min, max, step, onChange }) => {
  return (
    <ClickedInputWrapper>
      <Label>{`${labelText}: `}</Label>
      <Input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
      />
    </ClickedInputWrapper>
  )
}

const InputOption = ({ labelText, options, onChange }) => {
  return (
    <ClickedInputWrapper>
      <Label>{`${labelText}: `}</Label>
      <Select onChange={onChange}>
        {options.map((option, index) => (
          <Option key={index} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </ClickedInputWrapper>
  )
}

const InputCheckbox = ({ labelText, onChange }) => {
  return (
    <ClickedInputWrapper>
      <Label>{`${labelText}: `}</Label>
      <Checkbox type="checkbox" onChange={onChange} />
    </ClickedInputWrapper>
  )
}

export { InputText, InputNumber, InputRange, InputOption, InputCheckbox }
