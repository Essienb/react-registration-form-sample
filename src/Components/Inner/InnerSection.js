import FormSection from "../FormSection/FormSection";


function InnerSection() {
    return(
        <div className="inner-section container text-white col-5 py-5" > 
            <div className="form-banner bg-white  mx-5 p-5">
                <FormSection />
            </div>
        </div>
    );
}
export default InnerSection;