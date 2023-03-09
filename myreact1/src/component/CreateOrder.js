import React from "react";
import {
  FaRegIdCard,
  FaRegQuestionCircle,
  FaRegCalendarAlt,
  FaLockOpen,
} from "react-icons/fa";
import CartProdust from "../smallcomponent/CartProdust";
function CreateOrder() {
  return (
    <>
      <div className="wrap">
        <div className="container side">
          <div className="Left">
            <table className="c-CartTable">
              <thead>
                <tr>
                  <th>產品名稱</th>
                  <th></th>
                  <th>數量</th>
                  <th>金額</th>
                </tr>
              </thead>
              <CartProdust />
              <CartProdust />
              <CartProdust />
            </table>
            <div className="mb-3 c-Coupon">
              <input
                type="text"
                className="form-control"
                placeholder="優惠券代碼"
              />
              <button className="c-Couponbtn">兌換</button>
            </div>
            <div className="c-CouponText">
              <span className="text-14">
                您必須登入才能查看及使用您的會員積分
              </span>
              <p>
                提醒:優惠券不能同時使用，如果您使用積分即使在購買程序/付款介面上輸入優惠券代碼也無法使用
              </p>
            </div>
            <div className="c-SubtotalGroup">
              <div className="c-Subtotal">
                <h4>小計</h4>
                <h4>$10</h4>
              </div>
              <div className="c-Subtotal">
                <h4>優惠券</h4>
                <h4>$10</h4>
              </div>
              <div className="c-Subtotal">
                <h4>運費</h4>
                <h4>$10</h4>
              </div>
            </div>
            <div className="c-SubtotalText">
              <div className="c-SubtotalPrice">
                <h3>總金額</h3>
                <h2>$ 10</h2>
              </div>
            </div>
          </div>
          <div className="Right">
            <div className="c-CartMaterial">
              <div className="c-CartMaterialText">
                <h4>收件人詳細資料</h4>
                <h4>門市自取</h4>
              </div>
              <div className="c-CartConfirmOrder">
                <div className="c-CartDetail">
                  <label>
                    <h5>名稱</h5>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="該會員名稱"
                    aria-label="Disabled input example"
                    disabled
                  />
                </div>
                <div className="c-CartDetail">
                  <label>
                    <h5>電話</h5>
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="該會員電話"
                    aria-label="Disabled input example"
                    disabled
                  />
                </div>
                <div className="c-CartDetail">
                  <label>
                    <h5>地址</h5>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="該會員地址"
                    aria-label="Disabled input example"
                    disabled
                  />
                </div>
                <div className="c-CartDetail">
                  <label>
                    <h5>備註</h5>
                  </label>
                  <textarea
                    className="form-control"
                    type="text"
                    placeholder="有什麼想跟我們說的嗎?"
                    cols="20"
                    rows="5"
                    aria-label="Disabled input example"
                    disabled
                  />
                </div>
              </div>
              <div className="c-CartConfirmOrder">
                <h4>付款資料</h4>
                <div className="c-CartPay">
                  <h5>已選擇的付款方式:信用卡</h5>
                </div>
                <div className="c-CartDetail">
                  <input
                    type="text"
                    placeholder="請輸入信用卡卡號"
                    name="card"
                  />
                  <FaRegIdCard size={30} />
                </div>
                <div className="c-CartDetail">
                  <input
                    type="text"
                    placeholder="請輸入持卡人姓名"
                    name="name"
                  />
                  <FaRegQuestionCircle size={30} />
                </div>
                <div className="c-CartDetail">
                  <input
                    type="text"
                    placeholder="請輸入有效期限(MM/YY)"
                    name="date"
                  />
                  <FaRegCalendarAlt size={30} />
                </div>
                <div className="c-CartDetail">
                  <input
                    type="text"
                    placeholder="請輸入安全碼"
                    name="security"
                  />
                  <FaLockOpen size={30} />
                </div>
                <div className="c-CartLinePay">
                  <input type="checkbox" />
                  <h6>
                    同意記住信用卡資訊《《信用卡交易協定》》，以便下次快速支付
                  </h6>
                </div>
                <div className="c-CartLinePay">
                  <h6>
                    <FaLockOpen size={30} />
                    本金流服務由SHOP LINE
                    Payments提供，通過PCI-DSS國際寄信卡組織最高等級認證，，提供安全的交易服務，支援國內外信用卡刷卡。
                  </h6>
                </div>
              </div>
            </div>
            <div className="c-CartConfirmbtn">
              <button className="c-CartConfirmOrderbtn">
                <h3>建立訂單</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateOrder;
