function Contact({loading}){
    if (loading) {
        return <div>loading</div>
    }
    return(
        <div>
            <h1>Võta meiega ühendust!</h1>
            <p>Kirjuta meile!</p>
        </div>
    )
}

export default Contact;