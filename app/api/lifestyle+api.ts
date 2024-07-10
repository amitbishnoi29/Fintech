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
  return Response.json(lifestyles);
}

const lifestyles = [
  {
    id: '1',
    title: 'Healthy Eating',
    description: 'Learn how to eat healthy and maintain a balanced diet.',
    image: 'https://images.unsplash.com/photo-1510627498534-cf7e9002facc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: '2',
    title: 'Yoga and Meditation',
    description: 'Explore the benefits of yoga and meditation for your well-being.',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: '3',
    title: 'Travel Adventures',
    description: 'Discover exciting travel destinations and adventures.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: '4',
    title: 'Fitness and Exercise',
    description: 'Stay fit with effective exercise routines and fitness tips.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: '5',
    title: 'Mental Health',
    description: 'Take care of your mental health with these helpful resources.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
]

