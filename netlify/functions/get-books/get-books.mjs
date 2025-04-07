// Docs on request and context https://docs.netlify.com/functions/build/#code-your-function-2
export default (request, context) => {
  // console.log(request)
  if (request.method !== "GET") {
    return new Response(
      JSON.stringify({ error: "Method Not Allowed" }),
      {
        status: 405,
        headers: {
          "Allow": "GET",
          "Content-Type": "application/json",
        },
      }
    );
  }

  const shoes = [
    { manufacturer: "Nike", model: "Pegasus 40" },
    { manufacturer: "Adidas", model: "Ultraboost" },
    { manufacturer: "Nike", model: "Infinity Run" },
    { manufacturer: "Salomon", model: "Speedcross 6" },
    { manufacturer: "Adidas", model: "Adizero Boston" },
  ];

  const manufacturer = request.queryStringParameters?.manufacturer;
  const filtered = manufacturer
    ? shoes.filter(
      (s) => s.manufacturer.toLowerCase() === manufacturer.toLowerCase()
    )
    : shoes;

  return new Response(JSON.stringify(filtered), {
    status: 200
  });
  return {
    statusCode: 200,
    body: JSON.stringify(filteredShoes),
    headers: {
      "Content-Type": "application/json",
    },
  };
  // try {
  //   const url = new URL(request.url)
  //   const subject = url.searchParams.get('name') || 'World'
  //
  //   return new Response(`Hello ${subject}`)
  // } catch (error) {
  //   return new Response(error.toString(), {
  //     status: 500,
  //   })
  // }
}
