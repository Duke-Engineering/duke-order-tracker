import { GET_CART } from "../queries/queries";
import { GetCartQuery,GetCartQueryVariables } from "../graphql/queries/__generated__/queries";
import { useQuery } from "@apollo/client";

const useOrders=(variables?:GetCartQueryVariables)=>{
  const{data,loading,error,fetchMore,refetch} =useQuery<GetCartQuery,GetCartQueryVariables> (GET_CART,{
 fetchPolicy:"no-cache",
 variables
 });
 return {
   order :data?.getCart  ,
   loading,
   error,
   refetch,
   fetchMore
 };
 };
export default useOrders;
