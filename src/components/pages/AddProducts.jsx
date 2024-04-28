const AddProducts = () => {
  return (
    <form>
      <div className="space-y-4">
        <input label="Name" placeholder="name" />
        <input label="text" type="email" placeholder="Quantity" />
        <input label="Password" type="password" placeholder="Category" />
        <input label="Address" placeholder="Enter your address" />
      </div>
      <button className="btn btn-primary mt-4">Submit</button>
    </form>
  );
};

export default AddProducts;
