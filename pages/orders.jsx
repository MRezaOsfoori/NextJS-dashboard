import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../data/data.js';

const orders = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-end px-4 pt-4'>
        <h1>سفارش ها</h1>
        
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto items-right '>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-between cursor-pointer'>
            <span className='grid text-right'>سفارش</span>
            <span className=' grid text-right'>وضعیت</span>
            <span className='hidden md:grid  text-right'>آخرین سفارش</span>
            <span className='hidden sm:grid text-right'>روش پرداخت</span>
          </div>
          <ul className=''>
            {data.map((order, id) => (
              <li
                key={id}
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-right justify-between cursor-pointer'
              >
                <div className='flex items-center pl-5 '>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <FaShoppingBag className='text-purple-800' />
                  </div>
                  <div className='pl-4 '>
                    <p className='text-gray-800 font-bold'>
                    <div className='flex items-center  '>  <p>میلون تومان</p> <p className = 'font-bold ml-1 '> {order.total.toLocaleString()}</p></div>
                    </p>
                    <p className='text-gray-800 text-sm'>{order.name.first}</p>
                  </div>
                </div>
                <p className='text-gray-600 sm:text-left text-right flex justify-end items-center   '>
                  <span
                    className={ 
                      order.status == 'درحال انجام'
                        ? 'bg-green-200 p-2 rounded-lg '
                        : order.status == 'تکمیل'
                        ? 'bg-blue-200 p-2 rounded-lg'
                        : 'bg-yellow-200 p-2 rounded-lg'
                    }
                  >
                    {order.status}
                  </span>
                </p>
                <p className='hidden md:flex  justify-end items-center'>{order.date}</p>
                <div className='sm:flex hidden justify-end items-center'>
                  <p className='text-right flex justify-end'>{order.method}</p>
                  
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orders;
