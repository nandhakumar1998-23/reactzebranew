import React from 'react';
import '../assets/css/Form.css'; // Import the CSS you shared

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    alert('Form submitted!');
  };

  return (
    <section className="acp-cladding-section" id="acp-contact">
      <div className="acp-cladding-container">

        {/* Left Content */}
        <div className="acp-cladding-text">
          <p className="acp-cladding-subtitle">ACP Cladding Solutions</p>
          <h2 className="acp-cladding-title">
            Enhance Your Building's Appeal With Modern ACP Cladding
          </h2>
          <p className="acp-cladding-description">
            Transform your structure with durable, lightweight, and weather-resistant Aluminium Composite Panels.
            Perfect for commercial, residential, and industrial applications. Stylish, high-performance, and tailored to your vision.
          </p>
        </div>

        {/* Right Form */}
        <div className="acp-cladding-form-box">
          <form className="acp-cladding-form" onSubmit={handleSubmit}>
            <div className="acp-form-group">
              <label htmlFor="acp-name">Full Name *</label>
              <input type="text" id="acp-name" name="name" required />
            </div>

            <div className="acp-form-group">
              <label htmlFor="acp-phone">Phone Number *</label>
              <input type="tel" id="acp-phone" name="phone" required />
            </div>

            <div className="acp-form-group">
              <label htmlFor="acp-address">Address *</label>
              <input type="text" id="acp-address" name="address" required />
            </div>

            <div className="acp-form-group">
              <label htmlFor="acp-service">Select Service *</label>
              <select id="acp-service" name="serviceType" required>
                <option value="">-- Select Service --</option>
                <option value="Residential">Residential Cladding</option>
                <option value="Commercial">Commercial Cladding</option>
                <option value="Industrial">Industrial Cladding</option>
                <option value="LED Sinage">LED Sinage</option>
              </select>
            </div>

            <button type="submit" className="acp-cladding-submit-btn">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
