const 
    mainContent = document.getElementById('content'),
    header = createHeader(),
    billboard = createBillboard(),
    sectionLinks = createSectionLinks(),
    aboutUs = createAboutUs(),
    footer = createFooter(),
    menuBillboard = createMenuBillboard(),
    dishes = createDishes(),
    contactBillboard = createContactBillboard(),
    contactInfo = createContactInfo(),
    menuBtn = sectionLinks.querySelector('#menu-link button'),
    contactBtn = sectionLinks.querySelector('#contact-link button'),
    homeLink = header.querySelector('#navigation .home-link'),
    menuLink = header.querySelector('#navigation .menu-link'),
    contactLink = header.querySelector('#navigation .contact-link'),
    homeTab = header.querySelector('.home-link'),
    menuTab = header.querySelector('.menu-link'),
    contactTab = header.querySelector('.contact-link');

export const homeBillboard = billboard.querySelector('#billboard-text');

function createHeader() {

    const headerBuild = document.createElement("div");
    headerBuild.setAttribute("id", "header");
    const topbar = document.createElement("div");
    topbar.setAttribute("id", "topbar");
    topbar.innerHTML = "<p>1-9-21, Hiro, Shibua-Ku, Tokyo 150-0012</p>"
    const navigation = document.createElement("div");
    navigation.setAttribute("id", "navigation");
    navigation.innerHTML = "<ul><li class='home-link'><a href='#'>Home</a></li>"+
    "<li class='menu-link'><a href='#'>Menu</a></li>"+
    "<li class='contact-link'><a href='#'>Contact</a></li></ul>";

    

    headerBuild.appendChild(topbar);
    headerBuild.appendChild(navigation);

    return headerBuild;
}

function createBillboard() {

    const billboardBuild = document.createElement("div");
    billboardBuild.setAttribute("id", "billboard");
    billboardBuild.innerHTML = "<div id='billboard-text'></div>";

    return billboardBuild;
}

function createSectionLinks() {

    const sectionLinksBuild = document.createElement("div");
    sectionLinksBuild.setAttribute("id", "section-links");
    const menuLink = document.createElement("div");
    menuLink.setAttribute("id", "menu-link");
    menuLink.innerHTML = "<h2>Our Menu</h2><p>Check out our latest dishes</p><button>See More</button>";
    const contactLink = document.createElement("div");
    contactLink.setAttribute("id", "contact-link");
    contactLink.innerHTML = "<h2>Contact Us</h2><p>Questions, suggestions or just a plain, old hello</p><button>See more</button>";
    
    sectionLinksBuild.appendChild(menuLink);
    sectionLinksBuild.appendChild(contactLink);

    return sectionLinksBuild;
}

function createAboutUs() {

    const aboutUsBuild = document.createElement("div");
    aboutUsBuild.setAttribute("id", "about-us");
    aboutUsBuild.innerHTML = "<h2>What is Umai?</h2><p>From sweet to salty, from sour to umami – Umai offers a variety of flavors to discover.<br>" +
    "Whether it be fish, vegetables, seafood, or sushi. Pickled, grilled, cooked, or raw.<br>" + 
    "Come to Umai to treat your tastebuds with our fresh seasonal ingredients.</p>";

    return aboutUsBuild;
}

function createFooter() {

    const footerBuild = document.createElement("div");
    footerBuild.setAttribute("id", "footer");
    footerBuild.innerHTML = "<p><a href='#'>Elizabeth Phillips</a> 2023</p>";

    return footerBuild;
}

///// MENU PAGE /////

function createMenuBillboard() {
    const menuBillboardBuild = document.createElement("div");
    menuBillboardBuild.setAttribute("id", "billboard");
    menuBillboardBuild.innerHTML = "<h1>Our Menu</h1>";

    return menuBillboardBuild;
}

function createDishes() {

    const dishesBuild = document.createElement("div");
    dishesBuild.setAttribute("id", "dishes");
    dishesBuild.innerHTML = "<div class='dish beef'><h2>Beef Stew</h2><p>A sweet and spicy beef dish</p>" +
    "<button>See More</button></div><div class='dish eggplant'><h2>Eggplant Pie</h2>" +
    "<p>Pastry and vegetables with a eggplant twist</p><button>See more</button></div><div class='dish seafood'>"+
    "<h2>Seafood Rice</h2><p>Stirfried rice with Seafood</p><button>See More</button></div><div class='dish apple'>"+
    "<h2>Apple & Cinnamon pie</h2><p>Warm, crispy and sweet</p><button>See more</button></div>";

    return dishesBuild;
}

///// CONTACT PAGE /////

function createContactBillboard() {
    const contactBillboardBuild = document.createElement("div");
    contactBillboardBuild.setAttribute("id", "billboard");
    contactBillboardBuild.innerHTML = "<h1>Contact Us</h1>";

    return contactBillboardBuild;
}

function createContactInfo() {

    const contactInfoBuild = document.createElement("div");
    contactInfoBuild.setAttribute("id", "contact-info");
    contactInfoBuild.innerHTML = "<div class='contact-info address'><h2>Visit Us at:</h2><p>1-9-21, Hiro, Shibuya-ku, Tokyo 150-0012</p>"+
    "<h3>Or call:</h3><p>02311 134 124</p></div><div class='contact-info form'><h2>Contact Us</h2><form>"+
    "<div><label for='name'>Name:</label><br><input type='text' name='name'></div><div><label for='email'>Email:</label><br>"+
    "<input type='email' name='email'></div><div><label for='message'>Message:</label><br><textarea></textarea></div>"+
    "<input type='submit' class='submit' value='Submit'></form></div>";

    return contactInfoBuild;
}

///// RESET PAGE /////

function clearPage() {
    billboard.remove();
    menuBillboard.remove();
    contactBillboard.remove();
    sectionLinks.remove();
    dishes.remove();
    contactInfo.remove();
    aboutUs.remove();
    footer.remove();
}

///// BUILD PAGES /////

function buildHomePage() {
    clearPage();
    mainContent.appendChild(header);
    mainContent.appendChild(billboard);
    mainContent.appendChild(sectionLinks);
    mainContent.appendChild(aboutUs);
    mainContent.appendChild(footer);
    header.className = "";
    header.className = "home";
    contactTab.classList.remove('active');
    menuTab.classList.remove('active');
    homeTab.classList.add('active');
}

function buildMenuPage() {
    clearPage();
    mainContent.appendChild(menuBillboard);
    mainContent.appendChild(dishes);
    mainContent.appendChild(footer);
    header.className = "";
    header.className = "menu";
    contactTab.classList.remove('active');
    menuTab.classList.add('active');
    homeTab.classList.remove('active');
}

function buildContactPage() {
    clearPage();
    mainContent.appendChild(contactBillboard);
    mainContent.appendChild(contactInfo);
    mainContent.appendChild(footer);
    header.className = "";
    header.className = "contact";
    contactTab.classList.add('active');
    menuTab.classList.remove('active');
    homeTab.classList.remove('active');
}


homeLink.addEventListener('click', buildHomePage);
menuLink.addEventListener('click', buildMenuPage);
menuBtn.addEventListener('click', buildMenuPage);
contactLink.addEventListener('click', buildContactPage);
contactBtn.addEventListener('click', buildContactPage);

export {buildHomePage};