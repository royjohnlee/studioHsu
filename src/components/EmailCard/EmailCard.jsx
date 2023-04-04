import './EmailCard.css';
export default function EmailCard({ email, toggleRead, handleDelete }) {
    return (
        <div className='ContactCard'>
            <p>Their Name: {email.name}</p>
            <p>Their Email: {email.email}</p>
            <p className='Submitted-info'>{email.textBox}</p>
            <p>{email.createdAt}</p>
            <div >
                <div>read?</div>
                <input
                    type="checkbox"
                    checked={email.isRead}
                    onChange={() => toggleRead(email)} />
            </div>
            <button onClick={() => handleDelete(email._id)}>Delete</button>

        </div>
    )
}
