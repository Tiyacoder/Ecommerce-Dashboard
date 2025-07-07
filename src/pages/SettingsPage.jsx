import React, { useState } from 'react';

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    siteTitle: '',
    tagline: '',
    emailAddress: '',
    websiteUrl: '',
    description: '',
    sendNotification: true,
    allRegistrationEnabled: true,
    directMessage: false,
    membershipApproval: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    console.log('Saving changes:', formData);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '40px' }}>
      {/* Top Header Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #e5e7eb',
        paddingBottom: '20px',
        marginBottom: '32px'
      }}>
        <div>
          <h1 style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '4px'
          }}>
            Settings
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            margin: 0
          }}>
          </p>
        </div>

        <div style={{ fontSize: '14px', color: '#6b7280' }}>
          <a href="#" style={{ color: '#3b82f6', textDecoration: 'none', marginRight: '6px' }}>Dashboard</a>
          <span style={{ marginRight: '6px' }}> / </span>
          <span>Settings</span>
        </div>
      </div>

      {/* Settings Form Layout */}
      <div style={{ display: 'flex', gap: '40px' }}>
        {/* Left Column */}
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>Informations</h2>
          <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>
            Configure the basic details of your site here, including title, contact details, and a short description. These settings help shape your site's identity and how others view it.
          </p>
        </div>

        {/* Right Form Fields */}
        <div style={{ flex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label style={labelStyle}>Site Title</label>
              <input
                type="text"
                name="siteTitle"
                value={formData.siteTitle}
                onChange={handleInputChange}
                style={inputStyle}
                placeholder="type here"
              />
            </div>

            <div>
              <label style={labelStyle}>Tagline</label>
              <input
                type="text"
                name="tagline"
                value={formData.tagline}
                onChange={handleInputChange}
                style={inputStyle}
                placeholder="type here"
              />
            </div>

            <div>
              <label style={labelStyle}>Email Address</label>
              <input
                type="email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleInputChange}
                style={inputStyle}
                placeholder="type here"
              />
            </div>

            <div>
              <label style={labelStyle}>Website URL</label>
              <input
                type="url"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleInputChange}
                style={inputStyle}
                placeholder="type here"
              />
            </div>
          </div>

          {/* Description */}
          <div style={{ marginTop: '24px' }}>
            <label style={labelStyle}>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={5}
              style={{ ...inputStyle, width: '100%', resize: 'none' }}
              placeholder="Type here..."
            />
          </div>
        </div>
      </div>

      {/* Accessibility Section */}
      <div style={{ marginTop: '48px', display: 'flex', gap: '40px' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>Accessibility</h2>
          <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>
            Control how new users interact with your site and what kind of approvals or notifications are enabled.
          </p>
        </div>

        <div style={{ flex: 2 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { id: 'sendNotification', label: 'Send notification on each user registration' },
              { id: 'allRegistrationEnabled', label: 'All registration is enabled on this site' },
              { id: 'directMessage', label: "You're sent a direct message" },
              { id: 'membershipApproval', label: 'New membership approval' }
            ].map(({ id, label }) => (
              <label key={id} style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#374151' }}>
                <input
                  type="checkbox"
                  name={id}
                  checked={formData[id]}
                  onChange={handleInputChange}
                  style={{ marginRight: '10px', width: '16px', height: '16px' }}
                />
                {label}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div style={{ marginTop: '40px' }}>
        <button
          onClick={handleSave}
          style={{
            backgroundColor: '#3b82f6',
            color: '#fff',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '6px',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center'
          }}
        >
          <svg style={{ width: '16px', height: '16px', marginRight: '8px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Save All Changes
        </button>
      </div>
    </div>
  );
};

const labelStyle = {
  fontSize: '14px',
  fontWeight: '500',
  marginBottom: '6px',
  display: 'block',
  color: '#374151'
};

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  border: '1px solid #d1d5db',
  borderRadius: '6px',
  backgroundColor: '#f3f4f6',
  fontSize: '14px',
  color: '#111827'
};

export default SettingsPage;
