import "@styles/globals.css"

export const metadata = {
    title: "Webix",
    description: "Create and Leverage"
}

const RootLayout = ({ children }) => {
    return (
        <html>
            <body>
                <div className='main'>
                    <div className='gradient' />
                </div>
                <main className='app'>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout