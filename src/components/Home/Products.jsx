const Products = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Yes Specialist</td>
              <td>
                <button className="btn btn-sm normal-case ">Add Product</button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>2</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Yes Specialist</td>
              <td>
                <button className="btn btn-sm normal-case ">Add Product</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
