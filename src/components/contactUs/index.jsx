import React, { useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import Button from "../button";
import contactUsBg from "../../assets/25.jpg";
import Checkbox from "../checkbox";
import axios from "axios";
import "./styles.sass";

const ContactUs = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const data = {
      name,
      company,
      email,
      country: city,
      message,
    };
    try {
      await axios.get(`https://eascompany.uz/sendMessage?message=${JSON.stringify(data)}`);
      toast.success(t("blocks.toaster.success"));
      setName("");
      setMessage("");
      setEmail("");
      setCompany("");
      setCity("");
    } catch (error) {
      toast.error(`${t("blocks.toaster.error")}: ${error.message}`);
    }
  };

  return (
    <section
      className='contactUs'
      id='contact'
    >
      <div className='contactUsImage'>
        <img
          src={contactUsBg}
          alt='contactUsBg'
          className='img'
        />
      </div>
      <form
        className='contactUsContainer'
        onSubmit={sendMessage}
      >
        <div className='container'>
          <div className='contactUsContentForm'>
            <div className='contactsHeader'>
              <div className='contactsTitle'>
                <h3 className='title'>{t("blocks.contactUs.title")}</h3>
              </div>
              <div className='contactsSubtitle'>
                <p className='subtitle'>{t("blocks.contactUs.subtitle")}</p>
              </div>
            </div>
            <div className='formItemsContainer'>
              <div className='formInputs'>
                <div className='formFields'>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='input'
                    required
                    value={name}
                    placeholder={`${t("blocks.contactUs.name")}`}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='formFields'>
                  <input
                    type='text'
                    id='company'
                    name='company'
                    className='input'
                    required
                    value={company}
                    placeholder={`${t("blocks.contactUs.company")}`}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className='formFields'>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='input'
                    required
                    value={email}
                    placeholder={`${t("blocks.contactUs.email")}`}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='formFields'>
                  <input
                    type='text'
                    id='city'
                    name='city'
                    className='input'
                    required
                    value={city}
                    placeholder={`${t("blocks.contactUs.city")}`}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className='formFields'>
                  <input
                    type='text'
                    id='message'
                    name='message'
                    className='input'
                    required
                    value={message}
                    placeholder={`${t("blocks.contactUs.text")}`}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
              <div className='formBtn'>
                <Button disabled={!isChecked}>{t("blocks.contactUs.submit")}</Button>
              </div>
            </div>
            <div className='formCheckbox'>
              <div className='fromCheck'>
                <Checkbox onChange={handleCheckboxChange} />
              </div>
              <div className='checkboxText'>
                <p className='text'>{t("blocks.contactUs.checkboxText")}</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;



