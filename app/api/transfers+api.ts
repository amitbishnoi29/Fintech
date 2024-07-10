// import { ExpoRequest, ExpoResponse } from 'expo-router/server';

const API_KEY = process.env.CRYPTO_API_KEY;

export async function GET(request: Request) {
  // const ids = request.expoUrl.searchParams.get('ids');

  // const response = await fetch(
  //   `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${ids}`,
  //   {
  //     headers: {
  //       'X-CMC_PRO_API_KEY': API_KEY!,
  //     },
  //   }
  // );

  // const res = await response.json();
  // return ExpoResponse.json(res.data);
  return Response.json(transfers);
}

const transfers = [
  {
    id: '1',
    fromAccount: 'Checking Account',
    toAccount: 'Savings Account',
    amount: 1000,
    status: 'Completed',
  },
  {
    id: '2',
    fromAccount: 'Savings Account',
    toAccount: 'Investment Account',
    amount: 2000,
    status: 'Pending',
  },
  {
    id: '3',
    fromAccount: 'Checking Account',
    toAccount: 'Retirement Fund',
    amount: 500,
    status: 'Completed',
  },
  {
    id: '4',
    fromAccount: 'Business Account',
    toAccount: 'Personal Account',
    amount: 1500,
    status: 'Failed',
  },
  {
    id: '5',
    fromAccount: 'Savings Account',
    toAccount: 'Checking Account',
    amount: 700,
    status: 'Completed',
  },
  {
    id: '6',
    fromAccount: 'Checking Account',
    toAccount: 'Credit Card',
    amount: 1200,
    status: 'Pending',
  },
  {
    id: '7',
    fromAccount: 'Business Account',
    toAccount: 'Investment Account',
    amount: 2500,
    status: 'Completed',
  },
  {
    id: '8',
    fromAccount: 'Personal Account',
    toAccount: 'Savings Account',
    amount: 800,
    status: 'Failed',
  },
  {
    id: '9',
    fromAccount: 'Retirement Fund',
    toAccount: 'Checking Account',
    amount: 300,
    status: 'Completed',
  },
  {
    id: '10',
    fromAccount: 'Investment Account',
    toAccount: 'Savings Account',
    amount: 4000,
    status: 'Pending',
  },
  {
    id: '11',
    fromAccount: 'Credit Card',
    toAccount: 'Checking Account',
    amount: 600,
    status: 'Completed',
  },
  {
    id: '12',
    fromAccount: 'Personal Account',
    toAccount: 'Business Account',
    amount: 1300,
    status: 'Completed',
  },
  {
    id: '13',
    fromAccount: 'Savings Account',
    toAccount: 'Investment Account',
    amount: 2200,
    status: 'Pending',
  },
  {
    id: '14',
    fromAccount: 'Checking Account',
    toAccount: 'Personal Account',
    amount: 900,
    status: 'Failed',
  },
  {
    id: '15',
    fromAccount: 'Business Account',
    toAccount: 'Savings Account',
    amount: 1600,
    status: 'Completed',
  },
  {
    id: '16',
    fromAccount: 'Investment Account',
    toAccount: 'Retirement Fund',
    amount: 1100,
    status: 'Completed',
  },
  {
    id: '17',
    fromAccount: 'Personal Account',
    toAccount: 'Credit Card',
    amount: 450,
    status: 'Failed',
  },
  {
    id: '18',
    fromAccount: 'Retirement Fund',
    toAccount: 'Savings Account',
    amount: 1800,
    status: 'Pending',
  },
  {
    id: '19',
    fromAccount: 'Business Account',
    toAccount: 'Personal Account',
    amount: 750,
    status: 'Completed',
  },
  {
    id: '20',
    fromAccount: 'Credit Card',
    toAccount: 'Investment Account',
    amount: 2800,
    status: 'Pending',
  },
];

