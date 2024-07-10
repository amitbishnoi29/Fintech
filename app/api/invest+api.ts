export async function GET(request: Request) {
  const data = [
    {
      id: "1",
      name: "Stock Investment",
      type: "Stock",
      return: 10,
      status: "Active",
    },
    {
      id: "2",
      name: "Real Estate Investment",
      type: "Real Estate",
      return: 8,
      status: "Active",
    },
    {
      id: "3",
      name: "Bond Investment",
      type: "Bond",
      return: 5,
      status: "Matured",
    },
    {
      id: "4",
      name: "Mutual Fund",
      type: "Mutual Fund",
      return: 12,
      status: "Active",
    },
    {
      id: "5",
      name: "Cryptocurrency",
      type: "Crypto",
      return: 20,
      status: "Volatile",
    },
    {
      id: "6",
      name: "Commodity Investment",
      type: "Commodity",
      return: 7,
      status: "Active",
    },
    {
      id: "7",
      name: "Gold Investment",
      type: "Precious Metal",
      return: 6,
      status: "Active",
    },
    {
      id: "8",
      name: "Silver Investment",
      type: "Precious Metal",
      return: 4,
      status: "Active",
    },
    {
      id: "9",
      name: "Retirement Fund",
      type: "Fund",
      return: 9,
      status: "Active",
    },
    {
      id: "10",
      name: "Venture Capital",
      type: "Private Equity",
      return: 15,
      status: "Active",
    },
    {
      id: "11",
      name: "Peer-to-Peer Lending",
      type: "Lending",
      return: 11,
      status: "Active",
    },
    {
      id: "12",
      name: "Index Fund",
      type: "Mutual Fund",
      return: 7,
      status: "Active",
    },
    {
      id: "13",
      name: "Forex Trading",
      type: "Forex",
      return: 18,
      status: "Volatile",
    },
    {
      id: "14",
      name: "Treasury Bonds",
      type: "Bond",
      return: 3,
      status: "Active",
    },
    {
      id: "15",
      name: "Corporate Bonds",
      type: "Bond",
      return: 5,
      status: "Active",
    },
    {
      id: "16",
      name: "Real Estate Fund",
      type: "Real Estate",
      return: 10,
      status: "Active",
    },
    {
      id: "17",
      name: "Hedge Fund",
      type: "Fund",
      return: 14,
      status: "Active",
    },
    {
      id: "18",
      name: "REITs",
      type: "Real Estate",
      return: 9,
      status: "Active",
    },
    {
      id: "19",
      name: "Equity Fund",
      type: "Fund",
      return: 13,
      status: "Active",
    },
    {
      id: "20",
      name: "Infrastructure Investment",
      type: "Infrastructure",
      return: 8,
      status: "Active",
    },
  ];

  const url = new URL(request.url);
  const pageSize = url.searchParams.get("pageSize")
    ? parseInt(url.searchParams.get("pageSize") as string, 10)
    : 7;
  const pageNumber = url.searchParams.get("page")
    ? parseInt(url.searchParams.get("page") as string, 10)
    : 1;

  const startIndex = (pageNumber - 1) * pageSize;
  const paginatedData = data.slice(startIndex, startIndex + pageSize);

  return Response.json(paginatedData);

  return Response.json(data);
}
