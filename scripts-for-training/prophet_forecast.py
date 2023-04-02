import yfinance as yf
from prophet import Prophet
# Get the data from yahoo API for the last 5 years
df = yf.Ticker("NDX").history(period='max')

# Reset index 
df.reset_index(inplace=True)

df = df[["Date","Close"]]
df = df.rename(columns = {"Date":"ds", "Close":"y"})
# Remove the timestamp from the df['ds'] else the Propeht won't fit
df['ds'] = df['ds'].dt.tz_localize(None)
fbp = Prophet(weekly_seasonality= True)
fbp.fit(df)
fut = fbp.make_future_dataframe(periods=365)
forecast = fbp.predict(fut)

forecast['actual'] = df['y']
forecast.to_csv("prophet_predicted.csv")