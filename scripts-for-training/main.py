import yfinance as yf
from prophet import Prophet

df = yf.Ticker("SPY").history("5y")

