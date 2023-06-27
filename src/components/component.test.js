import { render, screen } from '@testing-library/react'
import React from 'react'

// import App from '../App.jsx';
import WaiterForm from './WaiterForm/index'

describe('waiter form', () => {
  test('Name input field should be rendered with label', () => {
    const { getByLabelText } = render(<WaiterForm />)
    const nameLabel = screen.getByLabelText('Name')

    expect(nameLabel).toBeInTheDocument()
  })

  // Test case for the CNIC input field
  test('CNIC input field should be rendered with label', () => {
    render(<WaiterForm />)
    const cnicLabel = screen.getByLabelText('CNIC')
    expect(cnicLabel).toBeInTheDocument()
  })

  // Test case for the Upload CNIC input field
  test('Upload CNIC input field should be rendered with label', () => {
    render(<WaiterForm />)
    const uploadCnicLabel = screen.getByLabelText('Upload CNIC')
    expect(uploadCnicLabel).toBeInTheDocument()
  })
})
