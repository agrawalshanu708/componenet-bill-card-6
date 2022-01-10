import "./styles.css";
function Component() {
  const billCard = {
    img: "",
    orderText: "Order summary",
    orderTag:
      "You can listen to millions of songs,audioooks,and podcasrs on any device anywhere you like",
    PlanDetails: {
      planTime: "Annual Plan",
      planCost: `Rs. 999/year`,
      PlanChangeLink: (
        <a className="c-o" href="./">
          change
        </a>
      ),
      musicIcon: ""
    },
    paymentLink: (
      <a className="p-l" href="./">
        Proceed to Payment
      </a>
    ),
    cancelOrderLink: (
      <a className="c-o change" href="./">
        Cancel Order{" "}
      </a>
    )
  };

  const {
    img,
    orderText,
    orderTag,
    PlanDetails: { planTime, planCost, PlanChangeLink, musicIcon },
    paymentLink,
    cancelOrderLink
  } = billCard;
  return (
    <>
      <div className="bill-card-box">
        <div className="bill-details-box">
          <div className="order-text">{orderText} </div>
          <p className="order-tag">{orderTag}</p>

          <div className="bill-plan-box">
            <div> {musicIcon}</div>
            <div className="plan-time-rate-box">
              <div className="plan-time">{planTime} </div>
              <div className="plan-cost"> {planCost}</div>
            </div>
            <div className="change-link"> {PlanChangeLink}</div>
          </div>
          <div className="payment-link"> {paymentLink}</div>
          <div className="cancel-order">{cancelOrderLink} </div>
        </div>
      </div>
    </>
  );
}
export default function App() {
  return (
    <div className="App">
      <Component />
    </div>
  );
}
