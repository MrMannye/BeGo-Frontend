import { useMemo, useState } from "react"
import Navigation from "../components/Navigation"
import OrderCard from "../components/OrderCard"
import Search from "../components/Search"
import useFetchUpcoming from "../hooks/useFetchUpcoming"

function App() {

  const { ordersUpcoming } = useFetchUpcoming()
  const [searchTerm, setSearchTerm] = useState('')

  const filterOrders = useMemo(() => {
    return searchTerm.length > 0 ?
      [...ordersUpcoming].filter((order) => order.order_number.toString().toLowerCase().includes(searchTerm.toLowerCase())) :
      [...ordersUpcoming]
  }, [searchTerm, ordersUpcoming])

  return (
    <main className="flex flex-col">
      <Navigation />
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <section className="flex flex-col items-center justify-center gap-2 md:flex-row">
        {filterOrders.map((order) => {
          return (
            <OrderCard key={order._id} order={order} />
          )
        })}
      </section>
    </main>
  )
}

export default App
