const App = () => {
  return (
    <>
      <main className="flex flex-col md:flex-row">
        <div className="h-[30vh] w-[100vw] md:h-[100dvh] md:w-[30vw] bg-[url('./assets/bg-main-mobile.png')] md:bg-[url('./assets/bg-main-desktop.png')] bg-cover bg-center relative">
          <div className="bg-[url('./assets/bg-card-front.png')] w-[30vw] h-[14vw] rounded-md bg-cover bg-center absolute -right-12 top-40"></div>
          <div className="bg-[url('./assets/bg-card-back.png')] w-[30vw] h-[14vw] rounded-md bg-cover bg-center absolute -right-8 bottom-24"></div>
        </div>
        <div className="flex items-center justify-center h-[70vh] md:h-[100vh] md:w-[70vw]">
          <form className="flex flex-col gap-4 w-[20rem]">
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
              />
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
                  />
                  <input
                    type="text"
                    name="expiry"
                    id="expiry"
                    placeholder="YY"
                    className="border-lightGrayishViolet border-[1.5px] rounded-md px-2 py-1 focus:border-inputFocus outline-none w-[48%] text-[0.9rem]"
                  />
                </div>
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
                />
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
