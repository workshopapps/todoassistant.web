import { NavLink } from 'react-router-dom';
import { subRoute } from './static';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../../layout/FAQ/FAQ.scss"

const LowerLevel = () => {
    return (
      <div className='Topp '>
        <div className="faq container ">
          {
            subRoute.map(route => {
              return <NavLink to={route.location}  key={route.id} className={({isActive})=>{
                return (
                  "links" + (isActive ? "links activee" : "links inactivee")
                )
              }}>
                {route.heading}
                <div className="line"></div>
              </NavLink>
            })
          }
        </div>
        <Outlet />
        <div className="text container ">
          <p className='contact'>Cannot find the answer you’re looking for?
            Please chat with our friendly team.</p>
          <Link to="/contact">
            <p className='contact-sub'>Contact Us</p>
          </Link>
  
        </div>
      </div>
    )
  };
  
  export default LowerLevel;
  