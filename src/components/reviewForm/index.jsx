import React, { useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import Button from "../button";
import contactUsBg from "../../assets/25.jpg";
import Checkbox from "../checkbox";
import axios from "axios";
import "./styles.sass";

const ReviewForm = () => {
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
      className='reviewForm'
      id='contact'
    >
      <div className='reviewFormImage'>
        <img
          src={contactUsBg}
          alt='contactUsBg'
          className='img'
        />
      </div>
      <form
        className='reviewFormContainer'
        onSubmit={sendMessage}
      >
        <div className='container'>
          <div className='reviewFormContent'>
            <div className='reviewFormHeader'>
              <div className='reviewFormTitle'>
                <h3 className='title'>Оставьте свой отзыв</h3>
              </div>
              <div className='reviewFormSubtitle'>
                <p className='subtitle'>Мы будем рады вашей обратной связи!</p>
              </div>
            </div>
            <div className='reviewFormContainer'>
              <div className='reviewFormInputs'>
                <div className='reviewFormFields'>
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
                <div className='reviewFormFields'>
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
                <div className='reviewFormFields'>
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
              <div className='reviewFormBtn'>
                <Button disabled={!isChecked}>{t("blocks.contactUs.submit")}</Button>
              </div>
            </div>
            <div className='reviewFormCheckbox'>
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

export default ReviewForm;
