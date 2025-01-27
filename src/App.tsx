import { useState } from "react";

const App = () => {
  const [cardNumber, setCardNumber] = useState("0000000000000000");
  const [name, setName] = useState("Jane Appleseed");
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [cvc, setCvc] = useState("000");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!/^\d+$/.test(cardNumber)) {
      setValue("Wrong format, numbers only.");
    }
    if (month === "" || year === "") {
      setError("Cant be blank");
    }
    if (cvc === "") {
      setMessage("Cant be blank");
    }
  };
  return (
    <>
      <main className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-4 justify-center h-[30vh] w-[100vw] md:h-[100dvh] md:w-[27rem] bg-[url('./assets/bg-main-mobile.png')] md:bg-[url('./assets/bg-main-desktop.png')] bg-cover bg-center px-4">
          <div className="bg-[url('./assets/bg-card-front.png')] rounded-md bg-cover bg-center w-full h-[15rem] p-6 flex flex-col justify-end gap-8">
            <div className="text-white font-medium">
              <p>{cardNumber}</p>
            </div>
            <div className="flex justify-between text-white uppercase text-[0.9rem] tracking-wide font-light">
              <p>{name}</p>
              <p>
                {month}/{year}
              </p>
            </div>
          </div>
          <div className="bg-[url('./assets/bg-card-back.png')]  rounded-md bg-cover bg-center w-full h-[15rem] relative">
            <p className="font-bold text-lightGrayishViolet absolute right-12 top-[6.7rem] tracking-widest">
              {cvc}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center h-[70vh] md:h-[100vh] md:w-[50vw]">
          <form
            className="flex flex-col gap-4 w-[21rem]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-[0.9rem] font-semibold tracking-wider"
              >
                CARDHOLDER NAME
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="e.g. Jane Appleseed"
                className="border-lightGrayishViolet border-[1.5px] rounded-md px-2 py-1 focus:border-inputFocus outline-none text-[0.9rem]"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="number"
                className="text-[0.9rem] font-semibold tracking-wider"
              >
                CARD NUMBER
              </label>
              <input
                type="text"
                name="number"
                id="number"
                placeholder="e.g. 1234 5678 9123 0000"
                className="border-lightGrayishViolet border-[1.5px] rounded-md px-2 py-1 focus:border-inputFocus outline-none text-[0.9rem]"
                onChange={(e) => setCardNumber(e.target.value)}
                maxLength={16}
              />
              <p className="text-[0.9rem] text-red-600 font-semibold">
                {value}
              </p>
            </div>
            <div className="flex gap-4 justify-between">
              <div className="flex flex-col w-[50%] gap-1">
                <label
                  htmlFor="expiry"
                  className="text-[0.9rem] font-semibold tracking-wider"
                >
                  EXP. DATE (MM/YY)
                </label>
                <div className="flex justify-between">
                  <input
                    type="text"
                    name="expiry"
                    id="expiry"
                    placeholder="MM"
                    className="border-lightGrayishViolet border-[1.5px] rounded-md px-2 py-1 focus:border-inputFocus outline-none w-[48%] text-[0.9rem]"
                    onChange={(e) => setMonth(e.target.value)}
                    maxLength={2}
                  />
                  <input
                    type="text"
                    name="expiry"
                    id="expiry"
                    placeholder="YY"
                    className="border-lightGrayishViolet border-[1.5px] rounded-md px-2 py-1 focus:border-inputFocus outline-none w-[48%] text-[0.9rem]"
                    onChange={(e) => setYear(e.target.value)}
                    maxLength={2}
                  />
                </div>
                <p className="text-red-600 font-bold text-[0.9rem]">{error}</p>
              </div>
              <div className="flex flex-col w-[50%] gap-1">
                <label
                  htmlFor="cvc"
                  className="text-[0.9rem] font-semibold tracking-wider"
                >
                  CVC
                </label>
                <input
                  type="text"
                  name="cvc"
                  id="cvc"
                  placeholder="e.g. 123"
                  className="border-lightGrayishViolet border-[1.5px] rounded-md px-2 py-1 focus:border-inputFocus outline-none text-[0.9rem]"
                  onChange={(e) => setCvc(e.target.value)}
                  maxLength={3}
                />
                <p className="text-red-600 font-bold text-[0.9rem]">
                  {message}
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-veryDarkViolet py-2 rounded-lg text-[0.9rem]"
            >
              Confirm
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default App;
