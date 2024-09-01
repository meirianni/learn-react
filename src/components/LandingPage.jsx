

const LandingPage = () => {
  
    
    return (
        <>
        <div className="relative">
            <img className="h-[600px] w-lvw	 mt-2"
            src="https://images.unsplash.com/photo-1491926626787-62db157af940?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       
            <div className="absolute right-20 top-32 bg-customMixed lg:h-[350px] lg:w-[500px] md:h-[250] md:w-[300px]rounded sm:ml-5">
                <div className="p-10 font-poppins">
                    <p className="text-fontColor tracking-wide font-medium ">New Arrival</p>
                    <p className="text-primary font-extrabold text-5xl tracking-widest mt-2">Discover Our <br />New Collection</p>
                    <p className="mt-2 tracking-tight text-fontColor	">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    {/* <button className="bottom-0  mt-5 p-3 bg-primary">Buy Now</button> */}
                    <div className="h-10 w-28 mt-5">
                        <p className="p-5 bg-primary text-white rounded	hover:shadow-2xl">Buy Now</p>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default LandingPage