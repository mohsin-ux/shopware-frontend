export const useConfigurator = async () => {
  const url =
    "https://shopware.grandmarkt.de/store-api/product-configurator/get-configuration/069be5c6d51244ee8d39a88f216f5978";

  const { data } = await useFetch<any>(url, {
    method: "GET",
    headers: {
      "sw-access-key": `SWSCADD3ZW5YA01PDXY3WU44BA`,
    },
  });

  const responseData = JSON.parse(JSON.stringify(data.value));
  console.log(responseData);
  const parsedData = Object.values(responseData);
  console.log(parsedData);


//   const groups = parsedData.map((singleProfile) => singleProfile[1]);
//   console.log(groups);
  return {parsedData}
};
