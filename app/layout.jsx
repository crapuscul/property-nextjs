// this file serves as a wrapper for the pages

const MainLayout = ({children}) => {
    return ( <html>
        <body>
            <main>{children}</main>
        </body>
    </html> );
}
 
export default MainLayout;