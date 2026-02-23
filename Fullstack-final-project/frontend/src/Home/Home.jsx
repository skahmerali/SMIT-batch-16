import { useState, useEffect } from "react"
import { getProducts } from "../services/Product"
import { data } from "react-router-dom"


function Home() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts();

        console.log(response)


        setProducts((prevProducts) => [
          ...prevProducts,
          ...response
        ])
        console.log(products)
      } catch (err) {
        console.log(`Products not Found ${err.message}`)
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      {/* {
        products.map(data => {
          return (
            <div> {data} </div>
          )
        })
      } */}
    </div>
  )
}

export default Home
