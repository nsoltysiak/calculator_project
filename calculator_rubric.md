# JavaScript Calculator Project - Assessment Rubric

### **Must Have (Required for Passing):**

**Implementation Requirements**

- [Y] Implement handleInput() function to route all button clicks (C, =, numbers, operators)
- [Y] Create four arithmetic functions: add(), subtract(), multiply(), divide()
- [Y] Implement handleNumber() to process number input (0-9) with state management
- [y] Implement handleOperator() to store operator (+, -, \*, /) and prepare for second number
- [Y] Implement executeOperation() using if/else statements to call correct arithmetic function
- [Y] Implement resetCalculator() to clear all state variables with "C" button
- [ ] Use state variables: firstOperand, operator, shouldResetDisplay
- [ ] Use the functions: updateDisplay(value), setDisplay(value), getDisplay(value)
- [ ] Handle one operation at a time
- [Y] Keep functions to a maximum of 50 lines of code.

**Logs and Debugging:**

- [Y] Use console.log for successful operations
- [Y] Use at least one console.error
- [Y] Use at least one console.warn

### Functional Requirements

- No JavaScript errors in browser console
- Calculator performs one operation at a time
- Can successfully add, multiply, subtract, and divide
- Clear button resets calculator state
- Display shows current number or result
- Addition works
- Subtraction works
- Multiplication works
- Division works

### **Could Have (Bonus Points):**

- Implement handleDecimal() for decimal point input
- CE button functionality (Clear Entry)
- Add floating point calculations
- Prevention of multiple decimal points
- Using equals will repeat the calculation again
  (10 - 1 = 9, hitting equals again returns 8, hitting equals again returns 7)
