import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Hero from './Hero';
import Footer from './components/Footer';

const steps = [
    {
        label: 'HTML Structure',
        description: `In this step, you'll create the basic HTML structure for your web page, defining key elements like header, main content, and footer.`,
    },
    {
        label: 'CSS Styling',
        description: `Next, you'll apply styles using CSS to make the page look good. You can choose between external CSS, inline styles, or CSS-in-JS for styling your React components.`,
    },
    {
        label: 'JavaScript Functionality',
        description: `Now, you'll add JavaScript to your project to add interactivity. This could involve form validation, handling button clicks, or other user interactions.`,
    },
    {
        label: 'React Components',
        description: `You'll now refactor your app to use React components, which allow you to break the UI into reusable building blocks, making the app dynamic and interactive.`,
    },
    {
        label: 'Next.js Integration',
        description: `Next.js helps you with routing, server-side rendering, and API integration. You'll use Next.js for navigation and optimization of your app's performance.`,
    },
    {
        label: 'Node.js Backend',
        description: `Finally, Node.js is used to create a backend server. It helps you handle requests, store data, and provide an API for your frontend to interact with.`,
    },
];

export default function Home() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div>
            <Hero />
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    height: '100vh', // Ensures the content is vertically centered
                    backgroundColor: '#f4f4f4', // Optional: adds a background color
                }}
            >

                <Box sx={{ maxWidth: 600 }}>
                    <h1>This is my roadmap</h1>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel
                                    optional={
                                        index === steps.length - 1 ? (
                                            <Typography variant="caption">Last step</Typography>
                                        ) : null
                                    }
                                >
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    <Typography>{step.description}</Typography>
                                    <Box sx={{ mb: 2 }}>
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                            <Typography>All steps completed - you&apos;re finished</Typography>
                            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                Reset
                            </Button>
                        </Paper>
                    )}
                </Box>
            </Box>
            <Footer />
        </div>
    );

}
