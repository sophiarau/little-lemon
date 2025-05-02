import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import BookingForm from './components/BookingForm';
import {initializeTimes} from './components/BookingPage';
import { updateTimes } from './components/BookingPage';

test('renders BookingForm heading', () => {
  const mockTimes = ['10:00 AM', '11:00 AM'];
  const mockDispatch = jest.fn();

  render(<BookingForm availableTimes={mockTimes} dispatch={mockDispatch} />);

  const heading = screen.getByText(/book a table!/i);
  expect(heading).toBeInTheDocument();
});

test('initializeTimes returns the correct expected value', () => {
  const expectedTimes = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
    '7:00 PM',
    '8:00 PM',
    '9:00 PM',
    '10:00 PM'
  ];
  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
})

test('updateTimes returns the correct expected value', () => {
  const action = { type: 'UPDATE_TIMES' };
  const expectedTimes = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
    '7:00 PM',
    '8:00 PM',
    '9:00 PM',
    '10:00 PM'
  ];
  const result = updateTimes([], action);
  expect(result).toEqual(expectedTimes);
}
);

  test('Form submission works correctly', () => {
    const availableTimes = ['10:00 AM', '11:00 AM'];
  const dispatch = jest.fn(); // Mock dispatch function

    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  
    const nameInput = screen.getByPlaceholderText('John Doe');
    const emailInput = screen.getByPlaceholderText('Email');
    const dateInput = screen.getByLabelText('Date:');
    const timeSelect = screen.getByLabelText('Time:');
    const guestsInput = screen.getByPlaceholderText('1');
    const occasionSelect = screen.getByLabelText('Occasion');
    const submitButton = screen.getByRole('button', { name: 'Make Your Reservation' });

    userEvent.type(nameInput, 'Jane Doe');
    userEvent.type(emailInput, 'janedoe@example.com');
    userEvent.type(dateInput, '2025-05-02');
    userEvent.selectOptions(timeSelect, '10:00 AM');
    userEvent.type(guestsInput, '4');
    userEvent.selectOptions(occasionSelect, 'Birthday');

    userEvent.click(submitButton);

  });
