import TruckDetails from '../assets/TruckDetails';
import type { Destination } from '../types';
import { getCityFromAddress } from '../utils/utils';

interface PickupDropoffDetailsProps {
    destination: Destination;
    type: 'PICKUP' | 'DROPOFF';
    active: boolean;
    onClick: () => void;
}

const PickupDropoffDetails = ({ destination, type, active, onClick }: PickupDropoffDetailsProps) => (
    <div className='flex items-center gap-6 !mt-4 cursor-pointer' onClick={onClick}>
        <div className='w-10'>
            {active ? (
                <span className='border-1 border-[#FFFF00] rounded-full w-10 h-10 flex items-center justify-center'>
                    <span className='bg-[#FFFF00] rounded-full w-8 h-8 flex items-center justify-center'>
                        <TruckDetails />
                    </span>
                </span>
            ) : (
                <span className='bg-[#0E151A] rounded-full w-9 h-9 flex items-center justify-center shadow-[0px_4px_4px_rgba(0,0,0,0.5)]'>
                    <span className='border-1 border-[#26333C] rounded-full w-6 h-6'></span>
                </span>
            )}
        </div>
        <div className='gap-1 flex flex-col'>
            <h1 className='text-[8px] text-[#535455]'>{type}</h1>
            <h1 className='text-[15px]'>{getCityFromAddress(destination.address)}</h1>
            <p className='text-xs text-[#909192] truncate w-[189px] md:w-full'>{destination.address}</p>
            <div className='bg-[#16191CFE] rounded-xl w-[90px] !p-1 flex items-center justify-center gap-2'>
                {active && <p className='w-2.5 h-2.5 rounded-full bg-[#0C7DED]'></p>}
                <h1 className='text-[10px] flex items-center gap-2'>{active ? 'Accepted' : 'On hold'}</h1>
            </div>
        </div>
    </div>
);

export default PickupDropoffDetails;
