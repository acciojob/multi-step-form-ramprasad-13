import React, { useState } from 'react';
import Step from './Step';

function App() {
  // 1. State for the current step (starts at 1)
  const [currentStep, setCurrentStep] = useState(1);

  // 2. State for form data (holds all fields across steps)
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    model: '',
    car_price: '',
    card_info: '',
    expiry_date: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  // Navigation Handlers
  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  // Final Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Form Submitted! Check console for data.');
  };

  return (
    <div>
      <h1>Multi-Step Form</h1>
      {/* Pass all necessary data and functions down to the Step component */}
      <Step
        step={currentStep}
        formData={formData}
        handleChange={handleChange}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;