import { Link } from "react-router-dom";

function ProductsCard(props) {

    if (!props.data) {
        return null;
    }

    return (
        <Link to={`/Product_det/${props.data.product_tbl_id}`}>
            <div className="p-3 rounded-lg shadow-md hover:shadow-xl transition">
                
                <img src={props.data.product_img} alt="Product"
                    className="w-full h-40 object-cover rounded"/>

                <h3 className="mt-2 font-semibold text-lg"> {props.data.product_name}</h3>

                <div className="flex justify-between items-center mt-2">
                    <p className="text-gray-700 font-bold">₹{props.data.price}</p>

                    <span className="text-yellow-500 text-lg"> ⭐⭐⭐⭐ </span>
                </div>

                <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-xl w-full hover:bg-blue-700">View Product </button>

            </div>
        </Link>
    );
}

export default ProductsCard;