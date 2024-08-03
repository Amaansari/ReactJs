
import useRazorpay from "react-razorpay";


const App = ()=>{
  const [Razorpay] = useRazorpay()

  const payNow = async ()=>{
    const response = await fetch("http://localhost:8080/order")
    const data =await response.json();
    const options = {
      amount: data.amount,
      order_id: data.orderId,
      key: "YOUR_KEY_ID", 
      currency: "INR",
      name: "CodingOtt",
      description: "React Course",
      image: "https://th.bing.com/th/id/R.2a1bfa5274c1243305d1ccdec8f8f789?rik=aklBbIJCscfR2Q&riu=http%3a%2f%2fwww.telestream.net%2fwirecast-go%2fimages%2ficon_512x512-2x.png&ehk=jIBS9zmOG8SbtHTQuLSo8t0CI7ThIeTjaASKgh0hQo0%3d&risl=&pid=ImgRaw&r=0",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
    }
    const razor = new Razorpay(options)

    razor.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    razor.open()
  }


  return (
    <div>
        <h1>CodingOtt Payment Gateway Integration</h1>
        <button onClick={payNow}>Pay Now</button>
    </div>
  )
}
export default App;