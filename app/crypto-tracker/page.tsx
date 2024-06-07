import { BINANCE_TICKER_24_HOUR_ENDPOINT } from "@/config/constants";

async function get24HourTickerData() {
  const response = await fetch(BINANCE_TICKER_24_HOUR_ENDPOINT);

  if (!response.ok) {
    throw new Error("Failed to fetch ticker data");
  }
  return response.json();
}

export default async function CryptoTracker() {
  const tickerData = await get24HourTickerData();
  console.log(tickerData);
  return (
    <main>
      <h1>Crypto Tracker</h1>
    </main>
  );
}
