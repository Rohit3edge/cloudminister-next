"use client";
import React, { createContext, useState, useEffect } from "react";
import fx from "money";
import axios from "axios";

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD"); // Default to USD to prevent SSR mismatch
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserCurrency = async () => {
      try {
        const geoResponse = await axios.get("https://ipapi.co/json/");
        const countryCode = geoResponse.data.country_code;
        const countryCurrencyMap = {
          IN: "INR",
          US: "USD",
          GB: "GBP",
          EU: "EUR",
          AU: "AUD",
          CA: "CAD",
          SG: "SGD",
        };
        setCurrency(countryCurrencyMap[countryCode] || "USD");
      } catch (error) {
        console.error("Error fetching user location", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserCurrency();
  }, []);

  useEffect(() => {
    axios.get("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => {
        if (response.data?.rates) {
          fx.rates = response.data.rates;
          fx.base = "USD";
          setRates(response.data.rates);
        }
      })
      .catch((error) => console.error("Error fetching exchange rates", error));
  }, []);

  const convert = (amount, from = "USD", to = currency) => {
    if (!fx.rates || !fx.rates[from] || !fx.rates[to]) return amount;
    return fx(amount).from(from).to(to).toFixed(2);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convert, rates, loading }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
