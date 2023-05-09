const EmptyOrdersPage = () => {
    return (
      <div className="flex flex-col items-center justify-center py-40">
        <h1 className="text-4xl font-bold mb-4">There is no pending orders yet.</h1>
        <p className="text-lg text-gray-500 mb-8">
          Once you place an order, it will appear here.
        </p>
        <a href="/products" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Place an Order
        </a>
      </div>
    );
  };
  
export default EmptyOrdersPage;
  