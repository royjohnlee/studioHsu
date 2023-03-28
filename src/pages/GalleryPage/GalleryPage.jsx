export default function GalleryPage({ user }) {
    console.log(user)
    return (
        <>
            <h1>GalleryPage</h1>

            {user.admin && <button>button</button>}
        </>
    );
}
