import ShapeIcon from "../assets/ShapeIcon"
import { Outlet, useParams } from "react-router"
import { useNavigate } from "react-router";

function Header() {
    const { orderID } = useParams()
    const navigate = useNavigate();

    return (
        <>
            <header className="flex items-center justify-between h-[56px] !mx-[46px] !mt-[65px] !mb-[18px]">
                <img onClick={() => navigate('/')} src="/arrowLeft.svg" />
                <h1>{orderID ? 'Cargo Details' : 'Cargo Orders'}</h1>
                <ShapeIcon />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Header