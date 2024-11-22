import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './About.css'; // Importing the CSS file for styling

export default function About() {
    return (
        <div className="container">
            <div className="container">
                <Accordion defaultExpanded className="accordion-box">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography className="accordion-header">What is Web Development?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="accordion-content">
                            Web development refers to the process of building and maintaining websites. It includes aspects such as web design, web content development, client-side/server-side scripting, and network security configuration.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="accordion-box">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography className="accordion-header">Front-End Development</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="accordion-content">
                            Front-end development focuses on the visual aspects of a website. It involves creating the layout, structure, and design elements that users interact with directly. Technologies like HTML, CSS, JavaScript, and frameworks like React or Angular are used here.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="accordion-box">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        <Typography className="accordion-header">Back-End Development</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="accordion-content">
                            Back-end development refers to the server-side part of web development. It involves working with databases, server configurations, and APIs to ensure that data flows seamlessly between the server and the client-side interface.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="accordion-box">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                    >
                        <Typography className="accordion-header">Full Stack Development</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="accordion-content">
                            Full-stack development involves both front-end and back-end development. Full-stack developers are proficient in both client-side technologies (HTML, CSS, JavaScript) and server-side technologies (Node.js, databases, etc.).
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="accordion-box">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5-content"
                        id="panel5-header"
                    >
                        <Typography className="accordion-header">Web Development Frameworks</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="accordion-content">
                            Web development frameworks are pre-written libraries that make the development process faster and easier. Popular frameworks include React, Angular, Vue for front-end, and Node.js, Django, Ruby on Rails for back-end.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="accordion-box">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel6-content"
                        id="panel6-header"
                    >
                        <Typography className="accordion-header">Web Development Trends</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="accordion-content">
                            The field of web development is constantly evolving. Current trends include Progressive Web Apps (PWAs), Single Page Applications (SPAs), AI and chatbots, responsive design, and the use of modern tools like JAMstack and serverless architecture.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <h1>Write Summation</h1>

            <form action="https://api.web3forms.com/submit" method="POST" className="form-container">
                <input type="hidden" name="access_key" value="033d9d92-fc17-4b7c-ad17-b00b5836ec9c" />
                <input
                    className="form-input"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                />
                <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                />
                <textarea
                    className="form-input"
                    name="message"
                    placeholder="Your Message"
                    required
                ></textarea>
                <input className="hidden" type="checkbox" name="botcheck" />
                <button className="form-submit-btn" type="submit">
                    Submit Form
                </button>
            </form>
        </div>
    );
}
