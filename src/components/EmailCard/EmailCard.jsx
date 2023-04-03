export default function EmailCard({ email, toggleRead, handleDelete }) {
    return (
        <div>
            <h3>{email.name}</h3>
            <h3>{email.email}</h3>
            <p>{email.textBox}</p>
            <h3>{email.createdAt}</h3>
            <div>
                <div>read?</div>
                <input
                    type="checkbox"
                    checked={email.isRead}
                    onChange={() => toggleRead(email)} />
            </div>
            <button onClick={() => handleDelete(email._id)}>Delete</button>
            <hr />
        </div>
    )
}
