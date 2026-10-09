import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#e0f2fe',
          backgroundImage:
            'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 35%, #bae6fd 70%, #7dd3fc 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Soft Background Blur Shape */}
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.65)',
            filter: 'blur(90px)',
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: 10,
            gap: '16px',
            padding: '60px',
          }}
        >
          {/* Pill Badge */}
          <div
            style={{
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: '3px',
              backgroundColor: '#0284c7',
              color: '#ffffff',
              padding: '8px 22px',
              borderRadius: '9999px',
              marginBottom: '10px',
              boxShadow: '0 4px 12px rgba(2, 132, 199, 0.2)',
            }}
          >
            ZAIMA MELATI
          </div>

          <h1
            style={{
              fontSize: 84,
              fontWeight: 900,
              color: '#0c4a6e',
              margin: 0,
              letterSpacing: '-3px',
              lineHeight: 1,
            }}
          >
            Software Engineering
          </h1>

          <p
            style={{
              fontSize: 34,
              fontWeight: 700,
              color: '#0369a1',
              margin: 0,
              letterSpacing: '-1px',
            }}
          >
            Building elegant & useful digital products.
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}