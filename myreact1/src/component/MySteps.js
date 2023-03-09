import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import CartCardProduct from "../smallcomponent/CartCardProduct";
import CreateOrder from "./CreateOrder";
const steps = [
  {
    title: "第一頁",
    content: "1",
  },
  {
    title: "第二頁",
    content:"2",
  },
  {
    title: "最後一頁",
    content: "Last-content",
  },
];

const MySteps = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle = {
    // lineHeight: '200px',
    // textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    // border: `1px dashed ${token.colorBorder}`,
    // marginTop: 16,
  };

  return (
    <>
      <div className="wrap">
        <div className="Steps">
          <div className="StepsBar">
            <Steps current={current} items={items} />
          </div>
          <div style={contentStyle}>{steps[current].content}</div>
          <div style={{ marginTop: 24 }}></div>
          <div className="Stepsbtn">
            {current > 0 && (
              <Button
                style={{
                  margin: "0 8px",
                  background: "#b58686",
                  color: "color",
                }}
                onClick={() => prev()}
              >
                返回上一頁
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button
                type=""
                style={{
                  margin: "0 8px",
                  background: "#b58686",
                  color: "color",
                }}
                onClick={() => next()}
              >
                下一頁
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type=""
                style={{
                  margin: "0 8px",
                  background: "#b58686",
                  color: "color",
                }}
                onClick={() => message.success("完成訂單!")}
              >
                完成
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MySteps;
