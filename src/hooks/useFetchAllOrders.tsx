import { useEffect, useState } from "react"
import { API } from "../utils/utils"
import type { Result } from "../types"

function useFetchAllOrders() {

    const [orders, setOrders] = useState<Result>({} as Result)

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(`${API}/orders`)
                const data = await response.json()
                console.log('Fetched orders:', data.result)
                setOrders(data.result)
            } catch (error) {
                console.error('Error fetching orders:', error)
            }
        }

        fetchOrders()
    }, [])

    return { orders }
}

export default useFetchAllOrders