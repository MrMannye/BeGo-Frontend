const tabs = ["Upcoming", "Completed", "Past"];

const NavigationTabs = () => {
    return (
        <nav className="flex justify-between items-center !ml-[39.03px] !mr-[61px]">
            {tabs.map((tab, index) => (
                <button
                    key={tab}
                    onClick={() => { }}
                    className={`relative cursor-pointer ${index === 0 ? 'text-[#FFEE00]' : 'text-[#D9D9D9]'}`}
                >
                    <h1 className={"text-[14px]"}>{tab}</h1>
                    {index === 0 && (
                        <span className="absolute w-[40%] h-[2px] bg-[#FFEE00] bottom-[-10px] left-0"></span>)}
                </button>
            ))}
        </nav>
    );
};

export default NavigationTabs;
