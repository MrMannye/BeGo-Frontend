import { useMemo } from "react";
import CheckIcon from "../assets/CheckIcon";
import type { Result } from "../types";
import { formatTime } from "../utils/utils";

interface StatusCardProps {
    order: Result;
    type: 'pickup' | 'dropoff';
}

function StatusCard({ order, type }: StatusCardProps) {
    const randomNumber = useMemo(() => Math.floor(Math.random() * 100) + 1, []);

    if (!order || !order.status_list || !order.status_list[type]) {
        return null;
    }

    const statusList = order.status_list[type];
    const imageUrl = `https://randomuser.me/api/portraits/thumb/men/${randomNumber}.jpg`;

    const isFinalStageActive = order.status_list.pickup[2]?.active || order.status_list.dropoff[2]?.active;

    return (
        <div className='w-[357px] h-[432px] !ml-[39px] !mt-[90px]'>
            <div className='bg-[#3534344e] rounded-2xl h-full'>
                <div className="gradient-border flex flex-col justify-between !pt-15 relative h-full rounded-2xl !border-b-[1px] !border-b-[#ffffff33]">
                    <img src={imageUrl} className="absolute inset-0 left-[140px] -top-[40px] rounded-full w-20 h-20 border-8 border-[#1B2024]" alt="" />
                    <h1 className="text-[19.9px] self-center">{formatTime(order.start_date)}</h1>
                    <div className="text-[15.4px] !pl-10 flex flex-col gap-8">
                        {statusList.map((status, index) => (
                            <div key={index} className="flex items-center gap-4 relative">
                                {index !== 3 && (<span className={`w-[2px] h-[32px] ${status.active ? 'bg-[#FFEE00]' : 'bg-[#D9D9D933]'} absolute left-[13px] top-[28px]`}></span>)}
                                <span className={`w-[28.3px] h-[28.3px] rounded-full flex items-center justify-center ${status.active ? 'bg-[#FFEE00]' : 'bg-[#D9D9D933]'}`}>
                                    {status.active ? (
                                        <CheckIcon />
                                    ) : (
                                        <span className="w-[18px] h-[18px] bg-[#D9D9D980] rounded-full flex items-center justify-center">
                                            <span className="w-[9.3px] h-[9.3px] bg-[#D9D9D9] rounded-full flex items-center justify-center"></span>
                                        </span>
                                    )}
                                </span>
                                <h1 className={`${!status.active ? 'text-[#414243]' : ''}`}>{status.status}</h1>
                            </div>
                        ))}
                    </div>
                    <button disabled={!isFinalStageActive} onClick={() => { console.log('Track Order') }} className="button-card !p-5 rounded-b-[19px] text-[20px] font-semibold">
                        Track Order
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StatusCard;
