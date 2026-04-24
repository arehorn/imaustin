#!/bin/bash
# Remove unused import in test
sed -i 's/, fireEvent//' src/components/ContactForm.test.tsx
