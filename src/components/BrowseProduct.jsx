const BrowseProduct = (props) => {
    const {browseProduct} = props    
    return (
        <>
        <div className="mt-10 text-center">
            <p className="font-poppins font-bold text-2xl">Browse The Range</p>
            <p className="font-poppins font-light text-sm mt-2	">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="mt-5 flex justify-around flex-wrap m-5">
            {browseProduct.map((item, key) => (
            <div className="hover:grayscale">
                <img className="h-[475px] w-[381px] md:h-[450px] md:w-[370px] rounded-md" src={item.image} alt="" />
                <p className="text-center font-poppins font-semibold text-base mt-4">{item.name}</p>
            </div>
            ))}
        </div>
        </>
    )
}

export default BrowseProduct;