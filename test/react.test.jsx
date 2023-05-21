import { cleanup, fireEvent, render, screen, } from '@testing-library/react';
import { afterEach, describe, test, expect } from "vitest";
import {Calculator, numbers, operations } from '../src/Calculator'

describe('Calculator', () => {
  afterEach(cleanup);

  test('should render', () => {
    render(<Calculator />)
  })

  test('should render title correctly', () => {
    render(<Calculator />)
    screen.getByText('Calculator')
  })

  test('should render numbers', () => {
    render(<Calculator />)
    numbers.forEach(number => {
      screen.getByText(number)
    });
  })

  test('should render 4 rows', () => {
    render(<Calculator />)

    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(4);
  })

  test('should render operatiors', () => {
    render(<Calculator />)

    operations.forEach(operator => {
      screen.getByText(operator)
    });
  })

  test('should render equal sing', () => {
    render(<Calculator />)
    screen.getByText('=');
  })

  test('should render an input', () => {
    render(<Calculator />)
    screen.getByRole('textbox');
  })

  test('should user input after clicking a number', () => {
    render(<Calculator />)

    const one = screen.getByText('1');
    fireEvent.click(one);

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('1');
  })

  test('should user input after clicking several number', () => {
    render(<Calculator />)

    const one = screen.getByText('1');
    fireEvent.click(one);

    const two = screen.getByText('2');
    fireEvent.click(two);

    const three = screen.getByText('3');
    fireEvent.click(three);

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('123');
  })

  test('should user input after clicking number amd operations ', () => {
    render(<Calculator />)

    const one = screen.getByText('1');
    fireEvent.click(one);

    const plus = screen.getByText('+');
    fireEvent.click(plus);

    fireEvent.click(one);

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('1+1');

  })

  test('should calculete based on user input and show the calculation', () => {
    render(<Calculator />)

    const one = screen.getByText('1');
    fireEvent.click(one);

    const plus = screen.getByText('+');
    fireEvent.click(plus);

    fireEvent.click(one);

    const equal = screen.getByText('=');
    fireEvent.click(equal);

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('2');
  })

})