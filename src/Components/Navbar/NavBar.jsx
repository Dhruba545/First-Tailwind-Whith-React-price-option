import { useState } from "react";
import Link from "../Link/Link";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";



const NavBar = () => {

   const [open , setOpen] = useState(false);


    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/dashboard', name: 'Dashboard' }
      ];
 
      

    return (
        <nav className="text-black bg-yellow-200  shadow-lg px-6">
            <div className="text-2xl " onClick={() => setOpen(!open)}>
                {
                    open === true ? <RxCross2></RxCross2>  :<CiMenuFries className=" md:hidden"></CiMenuFries> 
                }</div>
                
           <ul className={`md:flex absolute md:static duration-1000 rounded-b-xl ${open? 'top-6' : '-top-60'} bg-yellow-200`} >
           {
                routes.map(route =><Link key={route.id} route={route}></Link> )
            }
           </ul>
        </nav>
    );
};

export default NavBar;