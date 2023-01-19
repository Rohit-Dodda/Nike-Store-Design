import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectTotalQuantity, setOpenCart } from "../app/CartSlice.js"
import { selectWishListTotalQuantity, setOpenWishlist } from '../app/WishlistSlice.js'

import{ HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';

const Navbar = () => {

  const [navState, setNavState] = useState(false);
  const dispatch = useDispatch();
  const totalQty = useSelector(selectTotalQuantity)

  const wishlistTotalQty = useSelector(selectWishListTotalQuantity)
  
  const onWishlistToggle = () => {
    dispatch(setOpenWishlist({
      wishlistState: true,
    }))
  }

  const onCartToggle = () => {
    dispatch(setOpenCart({
      cartState: true,
    }))
  }

  const onNavScroll = () => {
    if(window.scrollY > 50) {
      setNavState(true)
    } else {
      setNavState(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onNavScroll);

    return () => {
      window.removeEventListener('scroll', onNavScroll);
    }
  }, [])

  return (
    <header className={!navState ? 'absolute top-7 left-0 right-0 opacity-100 z-50' : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] '}>
      <nav className="flex items-center justify-between nike-container">
        <div className="flex items-center">
          <img src={logo} alt="logo/img" className={`w-16 h-auto ${navState && "filter brightness-0 duration-500 transition-all"}`} />
        </div>
        <ul className="flex flex-row items-center justify-end gap-12 nike-container">
          <li className="grid items-center justify-start">
            <MagnifyingGlassIcon className={`icon-style ${navState && "text-slate-900  transition-all duration-500"}`}/>
          </li>
          <li className="grid items-center">
            <button 
            type='button' 
            onClick={onWishlistToggle} 
            className='border-none outline-none active:scale-110 transition-all duration-300 relative'
            >
              <HeartIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
              <span className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-600 ${navState ? 'bg-slate-900 text-slate-100 shadow-slate-900' : 'bg-slate-100 text-slate-900 drop-shadow-lg font-extrabold shadow-slate-100'}`}>{wishlistTotalQty}</span>
            </button>
          </li>
          <li className="grid items-center">
            <button 
            type='button' 
            onClick={onCartToggle} 
            className='border-none outline-none active:scale-110 transition-all duration-300 relative'
            >
              <ShoppingBagIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-500"}`} />
              <span className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-600 ${navState ? 'bg-slate-900 text-slate-100 shadow-slate-900' : 'bg-slate-100 text-slate-900 drop-shadow-lg font-extrabold shadow-slate-100'}`}>{totalQty}</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}


export default Navbar
