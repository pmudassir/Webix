import { faqData } from "@data";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { ExpandMoreOutlined } from '@mui/icons-material';


const FAQ = () => {
    return (
        <div className="bg-white rounded-3xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 text-center text-green-950">Common Questions</h2>
            <div className="flex flex-col items-center">
                {faqData.map((item) => (
                    <Accordion key={item.id} elevation={0} square className="w-full max-w-3xl border border-gray-200 rounded mb-4">
                        <AccordionSummary
                            expandIcon={<ExpandMoreOutlined />}
                            aria-controls={`faq-content-${item.id}`}
                            id={`faq-header-${item.id}`}
                        >
                            <Typography variant="h6" component="h3">
                                {item.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{item.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
