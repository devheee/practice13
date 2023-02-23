function Product() {
    return (
        <section className="Main_product">
            <ul>
                <li>
                    <a href=""><img src={process.env.PUBLIC_URL + '/img/p01.jpg'} alt="" /></a>
                    <div className="dec"><p>[BLUDOT]하프집업 볼륨 티셔츠 Plus_NY</p></div>
                </li>
                <li>
                    <a href=""><img src={process.env.PUBLIC_URL + '/img/p01.jpg'} alt="" /></a>
                    <div className="dec"><p>[BLUDOT]하프집업 몰륨 티셔츠 Plus_NY</p></div>
                </li>
                <li>
                    <a href=""><img src={process.env.PUBLIC_URL + '/img/p01.jpg'} alt="" /></a>
                    <div className="dec"><p>[BLUDOT]하프집업 몰륨 티셔츠 Plus_NY</p></div>
                </li>
                <li>
                    <a href=""><img src={process.env.PUBLIC_URL + '/img/p01.jpg'} alt="" /></a>
                    <div className="dec"><p>[BLUDOT]하프집업 몰륨 티셔츠 Plus_NY</p></div>
                </li>
            </ul>
        </section>
    )
}

export default Product;