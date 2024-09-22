import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/visitor-log-621530.png" alt="Bootstrap" width="30" height="30" />
                    </a>
                    <a class="navbar-brand" href="#">VISITOR ENTRY APP</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">ADD</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/viewallvisitors">VIEW</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
