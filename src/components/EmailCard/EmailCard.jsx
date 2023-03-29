export default function EmailCard({ email }) {
    return (
        <div>
            <h3>{email.name}</h3>
            <h3>{email.email}</h3>
            <h3>{email.textBox}</h3>
            <hr />
        </div>
    )
}
