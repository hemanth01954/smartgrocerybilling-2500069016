function App() {
const rice = 60 * 2;
const milk = 30 * 3;
const sugar = 45;

return ( <div> <h1>Smart Grocery Billing System</h1> <p>Rice: ₹{rice}</p> <p>Milk: ₹{milk}</p> <p>Sugar: ₹{sugar}</p> <h2>Grand Total: ₹{rice + milk + sugar}</h2> </div>
);
}

export default App;
