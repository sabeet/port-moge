import './ScrollPage.css'
import './App.css'

const ScrollPage = () => {

    return(
    <>
        <div className="main">
            <section>
                <div>
                    <div className="wrapper">
                        <div className="column">

                            <div className="col col-100">
                                Hello
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section><div className="wrapper">
                        <div className="column">

                            <div className="col col-50">
                                Hello
                            </div>
                            <div className="col col-50">
                                Hello
                            </div>
                            <div className="col col-50">
                                Hello
                            </div>
                            <div className="col col-50">
                                Hello
                            </div>

                        </div>
                    </div></section>
            <section><div>3</div></section>
            <section><div>4</div></section>
        </div>
    </>
    )

}

export default ScrollPage
