import axios from "axios"

const App = ()=>{
  const payNow = async (e)=>{
      try{
        e.preventDefault()
        const form = e.target;
        const {data} = await axios.post("http://localhost:8080/payment",{
          name:form.name.value,
          amount: form.amount.value,
          email:form.email.value,
          phone:form.phone.value,
          product:form.product.value,
        })
        console.log(data)
        const {longurl} = data.payment_request[0];
        window.location.href=longurl
      }
      catch(err){
        console.log(err)
      }
  }
  return (
    <div>
        <h1>CodingOtt Instamojo Payment Gateway Inetegration</h1>
        <form onSubmit={payNow} style={{
            width:400,
            display:"flex",
            flexDirection:"column",
            gap:16
        }}>
          <input name="name" type="text" placeholder="Enter buyer's name"/>
          <input name="amount" type="number" placeholder="amount"/>
          <input name="email" type="email" placeholder="email"/>
          <input name="phone" type="number" placeholder="Mobile"/>
          <input name="product" type="text" placeholder="Product"/>

          <button>Pay now</button>
        </form>
    </div>
  )
}
export default App;