const Footer = () => {
    return (
        <footer className="bg-green-950 py-6 px-4 md:px-0">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-white">
                <div className="text-lg font-bold mb-4 md:mb-0">Webix</div>
                <div className="text-sm text-center md:text-right">
                    © {new Date().getFullYear()} Webix. All rights reserved.
                    <div>Email: webix@gmail.com</div>
                    <div>Phone: +1 (123) 456-7890</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;