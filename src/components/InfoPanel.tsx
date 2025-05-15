import { useState } from 'react';
import ChevronIcon from '../assets/ChevronIcon';
import type { Result } from '../types';
import { formatDateComplete } from '../utils/utils';

interface InfoPanelProps {
    selectedType: 'PICKUP' | 'DROPOFF';
    order: Result;
}

const InfoPanel = ({ selectedType, order }: InfoPanelProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!order?.destinations || order.destinations.length < 2) {
        return null; // or handle the error as needed
    }

    const togglePanel = () => {
        setIsExpanded(!isExpanded);
    };
    const destination = selectedType === 'PICKUP' ? order?.destinations[0] : order?.destinations[1];

    return (
        <div className='w-[357px] h-[64px] !ml-[39px] !mt-[50px]'>
            <div className='bg-[#3534344e] rounded-[20px] h-full'>
                <div className='gradient-border flex justify-between relative h-full rounded-[20px] !border-b-[1px] !border-b-[#ffffff33]'>
                    <div
                        className='flex !px-4 w-full justify-between items-center cursor-pointer'
                        onClick={togglePanel}
                    >
                        <h1 className='text-[15px]'>Pickup Data</h1>
                        {isExpanded ? (
                            <ChevronIcon className='w-5 h-5 transition-all' />
                        ) : (
                            <ChevronIcon className='w-5 h-5 transition-all rotate-180' />
                        )}
                    </div>
                </div>
            </div>
            {isExpanded && (
                <div className='!m-4 !space-y-6 !mt-8 text-[15.3px]'>
                    <h1 className='text-sm'>{destination?.address}</h1>
                    <h1 className='text-sm'>{formatDateComplete(destination?.startDate)}</h1>
                    <h1 className='text-sm'>{destination?.contact_info.telephone}</h1>
                    <h1 className='text-sm'>{destination?.contact_info.email}</h1>
                </div>
            )}
        </div>
    );
};

export default InfoPanel;
