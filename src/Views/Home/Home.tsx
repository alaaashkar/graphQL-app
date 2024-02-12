import { Products } from "./components/Products/Products";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";

export const Home = () => {
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const errMessage = useSelector((state: RootState) => state.products.errMessage);


  return (
    <>
     
      {errMessage ? (
        <p>Error: {errMessage}</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <Products />
      )}
    </>
  );
};
