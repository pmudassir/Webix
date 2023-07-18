import Form from '@components/Form';
import { DesktopWindowsOutlined, PhonelinkOutlined, WorkspacePremiumOutlined } from '@mui/icons-material';

const Booking = () => {
    return (
        <div className="flex justify-center">
            <div className="flex items-center w-full max-w-4xl">
                {/* Left Section */}
                <div className="flex flex-col w-1/2 pr-10">
                    <div className="mt-10 flex items-center">
                        <DesktopWindowsOutlined sx={{ fontSize: '50px', color: 'lightblue' }} />
                        <div className="ml-4">
                            <p className="text-lg font-bold">Stunning Templates:</p>
                            <p className="font-light">Get access to stunning templates that will make your website stand out.</p>
                        </div>
                    </div>
                    <div className="mt-10 flex items-center">
                        <PhonelinkOutlined sx={{ fontSize: '50px', color: 'lightblue' }} />
                        <div className="ml-4">
                            <p className="text-lg font-bold">Responsive Design:</p>
                            <p className="font-light">Ensure your website looks great on any device with our mobile-friendly designs.</p>
                        </div>
                    </div>
                    <div className="mt-10 flex items-center">
                        <WorkspacePremiumOutlined sx={{ fontSize: '50px', color: 'lightblue' }} />
                        <div className="ml-4">
                            <p className="text-lg font-bold">Custom Domains:</p>
                            <p className="font-light">Personalize your online presence with custom domains for a professional touch.</p>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-1/2">
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default Booking;