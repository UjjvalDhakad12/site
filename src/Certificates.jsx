import React from 'react'

const Certificates = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',  // Stack vertically
            gap: '30px',  // Adds a 30px gap between the divs
            alignItems: 'center',
            marginTop:'5rem'
              // Center the divs horizontally
        }}>
            {/* First Box */}
            <div style={{
                backgroundImage: 'url(./c1.png)',
                backgroundSize: 'contain',   // Ensure the image fits the div but doesn't overflow
                backgroundPosition: 'center',  // Center the image inside the div
                backgroundRepeat: 'no-repeat',  // Prevent the image from repeating
                width: '700px',  // Width of the box
                height: '300px',  // Height of the box
                borderRadius: '8px',  // Optional: Adds rounded corners
            }}></div>

            {/* Second Box */}
            <div style={{
                backgroundImage: 'url(./c1.png)',
                backgroundSize: 'contain',  // Scale the image inside the div (larger but contained)
                backgroundPosition: 'center',  // Center the image inside the div
                backgroundRepeat: 'no-repeat',  // Prevent image from repeating
                width: '500px',
                height: '300px',
                borderRadius: '8px',  // Optional: Adds rounded corners
            }}></div>
        </div>

    )
}

export default Certificates