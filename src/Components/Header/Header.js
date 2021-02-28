import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="mb-4" >
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark container">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">CSL</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">News</a>
                            <a class="nav-link" href="#">Team</a>
                            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Fixture</a>
                        </div>
                    </div>
                    <form class="d-flex" >
                        <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-dark text-white" type="submit">Search</button>
                    </form>

                </div>
            </nav>
        </div>
    );
};

export default Header;