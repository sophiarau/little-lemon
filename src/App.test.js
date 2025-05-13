import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import BookingForm from './components/BookingForm';
import { initializeTimes } from './components/BookingPage';
import { updateTimes } from './components/BookingPage';
import { fetchAPI } from './api'; // Adjust the import path as necessary

test('renders BookingForm heading', () => {
  const mockTimes = ['10:00 AM', '11:00 AM'];
  const mockDispatch = jest.fn();

  render(<BookingForm availableTimes={mockTimes} dispatch={mockDispatch} />);

  const heading = screen.getByText(/book a table!/i);
  expect(heading).toBeInTheDocument();
});



jest.mock('./api', () => ({
  fetchAPI: jest.fn(),
}));

test('initializeTimes should return available times from fetchAPI', () => {
  const mockTimes = ['17:00', '17:30', '18:00'];
  fetchAPI.mockReturnValue(mockTimes);

  const times = initializeTimes();

  expect(times).toEqual(mockTimes);
});

test('updateTimes should update state with times from fetchAPI for a given date', () => {
  const mockDate = new Date('2025-05-09');
  const mockTimes = ['18:00', '18:30'];
  fetchAPI.mockReturnValue(mockTimes);

  const initialState = [];
  const action = { type: 'UPDATE_TIMES', payload: mockDate };
  const newState = updateTimes(initialState, action);

  expect(fetchAPI).toHaveBeenCalledWith(mockDate);
  expect(newState).toEqual(mockTimes);
});




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
