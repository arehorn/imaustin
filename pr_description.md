💡 What: Added a loading spinner to the ContactForm submit button and ARIA attributes for the success/error states.
🎯 Why: Enhances UX by providing immediate visual feedback during form submission and improves accessibility by ensuring screen readers announce success and error states.
♿ Accessibility: Added `role="status"` and `aria-live="polite"` to the success message, and `role="alert"` to the error message.
