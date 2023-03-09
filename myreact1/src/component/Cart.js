import React from 'react'
import CartCardProduct from '../smallcomponent/CartCardProduct';
import CartTable from '../smallcomponent/CartTable';
function Cart() {
  return (
    <>
        <div className="c-container side">
          <table className="c-CartTable">
            <thead>
              <tr>
                <th>產品名稱</th>
                <th>單價價格</th>
                <th>數量</th>
                <th>金額</th>
                <th></th>
              </tr>
            </thead>
            <CartTable/>
            <CartTable/>
            <CartTable/>
          </table>
          <h3>會員優惠-加購商品</h3>
          <div className="c-CartCardContent">
            <div className="c-CartCardProduct">
              <CartCardProduct/>
              <CartCardProduct/>
              <CartCardProduct/>
            </div>
            <div className="c-CartCardPrice">
              <div className="c-CartCardPriceText">
                <h4>總金額</h4>
                <h4>$10</h4>
              </div>
              <p className='text-14'>
                <input type="checkbox" />
                購買時您必須同意使用條款運費將在結帳過程中計算
              </p>
              <button className="c-CartCardPriceTextBtn">前往結帳</button>
            </div>
          </div>
        </div>
    </>
  );
}

export default Cart