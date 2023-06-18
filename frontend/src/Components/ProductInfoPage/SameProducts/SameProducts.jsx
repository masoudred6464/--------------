import React from "react";

import "./SameProducts.css";
import { Link } from "react-router-dom";
import {
  enToPersianNumber,
  formatNumberWithSeparators,
} from "../../../../../../../../DigiKala/frontend/js/funcs/utils";

export default function SameProducts({
  img,
  shortName,
  title,
  off,
  price,
  wonder,
}) {
  return (
    <div className="same-product-for-buy__wrapper">
      <Link
        to={`/product-info/${shortName}`}
        className="same-product-for-buy__content"
      >
        {wonder ? (
          <div className="same-product-for-buy__content-amazing">
            <img src="/images/cart-page/IncredibleOffer.svg" alt="" />
          </div>
        ) : null}
        <img
          src={`/img/${img}`}
          alt=""
          className="same-product-for-buy__content-product-img"
        />
        <p className="same-product-for-buy__content-desc">{title}</p>
        <p className="fs-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{
              width: "18px",
              height: "18px",
              fill: "#1028ff",
            }}
          >
            <path
              fillRule="evenodd"
              d="M11.539 1.083l.224-.054a1 1 0 01.452-.006A6.098 6.098 0 0117 6.98v2.486l2.555 1.703a1 1 0 01.394.516l2 6a1 1 0 01-1.145 1.297L15.9 18H8.099l-4.903.98a1 1 0 01-1.145-1.296l2-6a1 1 0 01.394-.516L7 9.465V6.979a6.104 6.104 0 014.539-5.896zM7 11.868v4.312l-2.507.501 1.346-4.039L7 11.868zM15 10v6H9V6.979a4.099 4.099 0 012.839-3.9L12 3.03l.178.054A4.099 4.099 0 0115 6.98V10zm2 6.18l2.506.501-1.346-4.039-1.16-.773v4.311zM10 9a2 2 0 114 0 2 2 0 01-4 0zm0 13v-3H8v3h2zm6-3v3h-2v-3h2zm-3 4v-4h-2v4h2z"
              clipRule="evenodd"
            ></path>
          </svg>
          ارسال امروز
        </p>
        <div className="same-product-for-buy__content-price-box">
          <p className="same-product-for-buy__content-price-box-discount discount-percent">
            {off ? enToPersianNumber(off) : null}
          </p>
          <div className="same-product-for-buy__content-price-box-prices">
            <p className="same-product-for-buy__content-price-box-prices-after-discount">
              {formatNumberWithSeparators(
                enToPersianNumber(price - (price * off) / 100)
              )}
              <svg
                id="toman"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                style={{
                  width: "16px",
                  height: "16px",
                  fill: "#3f4064",
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </p>
            {off ? (
              <p className="same-product-for-buy__content-price-box-prices-before-discount">
                {formatNumberWithSeparators(enToPersianNumber(price))}
              </p>
            ) : null}
          </div>
        </div>
      </Link>
    </div>
  );
}
