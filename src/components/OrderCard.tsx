import { Link } from 'react-router';
import TransportIcon from '../assets/TransportIcon';
import type { Order } from '../types';
import PickupDropoffSection from './PickupDropoffSection';

const OrderCard = ({ order }: { order: Order }) => {

    const [pickup, dropoff] = order.destinations;
    const isInTransit = () => {
        if (order?.status_string === 'Orden Asignada') return false;
        if (order?.status_string === 'Recolección completada') return true;
    };


    return (
        <div className="!mx-[40px] !mb-[39px] w-[349px] h-[336px] flex flex-col">

            <section className='flex items-center gap-2 !mb-4'>
                <h3 className='text-[17px] text-[#969798] font-medium'>Order</h3>
                <span className='text-[17.3px] font-semibold'>#{order.order_number}</span>
            </section>

            <div className='bg-[#3534344e] rounded-full h-full'>
                <div className="mb-4 gradient-border !rounded-[20px] h-full flex flex-col justify-between">
                    <div className='flex items-center justify-between border-b-[0.6px] border-[#606364] !mb-5'>
                        <div className='flex items-center gap-2 !p-3.5'>
                            <TransportIcon />
                            <h1 className='text-[15.5px]'>{order.type}</h1>
                        </div>
                        <div className='!mr-7'>
                            {isInTransit() ? (
                                <h1 className='text-[10px] flex items-center gap-2'> <p className='w-2.5 h-2.5 rounded-full bg-[#0C7DED]'></p> In Transit</h1>
                            ) : (
                                <h1 className='text-[10px] flex items-center gap-2'>Assigned</h1>
                            )}
                        </div>
                    </div>
                    <div className='!px-5 flex flex-col gap-6'>
                        <PickupDropoffSection destination={pickup} type="PICKUP" />
                        <PickupDropoffSection destination={dropoff} type="DROPOFF" />
                    </div>
                    <div className={`flex space-x-2 text-[13.3px] !mt-6 font-semibold ${isInTransit() ? ' justify-between' : 'justify-end'}`}>
                        {isInTransit() && (
                            <button className="!p-3 w-[199px] rounded-r-full rounded-bl-full !pl-5 button-card">
                                It’s time for pickup
                            </button>
                        )}
                        <Link to={`/${order.order_number}`} className="!p-3 w-[130px] flex items-center justify-around rounded-l-full rounded-br-full button-card">
                            <p>Resume</p>
                            <img src="/visibility.svg" alt="Visibility Icon" />
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderCard;
