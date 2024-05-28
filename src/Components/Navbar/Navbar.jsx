import React from 'react'
import logo from '../../unflukelogo.png'
import bellicon from '../../bell-icon.d99e8edc.png'
import coinincon from '../../coin.9bfaef7e.jpeg'
import monkeyicon from '../../monkey.5456259d.jpg'
import './Navbar.css'
const Navbar = () => {
    let cnt = 0
    return (
        <div className='container p-4 '>
            <div className="firstnav flex justify-between">
                <div className="cl1">
                    <img className='inline-block w-[120px] m-2' src={logo} alt="" />
                </div>
                <div className="cl2">
                    <img src={bellicon} className='  inline-block w-[30px] object-contain m-2' alt="" />
                    <img src={coinincon} className=' inline-block w-[30px] object-contain m-2' alt="" />{cnt}
                    <img src={monkeyicon} className=' inline-block w-[30px] object-contain m-2' alt="" />
                </div>
            </div>
            <hr />
            <div className="secondNav mt-2 p-2">
                <div className="items flex justify-evenly items-center  ">

                    <span className='kitty'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-[10px] mb-[2px] inline bi bi-microsoft" viewBox="0 0 16 16" ><path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z" ></path></svg>
                        LeaderBoard
                    </span>
                    <span className="  bg-[#FEF6F9] border-[1px] border-[#E27498] inline-block mx-2 font-semibold p-2  hello rounded-md">Historical Trading</span>
                    <span className=" bg-[#FEF6F9] border-[1px] border-[#E27498] inline-block mx-2 font-semibold p-2  hello rounded-md">Historical Chart</span>
                    <span className=" bg-[#FEF6F9] border-[1px] border-[#E27498]  inline-block mx-2 font-semibold p-2 hello rounded-md">Scanners</span>
                    <span className="  bg-[#FEF6F9] border-[1px] border-[#E27498] inline-block mx-2 font-semibold p-2 hello rounded-md">Alerts</span>
                    <span className="  bg-[#FEF6F9] border-[1px] border-[#E27498] inline-block mx-2 font-semibold p-2 hello rounded-md">Basic Backtest</span>
                    <span className=" bg-[#FEF6F9] border-[1px] border-[#E27498]  inline-block mx-2 font-semibold p-2  hello rounded-md">Advanced Backtest</span>
                    <span className=" bg-[#FEF6F9] border-[1px] border-[#E27498]  inline-block mx-2 font-semibold p-2  hello rounded-md">Pricing</span>
                    <span className="kitty">My earnings</span>

                </div>
            </div>



        </div>
    )
}

export default Navbar