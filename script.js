document.addEventListener('DOMContentLoaded', function() {
    const portfolio = document.getElementById('portfolio');

    // Create Header
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    nav.className = 'navbar navbar-expand-lg navbar-light bg-light';
    
    const brand = document.createElement('a');
    brand.className = 'navbar-brand';
    brand.textContent = "YASSIN MOUNIR";
    brand.href = '#';
    
    const toggleButton = document.createElement('button');
    toggleButton.className = 'navbar-toggler';
    toggleButton.setAttribute('type', 'button');
    toggleButton.setAttribute('data-toggle', 'collapse');
    toggleButton.setAttribute('data-target', '#navbarSupportedContent');
    toggleButton.setAttribute('aria-controls', 'navbarSupportedContent');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.setAttribute('aria-label', 'Toggle navigation');
    
    const toggleIcon = document.createElement('span');
    toggleIcon.className = 'navbar-toggler-icon';
    toggleButton.appendChild(toggleIcon);
    
    const collapseDiv = document.createElement('div');
    collapseDiv.className = 'collapse navbar-collapse';
    collapseDiv.id = 'navbarSupportedContent';
    
    const ul = document.createElement('ul');
    ul.className = 'navbar-nav ml-auto mb-2 mb-lg-0';
    
    const sections = ['Services', 'Projects', 'Contact'];
    sections.forEach(section => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        const a = document.createElement('a');
        a.className = 'nav-link';
        a.href = `#${section.toLowerCase()}`;
        a.textContent = section;
        li.appendChild(a);
        ul.appendChild(li);
    });
    
    collapseDiv.appendChild(ul);
    nav.appendChild(brand);
    nav.appendChild(toggleButton);
    nav.appendChild(collapseDiv);
    header.appendChild(nav);
    portfolio.appendChild(header);

    // Create Intro Section
    const intro = document.createElement('section');
    intro.id = 'intro';
    intro.innerHTML = `
        <div class="intro-content">
            <h1>YASSIN MOUNIR</h1>
            <p>I am a software engineer with experience over than x years</p>
            <p class="icons-container">
                <a href="https://www.linkedin.com/in/yassin-mounir-099914317"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/yassoyassofree/yassoyassofree?files=1"><i class="fa-brands fa-square-github"></i></a>
                <a href="https://www.tiktok.com/search?q=Alyasso&t=1717691353166"><i class="fa-brands fa-tiktok"></i></a>
                <a href="https://www.instagram.com/yassinmounir2013"><i class="fa-brands fa-square-instagram"></i></a>
            </p>
        </div>
    `;
    portfolio.appendChild(intro);

    // Create Services Section
    const services = document.createElement('section');
    services.id = 'services';
    services.className = 'bg-light py-5';
    services.innerHTML = `
        <div class="container">
            <h3>Services</h3>
            <div class="row justify-content-center">
                <div class="col-md-4 mb-4">
                    <i class="fa-brands fa-html5" id="html"></i>
                    <h4>HTML5</h4>
                    <p>HTML stands for Hyper Text Markup Language. It is the standard markup language for creating web pages...</p>
                </div>
                <div class="col-md-4 mb-4">
                    <i class="fa-brands fa-css3-alt" id="css"></i>
                    <h4>CSS3</h4>
                    <p>CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on the screen...</p>
                </div>
                <div class="col-md-4 mb-4">
                    <i class="fa-brands fa-node-js" id="node"></i>
                    <h4>Node JS</h4>
                    <p>JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web...</p>
                </div>
            </div>
        </div>
    `;
    portfolio.appendChild(services);

    // Create Projects Section
    const projects = document.createElement('section');
    projects.id = 'projects';
    projects.innerHTML = `
        <h3>Projects</h3>
        <img src="mobile_app_development.png" alt="">
        <img src="attachment1.png" alt="">
        <img src="attachment2.png" alt="">
        <img src="attachment3.png" alt="">
    `;
    portfolio.appendChild(projects);

    // Create Contact Section
    const contact = document.createElement('section');
    contact.id = 'contact';
    contact.innerHTML = `
        <h3>Contact</h3>
        <p>NUMBER: 01023241914</p>
        <p>EMAIL: yassinmounir2013@gmail.com</p>
    `;
    portfolio.appendChild(contact);
});