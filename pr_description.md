# 🧪 Test ContactForm Component

## 🎯 What
Added missing test coverage for the `ContactForm` component (`src/components/ContactForm.tsx`).

## 📊 Coverage
The new tests cover the following scenarios:
* Default rendering (idle state)
* Successful form submission (`fetch` call mocked, success message displayed, fields reset on "Send another" click)
* Failed form submission (API error handled correctly, error message shown)
* Failed form submission (Network error handled correctly, error message shown)
* Loading state (Submit button is disabled and displays "Sending..." while processing)

## ✨ Result
Increased confidence when refactoring by covering happy paths, edge cases, and loading states for user input and submission rendering.
