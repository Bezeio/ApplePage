import logo1 from "../../static/media/bitcoin.jpeg";
import logo2 from "../../static/media/ethericon32.png";
import logo3 from "../../static/media/dogecoinicon42.png";
import logo4 from "../../static/media/usdticon42.png";
import logo5 from "../../static/media/coinbaseicon42.png";
import logo6 from "../../static/media/metamaskicon32.png";

const Guaranteed = () => {
  const cryptoLogos = {
    Bitcoin: logo1,
    Ethereum: logo2,
    Dogecoin: logo3,
    Tether: logo4,
    'USD Coin': logo5,
    Other: logo6,
  };

  return (
    <div className="mt-4">
      <h3 className="w-full py-2 text-center">GUARANTEED <span className="text-customBlue">SAFE</span> CHECKOUT</h3>
      <div className="flex flex-wrap justify-center gap-3 mb-3">
        {["Bitcoin", "Ethereum", "Dogecoin", "Tether", "USD Coin", "Other"].map(
          (crypto) => (
            <img
              key={crypto}
              src={cryptoLogos[crypto]}
              alt={crypto}
              className="w-12 h-8 border"
            />
          )
        )}
      </div>
      <p className="text-center">
        Your Payment is <span className="font-bold">100% Secure</span>
      </p>
    </div>
  );
};

export default Guaranteed;
