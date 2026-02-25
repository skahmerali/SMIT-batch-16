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
        console.log(products, "line20")
      } catch (err) {
        console.log(`Products not Found ${err.message}`)
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      {
        products.map((data, key) => (
          <div key={data._id}>
            <ul>
              <li>Name :{data.name}</li>
              <li>Description :{data.description}</li>
              <li>Brand :{data.brand}</li>
              <li>Price :{data.price}</li>
              <li>Discount Price :{data.discountPrice}</li>
            </ul>
          </div>
        ))

      }
    </div>
  )
}

export default Home
