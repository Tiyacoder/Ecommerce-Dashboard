import React from 'react';
import {
  ShoppingCart,
  Star,
  Package,
  Phone,
  Mail,
  Globe,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Youtube,
  MoreHorizontal
} from 'lucide-react';

export default function UserProfile() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '24px', height: '100%' }}>
          {/* Left Column - User Information */}
          <div style={{ flex: '1', maxWidth: '50%' }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              height: 'fit-content'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: 0 }}>User_information</h2>
                <MoreHorizontal style={{ width: '20px', height: '20px', color: '#9ca3af' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
                <div style={{ marginBottom: '16px' }}>
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                    alt="Miron Mahmud"
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      border: '4px solid #3b82f6'
                    }}
                  />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', margin: '0 0 4px 0' }}>Miron Mahmud</h3>
                <p style={{ color: '#6b7280', margin: 0 }}>@mironcoder</p>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>Communication</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Phone style={{ width: '20px', height: '20px', color: '#3b82f6' }} />
                    <span style={{ color: '#3b82f6' }}>+91 987-654-3210</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Mail style={{ width: '20px', height: '20px', color: '#3b82f6' }} />
                    <span style={{ color: '#3b82f6' }}>demo@example.com</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Globe style={{ width: '20px', height: '20px', color: '#3b82f6' }} />
                    <span style={{ color: '#3b82f6' }}>examplehotash.com</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <MapPin style={{ width: '20px', height: '20px', color: '#3b82f6' }} />
                    <span style={{ color: '#374151' }}>1Hd- 50, 010 Avenue, NY 90001 United States</span>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>Biography</h4>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>Elsewhere</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                  <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    backgroundColor: '#1d4ed8',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}>
                    <Facebook style={{ width: '16px', height: '16px' }} />
                    <span>Facebook</span>
                  </button>
                  <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    backgroundColor: '#0ea5e9',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}>
                    <Twitter style={{ width: '16px', height: '16px' }} />
                    <span>Twitter</span>
                  </button>
                  <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    backgroundColor: '#1e40af',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}>
                    <Linkedin style={{ width: '16px', height: '16px' }} />
                    <span>Linkedin</span>
                  </button>
                  <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    backgroundColor: '#10b981',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}>
                    <MessageCircle style={{ width: '16px', height: '16px' }} />
                    <span>Whatsapp</span>
                  </button>
                </div>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  backgroundColor: '#dc2626',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '14px',
                  cursor: 'pointer',
                  width: '100%'
                }}>
                  <Youtube style={{ width: '16px', height: '16px' }} />
                  <span>Youtube</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Statistics and Activities */}
          <div style={{ flex: '1', maxWidth: '50%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
              <div style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                borderRadius: '16px',
                padding: '24px',
                color: 'white'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <ShoppingCart style={{ width: '32px', height: '32px', opacity: 0.8 }} />
                  <div style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <ShoppingCart style={{ width: '16px', height: '16px' }} />
                  </div>
                </div>
                <div style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '4px' }}>5789</div>
                <div style={{ fontSize: '14px', opacity: 0.9 }}>Total_orders</div>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #fb923c 0%, #facc15 100%)',
                borderRadius: '16px',
                padding: '24px',
                color: 'white'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <Star style={{ width: '32px', height: '32px', opacity: 0.8 }} />
                  <div style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Star style={{ width: '16px', height: '16px' }} />
                  </div>
                </div>
                <div style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '4px' }}>2373</div>
                <div style={{ fontSize: '14px', opacity: 0.9 }}>Total_reviews</div>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #4ade80 0%, #10b981 100%)',
                borderRadius: '16px',
                padding: '24px',
                color: 'white'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <Package style={{ width: '32px', height: '32px', opacity: 0.8 }} />
                  <div style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Package style={{ width: '16px', height: '16px' }} />
                  </div>
                </div>
                <div style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '4px' }}>7893</div>
                <div style={{ fontSize: '14px', opacity: 0.9 }}>Total_products</div>
              </div>
            </div>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              flex: '1'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: 0 }}>Recent Activities</h2>
                <MoreHorizontal style={{ width: '20px', height: '20px', color: '#9ca3af' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#9ca3af',
                    borderRadius: '50%',
                    marginTop: '8px',
                    flexShrink: 0
                  }}></div>
                  <div style={{ flex: '1' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontWeight: '500', color: '#111827' }}>Your account is logged in</span>
                      <span style={{ fontSize: '14px', color: '#6b7280' }}>45 min ago</span>
                    </div>
                    <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '12px', lineHeight: '1.5' }}>
                      You recently signed in from a Chrome browser on a Windows device located in Dubai. This was recognized as a new login instance for your account. If this wasn’t you, we recommend changing your password immediately.                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <img
                      src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        alt="Miron Mahmud"
                        style={{ width: '24px', height: '24px', borderRadius: '50%' }}
                      />
                      <span style={{ fontSize: '14px', color: '#374151' }}>Miron Mahmud</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#9ca3af',
                    borderRadius: '50%',
                    marginTop: '8px',
                    flexShrink: 0
                  }}></div>
                  <div style={{ flex: '1' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontWeight: '500', color: '#111827' }}>Current language has been changed</span>
                      <span style={{ fontSize: '14px', color: '#6b7280' }}>24 hr ago</span>
                    </div>
                    <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '12px', lineHeight: '1.5' }}>
                      You updated your default language preference from English to German. This change will reflect across your dashboard, forms, and email notifications. If this was accidental, you can revert it anytime in your profile settings.                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: '#dc2626',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <div style={{ width: '12px', height: '12px', backgroundColor: '#10b981', borderRadius: '50%' }}></div>
                      </div>
                      <span style={{ fontSize: '14px', color: '#374151' }}>Bengali Language</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#9ca3af',
                    borderRadius: '50%',
                    marginTop: '8px',
                    flexShrink: 0
                  }}></div>
                  <div style={{ flex: '1' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontWeight: '500', color: '#111827' }}>Asked about this product</span>
                      <span style={{ fontSize: '14px', color: '#6b7280' }}>Yesterday</span>
                    </div>
                    <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                      You submitted a support query regarding the AI-based ECG diagnostic software for telemedicine applications. Our support team will get back to you within 24 hours with technical documentation and setup assistance. In the meantime, feel free to check out the FAQ and GitHub repo for quick answers.                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* End Right Column */}
        </div>
      </div>
    </div>
  );
}
