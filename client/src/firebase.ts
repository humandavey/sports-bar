// const PROD_SERVER_ADDRESS = "https://sportsbar.onrender.com";
const TEST_SERVER_ADDRESS = "http://localhost:3001";

const serverAddresses = {
  'production': TEST_SERVER_ADDRESS,
  'development': TEST_SERVER_ADDRESS,
  'test': TEST_SERVER_ADDRESS
};

const api = (x: String): string => serverAddresses[process.env.NODE_ENV] + "/" + x;

export const getNum = async (): Promise<Number> => {
  return (await fetch(api("getNum"))).json() as Promise<Number>;
};