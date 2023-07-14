import Image from "next/image"

const Nav = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-start">
                <div style={{ marginTop: "50px", marginLeft: "50px" }}>
                    <Image src="/assets/icons/logo.svg" alt="logo" width={100} height={100} />
                </div>
            </div>
        </div>
    )
}

export default Nav