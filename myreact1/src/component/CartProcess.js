import { useForm } from 'react-hook-form';
function CartProcess() {
  const {register,handleSubmit,formState:{errors}} = useForm({
    defaultValues:{
      username:'',
      email:'',
      genter:'',
      birthday:'',
      recipient:'',
      recipienttel:'',
      city:'',
      area:'',
      address:'',
      agree:'',
    },
    mode:'onTouched'
  })
  const onSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <>
      <div className="wrap">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="c-p-container side">
          <div className="c-CartConfirm">
            <h3>合計:NT$10</h3>
            <p className="text-21-500">購物車(1件)</p>
          </div>
          <h4>顧客資料</h4>
          <div className="c-CartCustomer">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  <h5>顧客名稱</h5>
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.username && 'is-invalid'}`}
                  id="name"
                  placeholder="請輸入姓名"
                  name="username"
                  {...register('username',{ required:true})}
                />
                {errors.username && <div className='invalid-feedback'>顧客名稱為必填</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  <h6>電子信箱</h6>
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email && 'is-invalid'}`}
                  id="email"
                  placeholder="請輸入電子信箱"
                  name="email"
                  {...register('email',{required:{
                    value:true,
                    message:'信箱為必填'
                  },
                  pattern:{
                    value: /^\S+@\S+$/i,
                    message:'Email格式錯誤'
                  }
                })}
                />
                {errors.email && <div className='invalid-feedback'>{errors?.email?.message}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  <h5> 性別</h5>
                </label>
                <input
                  type="gender"
                  className={`form-control ${errors.genter && 'is-invalid'}`}
                  id="gender"
                  placeholder="請選擇性別"
                  name="genter"
                  {...register('genter',{required:true})}
                />
                {errors.genter && <div className='invalid-feedback'>性別為必填</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="birthday" className="form-label">
                  <h5>生日日期</h5>
                </label>
                <input
                  type="date"
                  className={`form-control ${errors.birthday && 'is-invalid'}`}
                  id="birthday"
                  placeholder="請選擇日期"
                  name="birthday"
                  {...register('birthday',{required:true})}
                />
                {errors.birthday && <div className='invalid-feedback'>生日日期為必填</div>}
              </div>
          </div>
          <h4>訂單備註</h4>
          <div className="c-CartCustomer">
            <textarea cols="30" rows="10" placeholder="有什麼想告訴我們的嗎?" />
          </div>
          <div className="c-CartCustomerText">
            <div>
            <h4>配送資料</h4>
            <div className="c-CartCustomerTextInput">
              <input type="checkbox" id="checkbox3" />
              <div className="text-18-400"> 收件人資料與顧客資料相同</div>
            </div>
            </div>
            <h4>運費:NT$0</h4>
          </div>
          <div className="c-CartCustomer">
            <div className="c-Checkbox">
              <input type="radio" id="checkbox1" />
              <lable htmlFor="checkbox1" className="text-18-400">
                門市自取
              </lable>
              <br />
              <input type="radio" id="checkbox2" />
              <lable htmlFor="checkbox2" className="text-18-400">
                配送
              </lable>
              <br />
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    <h5> 收件人姓名</h5>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.recipient && 'is-invalid'}`}
                    id="name"
                    placeholder="請輸入收件人姓名"
                    name="recipient"
                    {...register('recipient',{required:true})}
                  />
                  {errors.recipient && <div className='invalid-feedback'>收件人為必填</div>}
                  <span className="text-14">
                    請填入收件人真實姓名，以確保順利收件
                  </span>
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">
                    <h5>收件人電話號碼</h5>
                  </label>
                  <input
                    type="tel"
                    className={`form-control ${errors.recipienttel && 'is-invalid'}`}
                    id="mobile"
                    placeholder="請輸入收件人電話號碼"
                    name="recipienttel"
                    {...register('recipienttel',{required:{
                      value:true,
                      message:'收件人電話為必填'
                    },
                    minLength:{
                      value:10,
                      message:'最少不會低於10碼'
                    },
                    maxLength:{
                      value:10,
                      message:'最多不會高於10碼'
                    }
                  })}
                  />
                  {errors.recipienttel && (<div className="invalid-feedback">{errors?.recipienttel?.message} </div> )}
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    <h5>地址</h5>
                    <h5>送貨地點:台灣</h5>
                  </label>
                  <div className="c-address">
                    <div className='c-addressinput'>
                      <input
                      type="text"
                      className={`form-control ${errors.city && 'is-invalid'}`}
                      placeholder="城市/縣"
                      name="city"
                      {...register('city',{required:true})}
                    />
                    {errors.city && <div className='invalid-feedback'>城市/縣為必填</div>}
                    </div>
                    <div className='c-addressinput'>
                       <input
                      type="text"
                      className={`form-control ${errors.area && 'is-invalid'}`}
                      placeholder="地區"
                      name="area"
                      {...register('area',{required:true})}
                    />
                    {errors.area && <div className='invalid-feedback'>地區為必填</div>}
                    </div>
                  </div>
                  <input
                    type="text"
                    className={`form-control ${errors.address && 'is-invalid'}`}
                    id="address"
                    placeholder="請輸入地址"
                    name='address'
                    {...register('address',{required:true})}
                  />
                  {errors.address && <div className='invalid-feedback'>地址為必填</div>}
                </div>
                <input type="checkbox" />
                <label className="text-14">儲存這個送貨地址</label>
                <br />
                <input type="checkbox" />
                <label className="text-14">設為預設地址</label>
              </form>
            </div>
          </div>
          <h4>索取發票</h4>
          <div className="c-CartCustomer">
            <form className="c-bill">
              <div className="c-billbg">
                  <h5>發票類型</h5>
                <input
                  type="text"
                  className='form-control d-inline-clock'
                  placeholder="雲端發票"
                  name="bill"
                />
                  {errors.bill && <div className='invalid-feedback'>雲端發票</div>}
                </div>
                <div className="c-billbg">
                <label>
                  <h5>載具類型</h5>
                </label>
                <input
                  type="text"
                  className='form-control d-inline-clock'
                  placeholder="會員載具"
                  name="vehicle"
                />
              </div>
            </form>
            <div className="c-CartCustomerCheck">
              <input type="checkbox" name="agree" {...register('agree',{required:true})}/>
              <div className="c-CartCustomerCheckText">
                <h6>我同意網站服務條款及隱私權政策</h6>
                <span>您必須同意續則和隱私條款</span>
              </div>
            </div>
          </div>
          <div className="c-Cartbtn">
            <button type="submit" className="Cartbtn">
              <h3>確認訂單</h3>
            </button>
          </div>
        </div>  
        </form>
      </div>
    </>
  );
}

export default CartProcess;
