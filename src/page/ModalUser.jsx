import "../css/page/modaluser.css"

import heart from "../assets/heart.png"

const ModalUser = () => {
    return (
        <>
        <div className="bg-customGrey max-w-xl	max-h-max h-60 mx-auto mt-32 rounded-xl	">
            <div className="texttt">
                <br />
                <p className="ml-5 font-bold text-2xl">Detail User</p>
                <div className="flex justify-left mt-5 ml-5">
                    
                    <img className="img2 w-36 h-36 rounded-full mr-5" src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />

                    <div className="flex items-center">
                        <div className="key">
                            <p>Name</p>
                            <p>Email</p>
                            <p>Phone Number</p>
                        </div>
                        <div className="value ml-5">
                            <p>: Mayes</p>
                            <p>: meirianni24@gmail.com</p>
                            <p>: +6725425364</p>
                        </div>
                    </div>
                </div>

                {/* <img className="img2 w-36 h-36 rounded-full" src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" /> */}

            </div>
        </div>
        </>
    )
}

export default ModalUser