const Loader = (props) => {
    const {showLoader} = props;
    return ( 
        <>
         {
            showLoader &&
           <div className="loader_outer">
             <div className = "loader"> </div>
           </div>
        }
         
        </>
    )
}

export default Loader