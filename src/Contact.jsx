import React from 'react';

const Game = () => {
    return (
        <div style={styles.boxContainer}>
            <h2 style={styles.boxHeading}>Click the Image Below</h2>
            <div style={styles.imageRow}>
                <div style={styles.imageBox}>
                    <h3 style={styles.imageHeading}>Lottery Game</h3>
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="./p1.png" // Replace with your image URL
                            alt="Example"
                            style={styles.clickableImage}
                        />
                    </a>
                </div>
                <div style={styles.imageBox}>
                    <h3 style={styles.imageHeading}>Quiz Game</h3>
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="./p2.png" // Replace with your image URL
                            alt="Example"
                            style={styles.clickableImage}
                        />
                    </a>
                </div>
                <div style={styles.imageBox}>
                    <h3 style={styles.imageHeading}>Sanke game</h3>
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                        <video
                            src="./sanke.mp4" // Replace with your video URL
                            alt="Example"
                            style={styles.clickableImage}
                            loop
                            autoPlay
                            muted 
                        />
                    </a>
                </div>

            </div>
        </div>
    );
};

const styles = {
    // Box container styles
    boxContainer: {
        width: '100%', // Make the container responsive
        maxWidth: '800px', // Limit the width on large screens
        padding: '20px',
        backgroundColor: '#FFFCF9',
        border: '1px solid #FF6978',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        margin: '20px auto',
        marginTop: '5rem',
    },
    // Heading styles for main container
    boxHeading: {
        fontSize: '1.5rem',
        color: '#FF6978',
        marginBottom: '15px',
    },
    // Flex container for images (1 line by default)
    imageRow: {
        display: 'flex',
        flexWrap: 'wrap', // Allow items to wrap to next line if space is tight
        justifyContent: 'space-between', // Distribute items evenly across the row
        gap: '4rem', // Gap between boxes is 4rem
        marginTop: '15px',
    },
    // Image box styles
    imageBox: {
        flex: '1 1 30%', // Each image box takes 30% width (three boxes per row by default)
        textAlign: 'center',
    },
    // Heading styles for each image box
    imageHeading: {
        fontSize: '1.2rem',
        color: '#FF6978',
        marginBottom: '10px',
    },
    // Clickable image styles
    clickableImage: {
        width: '100%', // Make the image fill the container's width
        height: 'auto',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },

    // Media query for small screens (mobile devices)
    '@media (max-width: 600px)': {
        imageRow: {
            justifyContent: 'center', // Center images on smaller screens
        },
        imageBox: {
            flex: '1 1 100%', // Images take full width on small screens
        },
    },
};

export default Game;
