import React from 'react';

const coreValues = [
  {
    id: 1,
    title: 'Innovation',
    description: 'Continually evolving to deliver superior strategies.',
    color: '#d9ff00',
    position: 'left'
  },
  {
    id: 2,
    title: 'Integrity',
    description: 'Transparent, ethical, and accountable in every engagement.',
    color: '#b39ddb',
    position: 'right'
  },
  {
    id: 3,
    title: 'Engagement',
    description: 'Building meaningful, long-term client relationships.',
    color: '#00403d',
    position: 'left'
  },
  {
    id: 4,
    title: 'Excellence',
    description: 'Delivering quality, precision, and attention to detail.',
    color: '#d9ff00',
    position: 'right'
  },
  {
    id: 5,
    title: 'Growth',
    description: 'Driving sustained success for our clients and our organization.',
    color: '#b39ddb',
    position: 'left'
  },
  {
    id: 6,
    title: 'Results',
    description: 'Focused on measurable outcomes and tangible business impact.',
    color: '#00403d',
    position: 'right'
  }
];

const ZigzagCoreValues = () => {
  return (
    <div
      style={{
        padding: '6rem 2rem',
        backgroundColor: '#b3cccc',
        position: 'relative',
        minHeight: '80vh'
      }}
    >
      {/* Title */}
      <h3 
        style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '4rem',
          color: '#d9ff00',
          textShadow: '2px 2px 4px rgba(0, 64, 61, 0.3)'
        }}
      >
        Our Core Values
      </h3>

      {/* Values Cards in Zigzag Pattern */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {coreValues.map((value) => (
          <div
            key={value.id}
            style={{
              display: 'flex',
              justifyContent: value.position === 'left' ? 'flex-start' : 'flex-end',
              marginBottom: '4rem',
              marginLeft: value.position === 'left' ? '0' : 'auto',
              marginRight: value.position === 'right' ? '0' : 'auto'
            }}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '2rem',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                padding: '3rem',
                maxWidth: '400px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                border: `3px solid ${value.color}`
              }}
            >
              {/* Content */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h4
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    color: value.color === '#d9ff00' ? '#00403d' : value.color
                  }}
                >
                  {value.title}
                </h4>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: '#00403d',
                    opacity: 0.8
                  }}
                >
                  {value.description}
                </p>
              </div>

              {/* Number badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  backgroundColor: value.color,
                  color: value.color === '#d9ff00' ? '#00403d' : '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  zIndex: 3
                }}
              >
                {value.id}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZigzagCoreValues;
