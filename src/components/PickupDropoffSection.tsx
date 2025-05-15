import LocationIcon from '../assets/LocationIcon';
import TruckIcon from '../assets/TruckIcon';
import type { Destination } from '../types';
import { formatDate, formatTime, getCityFromAddress } from '../utils/utils';

const PickupDropoffSection = ({ destination, type }: { destination: Destination; type: 'PICKUP' | 'DROPOFF' }) => (
    <div className='flex items-center gap-3 justify-around'>
        <div>{type === 'PICKUP' ? <TruckIcon /> : <LocationIcon />}</div>
        <div className='gap-1 flex flex-col'>
            <h1 className='text-[8px] text-[#535455]'>{type}</h1>
            <h1 className='text-[15px]'>{getCityFromAddress(destination.address)}</h1>
            <p className='text-xs text-[#909192] truncate w-[189px]'>{destination.address}</p>
        </div>
        <div className='text-end'>
            <h1 className='text-[10px] text-[#696A6B]'>{formatDate(destination.start_date)}</h1>
            <h1 className='text-[12px] font-medium !mt-1'>{formatTime(destination.start_date)}</h1>
        </div>
    </div>
);

export default PickupDropoffSection;
