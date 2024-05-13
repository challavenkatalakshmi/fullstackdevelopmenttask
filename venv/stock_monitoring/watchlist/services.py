# watchlist/services.py

import requests

class StockService:
    @staticmethod
    def get_stock_price(symbol):
        # Alpha Vantage API endpoint for intraday stock prices
        api_key = IM0V162LU32AXSA9  # Replace 'YOUR_API_KEY' with your actual API key
        endpoint = f'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={symbol}&interval=1min&apikey={api_key}'

        try:
            response = requests.get(endpoint)
            data = response.json()

            # Extract the latest stock price from the API response
            latest_data = data['Time Series (1min)']
            latest_timestamp = list(latest_data.keys())[0]
            latest_price = float(latest_data[latest_timestamp]['4. close'])

            return latest_price
        except Exception as e:
            # Handle any errors
            print(f"Error fetching stock price for symbol {symbol}: {e}")
            return None

