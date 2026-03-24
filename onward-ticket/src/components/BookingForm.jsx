import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  PlaneTakeoff, PlaneLanding, Calendar,
  Users, Mail, User, ShieldCheck, Zap, CheckCircle2
} from 'lucide-react';
import './BookingForm.css';

const BookingForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      console.log('Booking Data:', data);
    }, 1800);
  };

  if (success) {
    return (
      <div className="bf-card success-state animate-fade-in">
        <div className="success-checkmark">
          <CheckCircle2 size={48} />
        </div>
        <h3>Reservation Initialized!</h3>
        <p>Your details are saved. Complete payment to receive your verifiable PNR instantly via email.</p>
        <button
          className="bf-submit-btn"
          onClick={() => alert('Redirecting to payment gateway...')}
        >
          Complete Payment <ShieldCheck size={18} />
        </button>
      </div>
    );
  }

  return (
    <div className="bf-card">
      {/* Header strip */}
      <div className="bf-header">
        <div className="bf-header-left">
          <div className="bf-airline-chip">
            <PlaneTakeoff size={14} />
            <span>BOARDING PASS</span>
          </div>
          <h3 className="bf-title">Get Onward Ticket</h3>
          <p className="bf-subtitle">Delivered to your inbox in under 2 mins</p>
        </div>
        <div className="bf-price-chip">
          <span className="bf-price-from">from</span>
          <span className="bf-price-amount">$12</span>
        </div>
      </div>

      {/* Dashed tear line */}
      <div className="bf-tear-line">
        <div className="bf-notch bf-notch-left" />
        <div className="bf-dashes" />
        <div className="bf-notch bf-notch-right" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="bf-form">

        {/* Row 1 — Name + Email */}
        <div className="bf-row">
          <div className="bf-field">
            <label className="bf-label">
              <User size={13} /> Full Name
            </label>
            <div className="bf-input-wrap">
              <input
                {...register('name', { required: 'Name is required' })}
                placeholder="As on passport"
                className={`bf-input ${errors.name ? 'bf-input-error' : ''}`}
              />
            </div>
            {errors.name && <span className="bf-error">{errors.name.message}</span>}
          </div>

          <div className="bf-field">
            <label className="bf-label">
              <Mail size={13} /> Email Address
            </label>
            <div className="bf-input-wrap">
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
                })}
                placeholder="Ticket delivered here"
                className={`bf-input ${errors.email ? 'bf-input-error' : ''}`}
              />
            </div>
            {errors.email && <span className="bf-error">{errors.email.message}</span>}
          </div>
        </div>

        {/* Row 2 — Route with swap visual */}
        <div className="bf-route-row">
          <div className="bf-field bf-field-route">
            <label className="bf-label">
              <PlaneTakeoff size={13} /> Departure
            </label>
            <div className="bf-input-wrap">
              <input
                {...register('from', { required: 'Required' })}
                placeholder="City or Airport (e.g. LHR)"
                className={`bf-input ${errors.from ? 'bf-input-error' : ''}`}
              />
            </div>
            {errors.from && <span className="bf-error">{errors.from.message}</span>}
          </div>

          <div className="bf-swap-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3L4 7l4 4" /><path d="M4 7h16" />
              <path d="M16 21l4-4-4-4" /><path d="M20 17H4" />
            </svg>
          </div>

          <div className="bf-field bf-field-route">
            <label className="bf-label">
              <PlaneLanding size={13} /> Destination
            </label>
            <div className="bf-input-wrap">
              <input
                {...register('to', { required: 'Required' })}
                placeholder="City or Airport (e.g. BKK)"
                className={`bf-input ${errors.to ? 'bf-input-error' : ''}`}
              />
            </div>
            {errors.to && <span className="bf-error">{errors.to.message}</span>}
          </div>
        </div>

        {/* Row 3 — Date + Passengers */}
        <div className="bf-row">
          <div className="bf-field">
            <label className="bf-label">
              <Calendar size={13} /> Travel Date
            </label>
            <div className="bf-input-wrap">
              <input
                type="date"
                {...register('date', { required: 'Date is required' })}
                className={`bf-input ${errors.date ? 'bf-input-error' : ''}`}
              />
            </div>
            {errors.date && <span className="bf-error">{errors.date.message}</span>}
          </div>

          <div className="bf-field">
            <label className="bf-label">
              <Users size={13} /> Passengers
            </label>
            <div className="bf-input-wrap">
              <select {...register('passengers')} className="bf-input bf-select">
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? 'Passenger' : 'Passengers'}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bf-submit-btn ${isSubmitting ? 'bf-submitting' : ''}`}
        >
          {isSubmitting ? (
            <span className="bf-loader">
              <span className="bf-spinner" /> Generating PNR...
            </span>
          ) : (
            <>
              <Zap size={18} />
              Secure My Onward Ticket — $12
              <PlaneTakeoff size={18} className="bf-plane-icon" />
            </>
          )}
        </button>

        {/* Trust row */}
        <div className="bf-trust-row">
          <span><ShieldCheck size={13} /> 256-bit Secure</span>
          <span>⚡ Instant Delivery</span>
          <span>✓ Money-back</span>
        </div>
      </form>

      {/* Barcode strip */}
      <div className="bf-barcode-strip">
        <div className="bf-notch bf-notch-left" />
        <div className="bf-dashes" />
        <div className="bf-notch bf-notch-right" />
        <div className="bf-barcode-inner">
          <div className="bf-barcode-bars" />
          <span className="bf-barcode-serial">
            PNR: {Math.random().toString(36).substring(2, 8).toUpperCase()} · ONWARDSKY
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
