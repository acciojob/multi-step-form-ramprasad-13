import React from 'react';

function Step(props) {
  const { step, formData, handleChange, handleNext, handlePrev, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      
      {/* --- Step 1 Content --- */}
      {step === 1 && (
        <div className="step-content">
          <h3>Step 1: Personal Details</h3>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              id="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      )}

      {/* --- Step 2 Content --- */}
      {step === 2 && (
        <div className="step-content">
          <h3>Step 2: Car Details</h3>
          <div>
            <label>Car Model:</label>
            <input
              type="text"
              id="model"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Car Price:</label>
            <input
              type="number"
              id="car_price"
              value={formData.car_price}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      )}

      {/* --- Step 3 Content --- */}
      {step === 3 && (
        <div className="step-content">
          <h3>Step 3: Payment Info</h3>
          <div>
            <label>Card Information:</label>
            <input
              type="text"
              id="card_info"
              value={formData.card_info}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Expiry Date:</label>
            <input
              type="date"
              id="expiry_date"
              value={formData.expiry_date}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      )}

      {/* --- Navigation Buttons --- */}
      <div className="buttons">
        {/* Previous Button: Show on Step 2 and 3 */}
        {step > 1 && (
          <button type="button" onClick={handlePrev}>
            Previous
          </button>
        )}

        {/* Next Button: Show on Step 1 and 2 */}
        {step < 3 && (
          <button type="button" onClick={handleNext}>
            Next
          </button>
        )}

        {/* Submit Button: Show only on Step 3 */}
        {step === 3 && (
          <button type="submit">
            Submit
          </button>
        )}
      </div>
    </form>
  );
}

export default Step;