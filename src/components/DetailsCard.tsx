import type { Result } from '../types';
import PickupDropoffDetails from './PickupDropoffDetails';

interface DetailsCardProps {
    order: Result;
    selectedType: 'PICKUP' | 'DROPOFF';
    onSelectionChange: (type: 'PICKUP' | 'DROPOFF') => void;
}

export default function DetailsCard({ order, selectedType, onSelectionChange }: DetailsCardProps) {
    if (!order?.destinations || order.destinations.length < 2) {
        return null; // or handle the error as needed
    }

    const [pickup, dropoff] = order.destinations;

    return (
        <div className='w-[427px] h-[304px] !ml-[39px] md:w-full md:!ml-[200px]'>
            <div className='bg-[#3534344e] rounded-l-[20px] h-full'>
                <div className='gradient-border !p-5 !pl-9.5 h-full rounded-l-[20px] !border-b-[1px] !border-b-[#ffffff33]'>
                    <div className='font-semibold mb-4'>
                        <p className='text-[13px]'>Referencia {order.reference_number}</p>
                        <p className='text-[17.5px]'>Order #{order.order_number}</p>
                    </div>
                    <div className='flex flex-col gap-9 relative'>
                        <span className='w-[1px] h-[72px] barra absolute left-[20px] top-[78px]'></span>
                        <PickupDropoffDetails
                            destination={pickup}
                            type='PICKUP'
                            active={selectedType === 'PICKUP'}
                            onClick={() => onSelectionChange('PICKUP')}
                        />
                        <PickupDropoffDetails
                            destination={dropoff}
                            type='DROPOFF'
                            active={selectedType === 'DROPOFF'}
                            onClick={() => onSelectionChange('DROPOFF')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
