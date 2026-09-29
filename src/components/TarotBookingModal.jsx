import { useState } from 'react';
import { FiX, FiClock, FiCalendar, FiCheck, FiShield, FiUser, FiMail, FiPhone, FiHelpCircle } from 'react-icons/fi';

const tarotSessions = [
  {
    id: 'quick',
    name: 'Quick Session',
    duration: '30 minutes',
    price: '₹1,000',
    description: '30 minutes focused reading answering 1–2 specific, pressing life questions with card spreads.',
  },
  {
    id: 'elaborated',
    name: 'Elaborated Session',
    duration: '1 hour',
    price: '₹1,500',
    description: '1 hour comprehensive exploration of underlying energies, opportunities, and tailored guidance for your path.',
  },
  {
    id: 'deep-dive',
    name: 'Deep Dive Session',
    duration: '2 hours',
    price: '₹2,500',
    description: '2 hours intensive spiritual consultation covering life purpose, chakra and energy clearing, plus custom summary report.',
  },
];

const timeSlots = [
  '10:30 AM – 11:30 AM',
  '12:00 PM – 01:00 PM',
  '03:00 PM – 04:00 PM',
  '05:00 PM – 06:00 PM',
  '06:30 PM – 07:30 PM',
];

export default function TarotBookingModal({ isOpen, onClose, initialSession }) {
  const [selectedSession, setSelectedSession] = useState(
    initialSession ? initialSession.name || 'Quick Session' : 'Quick Session'
  );
  const [selectedDate, setSelectedDate] = useState('2026-10-02');
  const [selectedSlot, setSelectedSlot] = useState(timeSlots[0]);
  const [step, setStep] = useState(1); // 1: details, 2: confirmed
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    focusArea: 'Love & Relationships',
    question: '',
  });

  if (!isOpen) return null;

  const currentSessionObj = tarotSessions.find((s) => s.name === selectedSession) || tarotSessions[0];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="tarot-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="tarot-modal-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="tarot-modal-close" onClick={onClose} aria-label="Close modal">
          <FiX />
        </button>

        {step === 1 ? (
          <div>
            <div className="tarot-modal-header">
              <span className="modal-badge">Official Tarot Consultation</span>
              <h2>Book Your Tarot Reading</h2>
              <p>Select your session, pick a time slot, and share your intentions with our intuitive reader.</p>
            </div>

            <form onSubmit={handleSubmit} className="tarot-booking-form">
              {/* Session Selector */}
              <div className="form-group">
                <label className="form-label">Select Tarot Session</label>
                <div className="session-options-grid">
                  {tarotSessions.map((s) => (
                    <div
                      key={s.id}
                      className={`session-option-card${selectedSession === s.name ? ' active' : ''}`}
                      onClick={() => setSelectedSession(s.name)}
                    >
                      <div className="session-opt-top">
                        <span className="session-opt-name">{s.name}</span>
                        <span className="session-opt-price">{s.price}</span>
                      </div>
                      <div className="session-opt-dur">
                        <FiClock className="icon" /> {s.duration}
                      </div>
                      <p className="session-opt-desc">{s.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date & Time Slot Selection */}
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="bookingDate">
                    <FiCalendar className="icon" /> Select Date
                  </label>
                  <input
                    id="bookingDate"
                    type="date"
                    className="form-input"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="bookingSlot">
                    <FiClock className="icon" /> Available Time Slot
                  </label>
                  <select
                    id="bookingSlot"
                    className="form-input"
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Client Information */}
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="clientName">
                    <FiUser className="icon" /> Full Name
                  </label>
                  <input
                    id="clientName"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="clientPhone">
                    <FiPhone className="icon" /> WhatsApp / Phone Number
                  </label>
                  <input
                    id="clientPhone"
                    name="phone"
                    type="tel"
                    className="form-input"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="clientEmail">
                    <FiMail className="icon" /> Email Address
                  </label>
                  <input
                    id="clientEmail"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="clientFocus">
                    <FiHelpCircle className="icon" /> Focus Area
                  </label>
                  <select
                    id="clientFocus"
                    name="focusArea"
                    className="form-input"
                    value={formData.focusArea}
                    onChange={handleInputChange}
                  >
                    <option value="Love & Relationships">Love & Relationships</option>
                    <option value="Career & Professional Path">Career & Professional Path</option>
                    <option value="Personal Growth & Spiritual Direction">Personal Growth & Spiritual Direction</option>
                    <option value="Energy & Chakra Alignment">Energy & Chakra Alignment</option>
                    <option value="General Clarity & Crossroads">General Clarity & Crossroads</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="clientQuestion">
                  Your Primary Questions or Intentions (Optional)
                </label>
                <textarea
                  id="clientQuestion"
                  name="question"
                  className="form-textarea"
                  rows="2"
                  placeholder="Share any specific situation or questions you would like addressed during the reading..."
                  value={formData.question}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              {/* Booking Policies Note */}
              <div className="tarot-policies-box">
                <div className="policy-item">
                  <FiShield className="policy-icon" />
                  <span><strong>Confidentiality:</strong> Every reading is held in sacred, private confidence.</span>
                </div>
                <div className="policy-item">
                  <FiCheck className="policy-icon" />
                  <span><strong>Rescheduling Policy:</strong> Free rescheduling with at least 24 hours advance notice.</span>
                </div>
              </div>

              <div className="modal-submit-row">
                <div className="modal-total-price">
                  <span>Total Amount:</span>
                  <strong>{currentSessionObj.price}</strong>
                  <small>({currentSessionObj.duration})</small>
                </div>
                <button type="submit" className="confirm-booking-btn">
                  Confirm & Schedule Reading
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="tarot-confirmed-view">
            <div className="confirmed-icon-wrap">
              <FiCheck className="confirmed-check" />
            </div>
            <h2>Tarot Consultation Scheduled!</h2>
            <p className="confirmed-lead">
              Thank you, <strong>{formData.name || 'Seeker'}</strong>. Your appointment for{' '}
              <strong>{currentSessionObj.name}</strong> ({currentSessionObj.duration}) has been reserved.
            </p>

            <div className="confirmed-summary-card">
              <div className="summary-row">
                <span>Session:</span>
                <strong>{currentSessionObj.name} ({currentSessionObj.duration})</strong>
              </div>
              <div className="summary-row">
                <span>Amount:</span>
                <strong>{currentSessionObj.price}</strong>
              </div>
              <div className="summary-row">
                <span>Date & Slot:</span>
                <strong>{selectedDate} at {selectedSlot}</strong>
              </div>
              <div className="summary-row">
                <span>Contact Details:</span>
                <span>{formData.email} | {formData.phone}</span>
              </div>
            </div>

            <div className="confirmed-prep-instructions">
              <h4>Preparation Instructions for Your Reading:</h4>
              <ul>
                <li>Please be in a quiet, undisturbed space 5 minutes prior to the session.</li>
                <li>Keep a notebook and pen ready to record intuitive insights and card reflections.</li>
                <li>A booking confirmation and live session audio/video link have been sent to your WhatsApp and email.</li>
              </ul>
            </div>

            <button type="button" className="close-done-btn" onClick={handleReset}>
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
