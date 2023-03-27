import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";
import TableForm from "./components/TableForm";
import ReactToPrint from "react-to-print";
import { useState, useRef } from "react";


function App() {
  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [bankName, setBankName] = useState("")
  const [bankAccount, setBankAccount] = useState("")
  const [website, setWebsite] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)

  const componentRef = useRef()

  const handlePrint = () => {
    window.print();
  }

  

  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {showInvoice ?
          <>
            <ReactToPrint
              trigger={() => <button className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Print / Download</button>}
              content={() => componentRef.current}
            />
            <div ref={componentRef} className="p-5">
              <Header handlePrint={handlePrint} />
              <MainDetails name={name} address={address} />
              <ClientDetails clientName={clientName} clientAddress={clientAddress} />
              <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
              <Table description={description} quantity={quantity} price={price} amount={amount} list={list} setList={setList} total={total} setTotal={setTotal} />
              <Notes notes={notes} />
              <Footer name={name} address={address} email={email} website={website} phone={phone} bankName={bankName} bankAccount={bankAccount} />
            </div>
            <button className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300" onClick={() => { setShowInvoice(false) }}>Edit Information</button>
          </>
          : (
            <>
              <div className="flex flex-col justify-center">

                <article className="md:grid grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name" autoComplete="off" value={name} onChange={(e) => { setName(e.target.value) }} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" placeholder="Enter your address" autoComplete="off" value={address} onChange={(e) => { setAddress(e.target.value) }} />
                  </div>
                </article>

                <article className="md:grid grid-cols-3 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" autoComplete="off" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="website">Website</label>
                    <input type="url" name="website" id="website" placeholder="Enter your website" autoComplete="off" value={website} onChange={(e) => { setWebsite(e.target.value) }} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone">Phone number</label>
                    <input type="text" name="phone" id="phone" placeholder="Enter your phone number" autoComplete="off" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                  </div>
                </article>

                <article className="md:grid grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="bankName">Bank Name</label>
                    <input type="text" name="bankName" id="bankName" placeholder="Enter your bank name" autoComplete="off" value={bankName} onChange={(e) => { setBankName(e.target.value) }} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="bankAccount">Bank account number</label>
                    <input type="number" name="bankAccount" id="bankAccount" placeholder="Enter your bank account number" autoComplete="off" value={bankAccount} onChange={(e) => { setBankAccount(e.target.value) }} />
                  </div>
                </article>

                <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                  <div className="flex flex-col">
                    <label htmlFor="clientName">Client name</label>
                    <input type="text" name="clientName" id="clientName" placeholder="Enter your client's name" autoComplete="off" value={clientName} onChange={(e) => { setClientName(e.target.value) }} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="clientAddress">Client address</label>
                    <input type="text" name="clientAddress" id="clientAddress" placeholder="Enter your client's address" autoComplete="off" value={clientAddress} onChange={(e) => { setClientAddress(e.target.value) }} />
                  </div>
                </article>

                <article className="md:grid grid-cols-3 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="invoiceNumber">Invoice number</label>
                    <input type="number" name="invoiceNumber" id="invoiceNumber" placeholder="Enter your invoice number" autoComplete="off" value={invoiceNumber} onChange={(e) => { setInvoiceNumber(e.target.value) }} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="invoiceDate">Invoice date</label>
                    <input type="date" name="invoiceDate" id="invoiceDate" placeholder="Enter your invoice date" autoComplete="off" value={invoiceDate} onChange={(e) => { setInvoiceDate(e.target.value) }} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="dueDate">Due date</label>
                    <input type="date" name="dueDate" id="dueDate" placeholder="Enter your due date" autoComplete="off" value={dueDate} onChange={(e) => { setDueDate(e.target.value) }} />
                  </div>
                </article>

                <article>
                  <TableForm description={description} setDescription={setDescription} quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice} amount={amount} setAmount={setAmount} list={list} setList={setList} total={total} setTotal={setTotal} />
                </article>

                <label htmlFor="notes">Note</label>
                <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Additional notes to the client" autoComplete="off" value={notes} onChange={(e) => { setNotes(e.target.value) }} ></textarea>

                <button className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300" onClick={() => { setShowInvoice(true) }}>Preview Invoice</button>
              </div>
            </>
          )
        }
      </main >
    </>
  );
}

export default App;
