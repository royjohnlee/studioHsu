import './ContactPage.css';
import EmailCard from "../../components/EmailCard/EmailCard";
import { useState } from "react";
import * as emailAPI from '../../utilities/email-api'

export default function ContactPage({ user }) {
    const [emailBody, setEmailBody] = useState('');
    const [isRead, setIsRead] = useState(false);
    const [emails, setEmails] = useState([]);

    async function handleAddContact(evt) {
        evt.preventDefault();
        if (emailBody === "") return;
        const allEmail = await emailAPI.addEmail({
            name: user.name,
            email: user.email,
            textBox: emailBody,
            isRead
        });
        setEmails(allEmail);
        setEmailBody('');
        setIsRead(false);
    }

    async function toggleRead(email) {
        email.isRead = !email.isRead;
        setEmails([...emails]);
        await emailAPI.toggleRead(email);
    }

    async function handleDelete(id) {
        await emailAPI.deleteEmail(id)
        const filteredEmails = emails.filter(e => e._id !== id)
        setEmails(filteredEmails)
    }

    const emailCards = emails.map(e => (
        <EmailCard email={e} key={e._id} toggleRead={toggleRead} handleDelete={handleDelete} />
    ));

    return (
        <div>
            <h1 className='ContactUs'>Contact Us</h1>

            <form className="ContactForm" onSubmit={handleAddContact}>
                <div className='ContactForm-details'>
                    <h3>Your Name: {user.name}</h3>
                    <h3>Your Email: {user.email}</h3>
                    <textarea
                        value={emailBody}
                        placeholder='Questions or Price Quote'
                        onChange={evt => setEmailBody(evt.target.value)
                        }
                    />
                    <button>Submit</button>
                </div>
            </form>
            {user.admin && <div>{emailCards}</div>}
        </div>
    );
}
