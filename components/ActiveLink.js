import { withRouter } from 'next/router'


const ActiveLink = ({ router, href, children }) => {

   ( function prefetchPages(){
        if (typeof window !== "undefined"){
            router.prefetch(router.pathname)
        }
    })()


    const handleClick = event =>{
        event.preventDefault();
        router.push(href)
    }

    const isCurrentPath = router.pathname === href || router.asPath === href;
    return ( 

        <a href={href} onClick={handleClick}
        style={{
            textDecoration:"none",
            // fontWeight:isCurrentPath ? "bold" : "normal",
            color: isCurrentPath ? "#F8CF2C" : "#ffff"
        }}>
            {children}
        </a>
     );
}
 
export default withRouter (ActiveLink);