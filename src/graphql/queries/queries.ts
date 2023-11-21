import { gql } from "@apollo/client";
export const GET_CART = gql`
query GetCart($filter: CartFilter) {
  getCart(filter: $filter) {
    delivery_id
    delivery {
      country
      id
      isPayOnline
      location
      price
      remarks
    }
    id
    customer_id
    customer_address_id
    user_id
    order_total
    delivery_amount
    customer_paid
    cart_number
    orderItems {
      comments {
        createdAt
        id
        message
        staff_name
        title
        updatedAt
      }
      createdAt
      id
      orderNumber
      order_id
      price
      profitAdded
      product {
        avatar
        description
        title
      }
      quantity
      sku
      status
      history {
        created_at
        id
        ops_personel
        status
        updated_at
      }
    }
    
    payment_status
    discount
    free_delivery
    payment_id
    payment_type
    tracking_code
    delivery_instructions
    country
    createdAt
    updatedAt
    address {
      area
      city
    }
  }
}
`;
