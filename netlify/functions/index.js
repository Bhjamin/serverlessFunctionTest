export const handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET",
  };

  return {
    statusCode: 200,
    headers,
    body: "This was not a POST request!",
  };
};
