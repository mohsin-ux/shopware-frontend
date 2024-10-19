export const useFetchData = async (): Promise<any> => {
  const url =
    "https://shopware.grandmarkt.de/store-api/product-configurator/get-configuration/069be5c6d51244ee8d39a88f216f5978";

  const { data } = await useFetch<any>(url, {
    method: "GET",
    headers: {
      "sw-access-key": `SWSCADD3ZW5YA01PDXY3WU44BA`,
    },
  });

  const responseData = JSON.parse(JSON.stringify(data.value));
  const parsedData: any = Object.values(responseData);
};
