import React, {useRef} from "react";
import styles from "./Contacts.module.scss";
import Title from "../Common/components/Title/Title";
import Button from "../Common/components/Button/Button";
import axios from "axios";

function Contacts() {

    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        addOrder(nameRef.current.value, emailRef.current.value, messageRef.current.value)
        nameRef.current.value = ""
        emailRef.current.value = ""
        messageRef.current.value = ""
    }

    const addOrder = async (name, email, message) => {
        try {
            const response = await axios.post("https://6319cac38e51a64d2bec7366.mockapi.io/portfolio", {
                name, email, message
            });
            alert(`Thank you, ${response.data.name}, for your message.`)
        } catch
            (e) {
            alert("Error" + e.message)
        }
    }

    return (
        <div className={styles.contactsMain} id="contacts">
            <div className={styles.contacts}>
                <Title text={"Contacts"}/>
                <div className={styles.contactsBlock}>
                    <div className={styles.infoBlock}>
                        <h3>LET'S GET IN TOUCH</h3>
                        <div className={styles.info}>
                            <div><strong>Phone</strong><a href="tel:+375336184700">+375 33 618-47-00</a></div>
                            <div><strong>Email</strong><a
                                href="mailto:novickiy.mikhail@gmail.com">novickiy.mikhail@gmail.com</a></div>
                            <div><strong>GitHub</strong><a href="https://github.com/MichaelNovickiy">Click here</a>
                            </div>
                            <div><strong>LinkedIn</strong><a href="https://linkedin.com/in/michaelnovickiy">Click here</a>
                            </div>
                            <div><strong>Telegram</strong><a href="https://t.me/Michael_Novickiy">Click here</a>
                            </div>
                            <div><strong>Address</strong>Minsk, Belarus</div>
                        </div>
                    </div>
                    <form className={styles.form} onSubmit={onSubmitHandler}>
                        <h3>DROP ME A LINE</h3>
                        <div className={styles.formData}>
                            <label htmlFor="name"><strong>Your name:</strong></label>
                            <input id="name" type="text" placeholder="Name" ref={nameRef} required/>
                        </div>
                        <div className={styles.formData}>
                            <label htmlFor="email"><strong>Your email:</strong></label>
                            <input id="email" type="text" placeholder="Email@gmail.com" ref={emailRef} required/>
                        </div>
                        <div className={styles.formData}>
                            <label htmlFor="message"><strong>Your message:</strong></label>
                            <textarea id="message" placeholder="Message..." ref={messageRef} required/>
                        </div>
                        <Button type="submit">Send</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts;