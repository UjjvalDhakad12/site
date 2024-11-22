import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
    {
        label: 'HTML Basics',
        description: `HTML (Hypertext Markup Language) is the foundational markup language for building web pages. It defines the structure of the website, allowing you to arrange content like text, images, and links. You will use HTML tags to represent elements like headings, paragraphs, links, and more, creating a webpage's skeleton that other technologies will build upon.`,
    },
    {
        label: 'CSS Fundamentals',
        description: `CSS (Cascading Style Sheets) is used to control the presentation of a web page written in HTML. It handles the layout, colors, fonts, spacing, and overall style of the page. Using CSS, you can make your site responsive to different screen sizes and add interactivity through animations and transitions.`,
    },
    {
        label: 'JavaScript Essentials',
        description: `JavaScript is a powerful programming language that enables dynamic functionality on web pages. It allows you to interact with elements on a page, handle user input, perform calculations, and update content without reloading the page. JavaScript is key to building interactive and complex web applications.`,
    },
    {
        label: 'React Basics',
        description: `React is a JavaScript library for building user interfaces. It allows you to build reusable components that make the development process faster and more modular. React's declarative syntax makes it easy to manage UI updates and state changes in your application.`,
    },
    {
        label: 'Next.js Framework',
        description: `Next.js is a React-based framework designed to create fast and scalable web applications. It provides automatic server-side rendering (SSR), static site generation (SSG), and other optimizations to improve performance and SEO. Next.js also simplifies routing and includes built-in support for API routes.`,
    },
    {
        label: 'Node.js Backend',
        description: `Node.js is a runtime environment that allows JavaScript to be run on the server. It’s commonly used to create backends for web applications, APIs, and real-time services. With Node.js, you can handle requests, integrate databases, and build full-stack applications with JavaScript.`,
    },
];

export default function Hero() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box sx={{ backgroundImage:"url('./pexels-pixabay-247791.jpg')", minHeight: '100vh', display: 'flex', justifyContent: 'center',height:'100%', alignItems: 'center' }}>
            {/* Content Box with Paper */}
            <Box sx={{ maxWidth: 700, backgroundColor: 'white', borderRadius: '8px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 50,
                        paddingLeft: 3,
                        backgroundColor: '#1976d2',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '20px',
                        width: '100%',
                    }}
                >
                    <Typography variant="h6">{steps[activeStep].label}</Typography>
                </Paper>

                {/* Content Box */}
                <Box
                    sx={{
                        height: 280,
                        maxWidth: 600,
                        width: '100%',
                        padding: 3,
                        backgroundColor: 'white',
                        boxSizing: 'border-box',
                        overflowY: 'auto', // Prevent overflow
                        textOverflow: 'ellipsis', // Ensure no text overflow in case of long descriptions
                        wordWrap: 'break-word', // Wrap long words
                    }}
                >
                    <Typography variant="body1" sx={{ fontSize: '16px', color: '#333', lineHeight: 1.6 }}>
                        {steps[activeStep].description}
                    </Typography>
                </Box>

                {/* Stepper Control Box */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2, backgroundColor: '#f5f5f5', borderTop: '1px solid #ddd' }}>
                    <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        sx={{
                            backgroundColor: '#1976d2',
                            color: 'white',
                            fontWeight: 'bold',
                            textTransform: 'none',
                            padding: '6px 20px',
                            '&:hover': {
                                backgroundColor: '#1565c0',
                            },
                        }}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight sx={{ color: 'white' }} />
                        ) : (
                            <KeyboardArrowLeft sx={{ color: 'white' }} />
                        )}
                        Back
                    </Button>

                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                        sx={{
                            backgroundColor: '#1976d2',
                            color: 'white',
                            fontWeight: 'bold',
                            textTransform: 'none',
                            padding: '6px 20px',
                            '&:hover': {
                                backgroundColor: '#1565c0',
                            },
                        }}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft sx={{ color: 'white' }} />
                        ) : (
                            <KeyboardArrowRight sx={{ color: 'white' }} />
                        )}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
