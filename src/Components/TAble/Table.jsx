import React from 'react'
import './Table.css'
const Table = () => {
    return (
        <div className=' p-2 mt-6  flex justify-center items-center '>
            <table className='w-fit containerss'>
                <tr className=''>
                    <th className=' p-4 text-center w-[180px]  bg-green-100 bg-opacity-35 text-[18px]'>S.no</th>
                    <th className=' p-4 text-center w-[180px] bg-green-100 bg-opacity-35 text-[18px]'>Rank Name</th>
                    <th className=' p-4 text-center w-[180px] bg-green-100 bg-opacity-35 text-[18px]'>Calmar Ratio</th>
                    <th className=' p-4 text-center w-[180px] bg-green-100 bg-opacity-35 text-[18px]'>Overall ProfitAvg.</th>
                    <th className=' p-4 text-center w-[180px] bg-green-100 bg-opacity-35 text-[18px]'>Daily</th>
                    <th className=' p-4 text-center w-[180px] bg-green-100 bg-opacity-35 text-[18px]'>ProfitWin% (Day)</th>
                    <th className=' p-4 text-center w-[180px] bg-green-100 bg-opacity-35 text-[18px]'>Price (Rs)</th>
                    <th className=' p-4 text-center w-[180px] bg-green-100 bg-opacity-35 text-[18px] '>Action</th>
                </tr>
                <tr className='m-2'>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>1</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>Selling with reEntry</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>3.96</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>381845</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>319.54</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>0.65</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>-</td>
                    <td className='text-center p-4  bg-green-100 bg-opacity-35 font-semibold text-[16px] view'>View</td>
                </tr>
                <tr>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>2</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>strategy_name</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>3.96</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>383145</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>429.54</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>0.12</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>-</td>
                    <td className='text-center p-4  bg-green-100 bg-opacity-35 font-semibold text-[16px] view'>View</td>                </tr>
                <tr>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>3</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>Selling with reEntry</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>3.96</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>381845</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>319.54</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>0.65</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>-</td>
                    <td className='text-center p-4  bg-green-100 bg-opacity-35 font-semibold text-[16px] view'>View</td>                </tr>
                <tr>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>4</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>Premium</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>5.26</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>678845</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>331.54</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>0.15</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>-</td>
                    <td className='text-center p-4  bg-green-100 bg-opacity-35 font-semibold text-[16px] view'>View</td>                </tr>
                <tr>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>5</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>weight</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>3.23</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>384145</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>219.54</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>0.425</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>-</td>
                    <td className='text-center p-4  bg-green-100 bg-opacity-35 font-semibold text-[16px] view'>View</td>                </tr>
                <tr>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>6</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>Iron_codor</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>3.96</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>341845</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>331.54</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>0.15</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>-</td>
                    <td className='text-center p-4  bg-green-100 bg-opacity-35 font-semibold text-[16px] view'>View</td>                </tr>
                <tr>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>7</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>Selling with reEntry</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>4.2</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>342845</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>332.54</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>0.35</td>
                    <td className='text-center p-4  bg-[#FEF6F9] font-semibold text-[16px]'>-</td>
                    <td className='text-center p-4  bg-green-100 bg-opacity-35 font-semibold text-[16px] view'>View</td>
                </tr>
            </table>
        </div>
    )
}

export default Table