import CryptoDataTable from "@/components/crypto-data-table/CryptoDataTable";
import { BINANCE_TICKER_24_HOUR_ENDPOINT } from "@/config/constants";

async function get24HourTickerData() {
  try {
    const response = await fetch(BINANCE_TICKER_24_HOUR_ENDPOINT);

    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function CryptoTracker() {
  const tickerData = await get24HourTickerData();
  console.log(tickerData);
  return (
    <div>
      <h1>Crypto Tracker</h1>
      <CryptoDataTable />
    </div>
  );
}
