export const Heros = () => {
    return (
        <div>
            <div className="d-none d-lg-block">
                <div className="row g-0 mt-5">
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-left"></div>
                    </div>

                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>What have you been reading?</h1>
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsa, impedit, laborum harum
                                quo architecto exercitationem explicabo, tenetur
                                dignissimos nulla debitis quasi magni sit eaque
                                quis expedita. Voluptates cum sed adipisci?
                            </p>
                            <a
                                className="btn main-color btn-lg text-white"
                                href="#"
                            >
                                Sign up
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>Our collection is always changing!</h1>
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Deserunt, esse ratione quam
                                quasi perferendis necessitatibus distinctio
                                autem quaerat. Explicabo error ipsum at illum
                                dolorem reiciendis molestiae ut maiores,
                                mollitia velit.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-right"></div>
                    </div>
                </div>
            </div>

            {/* MoBile Heros */}
            <div className="d-lg-none">
                <div className="container">
                    <div className="m-2">
                        <div className="col-image-left"></div>
                        <div className="mt-2">
                            <h1>What have you been reading?</h1>
                            <p className="lead">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Beatae voluptates est commodi
                                quasi, velit expedita temporibus. Suscipit
                                voluptatum atque voluptas vero accusamus totam
                                possimus consequatur odio tempore reprehenderit.
                                Sint, optio.
                            </p>
                            <a
                                className="btn main-color btn-lg text-white"
                                href="#"
                            >
                                Sign up
                            </a>
                        </div>
                        <div className="m-2">
                            <div className="col-image-right"></div>
                            <div className="mt-2">
                                <h1>Our collection is always changing!</h1>
                                <p className="lead">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Corrupti similique
                                    repellat quasi expedita. At unde enim
                                    deleniti voluptatem, aut quae, perferendis
                                    est id hic, deserunt eaque quidem nihil
                                    maxime et!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
