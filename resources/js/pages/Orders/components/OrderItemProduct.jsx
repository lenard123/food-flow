

export const OrderItemProduct = ({ item }) => {
  return (
      <li className="flex justify-between items-center py-2 border-b">
          <div className="flex items-center">
              <img
                  src={`/storage/${item.image}`}
                  alt="Product Image"
                  className="h-16 w-16 object-contain mr-4"
              />
              <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                      {item.pivot.quantity} x ₱{item.pivot.price}
                  </p>
              </div>
          </div>
          <span className="font-semibold">
              ₱{item.pivot.quantity * item.pivot.price}
          </span>
      </li>
  );
};