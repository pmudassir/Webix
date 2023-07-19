import Image from "next/image";

const Nav = () => {
    return (
        <nav className="absolute top-0 left-0 right-0 p-4 bg-transparent">
            <div className="container mx-auto flex items-center">
                <div className="flex items-center">
                    <div style={{ marginTop: "10px", marginLeft: "20px" }}>
                        <Image src="/assets/icons/brand-logo.png" alt="logo" width={100} height={100} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;