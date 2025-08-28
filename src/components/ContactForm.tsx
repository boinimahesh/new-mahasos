import { useState } from 'react'
import useResponsive from '../hooks/responsive.hook';
import Button from './Button';
import Modal from './Modal';
import Loading from './Loading';

interface Errors {
    username?: string;
    email?: string;
    phone?: string;
    companyname?: string;
    message?: string;
}

const ContactForm = () => {
    const { isMobile } = useResponsive();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        companyname: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState<Errors>({
        username: "",
        email: "",
        companyname: "",
        phone: "",
        message: ""
    });
    
    const validate = () => {
        let tempErrors: Errors = {
            username: "",
            email: "",
            companyname: "",
            phone: "",
            message: ""
        };
        let isValid = true;

        if (!formData.username?.trim()) {
            tempErrors.username = "Name is required.";
            isValid = false;
        }

        if (!formData.email) {
            tempErrors.email = "Email is required.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is not valid.";
            isValid = false;
        }
        if (!formData.phone) {
            tempErrors.phone = "Contact number is required.";
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.phone)) {
            tempErrors.phone = "Phone number should be 10 digits.";
            isValid = false;
        }
        if (!formData.companyname?.trim()) {
            tempErrors.companyname = "Company is required.";
            isValid = false;
        }
        if (!formData.message?.trim()) {
            tempErrors.message = "Message is required.";
            isValid = false;
        }
        setErrors(tempErrors);
        return isValid;
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setIsLoading(true);
            console.log("Form Submitted", formData);
            setFormData({ 
                username: "", 
                email: "", 
                companyname: "", 
                phone: "", 
                message: "" 
            });
            setErrors({});
        }
        setIsModalOpen(true);
        setIsLoading(false);
    }
    return (
        <>
            {isLoading && <Loading />}
            <form className="contactform" onSubmit={onSubmit} noValidate>
                <div className="row">
                    <div className={isMobile ? 'w_12' : 'w_6'}>
                        <div className="formgroup">
                            <div className="form-gp-main">
                                <input 
                                    className={`${formData.username && 'fcActive'} formcontrol`}
                                    type="text" 
                                    id="username" 
                                    name="username" 
                                    value={formData.username}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    required 
                                />
                                <label className="label">Name</label>
                            </div>
                            {errors.username && <span className="invalid-text">{errors.username}</span>}
                        </div>
                    </div>
                    <div className={isMobile ? 'w_12' : 'w_6'}>
                        <div className="formgroup">
                            <div className="form-gp-main">
                                <input 
                                    className={`${formData.email && 'fcActive'} formcontrol`}
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    required 
                                />
                                <label className="label">E-mail</label>
                            </div>
                            {errors.email && <span className="invalid-text">{errors.email}</span>}
                        </div>
                    </div>
                    <div className={isMobile ? 'w_12' : 'w_6'}>
                        <div className="formgroup">
                            <div className="form-gp-main">
                                <input  
                                    className={`${formData.companyname && 'fcActive'} formcontrol`}
                                    type="text" 
                                    id="companyname" 
                                    name="companyname" 
                                    value={formData.companyname}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    required 
                                />
                                <label className="label">Company Name</label>
                            </div>
                            {errors.companyname && <span className="invalid-text">{errors.companyname}</span>}
                        </div>
                    </div>
                    <div className={isMobile ? 'w_12' : 'w_6'}>
                        <div className="formgroup">
                            <div className="form-gp-main">
                                <input  
                                    className={`${formData.phone && 'fcActive'} formcontrol`}
                                    type="text" 
                                    id="phone" 
                                    name="phone" 
                                    value={formData.phone}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    required 
                                />
                                <label className="label">Contact Number</label>
                            </div>
                            {errors.phone && <span className="invalid-text">{errors.phone}</span>}
                        </div>
                    </div>
                    <div className="w_12">
                        <div className="formgroup">
                            <div className="form-gp-main">
                                <textarea 
                                    className={`${formData.message && 'fcActive'} formcontrol`}
                                    id="message"
                                    name="message" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                                <label className="label">Message</label>
                            </div>
                            {errors.message && <span className="invalid-text">{errors.message}</span>}
                        </div>
                    </div>
                    <div className={isMobile ? 'w_12' : 'w_6'}>
                        <Button type="submit" text="Submit" />
                    </div>
                </div>
            </form>
                {isModalOpen && (
                    <Modal
                        onClose={''}
                    >
                        <div className="thank-you-contact-wrp">
                            <div className="thank-you-icon">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="64" 
                                    height="64" 
                                    viewBox="0 0 64 64" 
                                    version="1.1"
                                    fill="currentColor"
                                >
                                    <path 
                                        d="M18,30L18,58.5C18,58.5 19.875,58.757 20.686,59.244L24.756,61.686C26.189,62.546 27.829,63 29.5,63L57.105,63C58.801,63 60.428,62.326 61.627,61.127C62.826,59.928 63.5,58.301 63.5,56.605L63.5,56.395C63.5,54.758 62.872,53.186 61.75,52C62.872,50.814 63.5,49.242 63.5,47.605L63.5,47.395C63.5,45.758 62.872,44.186 61.75,43C62.872,41.814 63.5,40.242 63.5,38.605L63.5,38.395C63.5,36.758 62.872,35.186 61.75,34C62.872,32.814 63.5,31.242 63.5,29.605L63.5,29.395C63.5,27.699 62.826,26.072 61.627,24.873C60.428,23.674 58.801,23 57.105,23L44.615,23C44.054,23 43.516,22.777 43.12,22.38C42.723,21.984 42.5,21.446 42.5,20.885L42.5,7.395C42.5,5.699 41.826,4.072 40.627,2.873C39.428,1.674 37.801,1 36.105,1L35.895,1C34.199,1 32.572,1.674 31.373,2.873C30.174,4.072 29.5,5.699 29.5,7.395L29.5,13.556C29.5,19.965 26.159,25.91 20.685,29.242L20.668,29.252C19.864,29.741 18,30 18,30ZM15,29C15,27.895 14.105,27 13,27L3,27C1.895,27 1,27.895 1,29L1,59C1,60.105 1.895,61 3,61L13,61C14.105,61 15,60.105 15,59L15,29ZM11,31L11,57L5,57L5,31L11,31Z"
                                    />
                                </svg>
                            </div>
                            <h1 className="thank-you-title">Thank you!</h1>
                            <div className="thank-you-desc">
                                <p>Your submission has been sent.</p>
                                <p>We come get back to you</p>
                            </div>
                            <Button type="button" text="Okay" onClick={()=> setIsModalOpen(false)} />
                        </div>
                    </Modal>
                )}
        </>
    )
}

export default ContactForm