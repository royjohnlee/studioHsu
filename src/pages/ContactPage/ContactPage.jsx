import { useState } from "react";

export default function ContactPage({ user }) {
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        textBox: "",
    })

    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    function handleAddContact(evt) {
        evt.preventDefault();
    }

    return (
        <div>
            <h1>ContactPage</h1>

            <form className="ContactForm" onSubmit={handleAddContact}>
                <div>
                    <label htmlFor="ContactUs">Contact Us</label>
                    <input
                        type="text"
                        name="textBox"
                        value={formData.textBox}
                        onChange={handleChange}
                    />
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}
