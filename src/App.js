import React from 'react'
import { Carousel, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

const App = () => {
  return (
    <div>
            <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Espace SOS Canin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      

      <h1 style={{ color: "darkcyan", textAlign: "center" , marginTop: "40px", marginBottom: "40px" }}>Pour nos animaux</h1>

    
      <Carousel data-bs-theme="dark">
       <Carousel.Item>
        <img style={{width: "100%"}} src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg" text="First slide" alt='logo' />
        
        <Carousel.Caption>
          <h3>Espace SOS Canin, centre d'éducation canin dédié au bien-être de l'animal et de son maître</h3>
          <p>Amour, liberté, passionnés</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width: "100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7SliEeMxtRu_cKey_Zjj275o862yVNwJWjQ&usqp=CAU" text="Second slide"  alt='logo'/>
        <Carousel.Caption>
          <h3>Éduquez votre animal de compagnie pour partager de bons moments avec lui.</h3>
          <p>Depuis 1970</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width: "100%"}} src="https://images.lesindesradios.fr/fit-in/1100x2000/filters:format(webp)/medias/bdw90XUz6T/image/parc_canin1665579922038.png" text="Third slide"  alt='logo'/>
        <Carousel.Caption>
          <h3>Rendez-vous dans notre centre d'éducation canine pour votre compagnon à quatre pattes</h3>
          <p>
          Découvrez nos cours canins pour éduquer et canaliser l'énergie de votre chien
          </p>
        </Carousel.Caption>
      </Carousel.Item> 
    </Carousel>
    <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
  <p>Coordonnées :</p>
        <p>Adresse: Rue de l'Exemple, Ville</p>
        <p>Téléphone: +01 234 567 890</p>
        <p>Email: info@example.com</p>
</footer>

       
    </div>
  )
}

export default App