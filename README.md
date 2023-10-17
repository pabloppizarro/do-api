# ARS - DOLAR API


## Approach: 
Simple Dolar API for fetching ARS-USD exchange. Focused on blue USD. 
Main idea is to have an updated USD|ARS exchange by sell-buy


## Endpoins

| GET  | Desc |
| ------------- |:-------------:|
| `https://dolar.pachu.dev/api/blue-dolarhoy`      | blue dolar from dolarhoy.com     |
| `https://dolar.pachu.dev/api/oficial-dolarhoy`      | oficial dolar from dolarhoy.com     |
| `https://dolar.pachu.dev/api/blue-cronista`     | blue dolar from cronista.com     |



## Response example:

```
{
"buy": "965,00",
"sell": "985,00",
"percentaje": "0,51%",
"date": "17.10.2023 18:29"
}

```
More dolar values or implementation in the future.

### More docs here :
[https://dolar.pachu.dev/docs/](https://dolar.pachu.dev/docs/)




## Main Stack

<img alt="DO" src="https://img.shields.io/badge/Digital_Ocean-0080FF?style=for-the-badge&logo=DigitalOcean&logoColor=white">
<img alt="DO" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
<img alt="DO" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">

### Tools
 - Deployed using Nginx engine, pm2 and cron.
 - https by certbot.


