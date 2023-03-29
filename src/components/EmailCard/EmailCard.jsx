export default function EmailCard({ email }) {
    function handleChangeIsReadCheckBox(evt) {
        const val = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    }

    return (
        <div>
            <h3>{email.name}</h3>
            <h3>{email.email}</h3>
            <h3>{email.textBox}</h3>
            <h3>{email.createdAt}</h3>
            <div>
                <div>read?</div>
                <input
                    type="checkbox" name="isReadCheckbox"
                    checked={email.isRead}
                    onChange={handleChangeIsReadCheckBox} />
            </div>
            <hr />
        </div>
    )
}
