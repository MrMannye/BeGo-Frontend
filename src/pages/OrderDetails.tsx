import { useParams } from 'react-router';
import useFetchAllOrders from '../hooks/useFetchAllOrders';
import DetailsCard from '../components/DetailsCard';
import StatusCard from '../components/StatusCard';
import InfoPanel from '../components/InfoPanel';
import { useState } from 'react';

function OrderDetails() {
    const { orderID } = useParams();
    const { orders } = useFetchAllOrders();
    const [selectedType, setSelectedType] = useState<'PICKUP' | 'DROPOFF'>('PICKUP');

    const handleSelectionChange = (type: 'PICKUP' | 'DROPOFF') => {
        console.log(orderID);
        setSelectedType(type);
    };

    return (
        <div className='flex flex-col items-center justify-center gap-2 '>
            <DetailsCard
                order={orders}
                selectedType={selectedType}
                onSelectionChange={handleSelectionChange}
            />
            <section className='flex flex-col items-center justify-center gap-2 md:flex-row'>
                <StatusCard order={orders} type={selectedType.toLowerCase() as 'pickup' | 'dropoff'} />
                <InfoPanel selectedType={selectedType} order={orders} />
            </section>
        </div>
    );
}

export default OrderDetails;
