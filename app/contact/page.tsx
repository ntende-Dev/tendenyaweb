"use client";

import { ImPhone } from "react-icons/im";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMail, MdLocationPin, MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import c from "../contact/Contact.module.scss";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Enter your name").min(3).max(30),
    email: yup.string().email().required("Enter your email"),
    subject: yup.string().required("Enter subject").max(50),
    message: yup.string().required("Write your message").max(300),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const Contact = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const submitForm = (data: FormData) => {
    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(data),
    });
    console.log(data);
    router.push("/thanks");
  };

  /*const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });

    console.log("submitted");
    router.push("/thanks");
  };*/

  return (
    <>
      <div className="container">
        <div className={c.contactWrapper}>
          <div className={c.leftWrapper}>
            <div className={c.wherearewe}>
              {" "}
              <p className="breadCrumb">CONTACT US</p>
              <h1 className="titleBg">Where we are</h1>
              <p className={c.paraLine}>
                If you have any questions or would like to discuss your project
                with us, please don't hesitate to reach out.
              </p>
            </div>

            <div className={c.left}>
              <ImPhone className={c.icon} />
              <div>
                <h3 className="title2">Phone</h3>
                <p>073 793 7267</p>
              </div>
            </div>

            <div className={c.left}>
              <MdOutlineMail className={c.icon} />
              <div>
                <h3 className="title2">Email:</h3>
                <p>sales@tendenya.co.za</p>
              </div>
            </div>

            <div className={c.left}>
              <MdLocationPin className={c.icon} />
              <div>
                <h3 className="title2">Address:</h3>
                <p>
                  79 Mahematshena Dzwerani, <br />
                  Thohoyandou, 0950 <br /> Limpopo Province, South Africa
                </p>
              </div>
            </div>
          </div>
          <div className={c.rightWrapper}>
            <form className={c.formWrapper} onSubmit={handleSubmit(submitForm)}>
              <p className={c.fill}>
                Fill out the form below and a member of our team will be in
                touch shortly.
              </p>
              <h1 className="title2">Contact Form</h1>
              <div className={c.inputContainer}>
                {" "}
                <input type="text" placeholder="Name" {...register("name")} />
                <p className="errors">{errors.name?.message}</p>
              </div>

              <div className={c.inputContainer}>
                <input type="text" placeholder="Email" {...register("email")} />
                <p className="errors">{errors.email?.message}</p>
              </div>
              <div className={c.inputContainer}>
                <input
                  type="text"
                  placeholder="Subject"
                  {...register("subject")}
                />
                <p className="errors">{errors.subject?.message}</p>
              </div>
              <div className={c.inputContainer}>
                <textarea
                  placeholder="Type your message here..."
                  {...register("message")}
                />
                <p className="errors">{errors.message?.message}</p>
              </div>
              <div className={c.radioWrapper}>
                <input type="radio" className="radio" />
                <p>
                  I do accept the{" "}
                  <span className={c.terms}>
                    <Link href="/terms">
                      Terms and
                      <br /> Conditions
                    </Link>
                  </span>{" "}
                  of your website
                </p>
              </div>
              <input
                type="submit"
                value="Submit Form"
                className={c.contactBtn}
              />
            </form>

            <div className={c.socialIcons}>
              <h1 className={c.title}>
                You can also connect with us on social media:{" "}
              </h1>
              <p>
                We look forward to hearing from you and bringing your vision to
                life!
              </p>
              <div className={c.socialLinks}>
                <Link href={"https://web.facebook.com/khathutshelo.mamphodo"}>
                  <MdFacebook className={c.icon} />
                </Link>
                <Link href={"https://twitter.com/"}>
                  <AiFillTwitterCircle className={c.icon} />
                </Link>
                <Link href={"https://instagram.com/"}>
                  <AiFillInstagram className={c.icon} />
                </Link>
                <Link href={"https://whatsapp.com/"}>
                  <BsWhatsapp className={c.icon} style={{ fontSize: 27 }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
