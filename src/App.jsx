import React , { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './App.css';
import { DiPython, DiReact, DiJsBadge, DiDatabase, DiHtml5, DiCss3 } from "react-icons/di";
import { SiPostgresql, SiMongodb, SiNodedotjs, SiExpress, SiPython, SiDjango, SiReact as SiReactProject, SiJavascript , SiDocker,SiGodotengine } from 'react-icons/si'; 
import { FaLinkedin, FaInstagram, FaGithub, FaExternalLinkAlt, FaWhatsapp, FaEnvelope,FaAws } from "react-icons/fa";




function MainNavbar() {
  return (
    // 'sticky="top"' es un buen agregado, hace que se quede pegado arriba al hacer scroll
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" sticky="top">
      <Container>
        {/* En vez de "Navbar with text", pones tu nombre */}
        <Navbar.Brand href="#inicio">JB</Navbar.Brand>
        
        {/* Esto es el botón de hamburguesa para móvil, lo dejamos */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Esto es el contenedor de los enlaces */}
        <Navbar.Collapse id="basic-navbar-nav">
          
          {/* 'ms-auto' alinea los links a la derecha */}
          <Nav className="ms-auto">
            
            {/* 1. Link a "Quien Soy" (CORREGIDO: sin espacios en href) */}
            <Nav.Link href="#quien-soy">Quien Soy</Nav.Link>
            
            {/* 2. Link a "Proyectos" */}
            <Nav.Link href="#proyectos">Proyectos</Nav.Link>
            
            {/* 3. Link a "Contacto" */}
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            
            {/* 4. Link de "Descargar CV" */}
            <Nav.Link 
              href="/CV_JarviBarona.pdf" // El archivo debe estar en la carpeta 'public'
              download="CV_Jarvi_Barona.pdf" // El nombre con el que se guardará
            >
              Descargar CV
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


// ===================================================================
//  COMPONENTE APP PRINCIPAL
// ===================================================================

function App() {

  // --- 1. ESTADOS PARA EL FORMULARIO DE CONTACTO ---
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(''); // Para mensajes de 'enviando', 'éxito', 'error'

  // --- 2. ESTADOS PARA EL MODAL DE PROYECTOS ---
  const [showModal, setShowModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  
  // --- 3. FUNCIONES PARA EL MODAL ---
  const handleCloseModal = () => {
    setShowModal(false);
    setActiveProject(null);
  };

  const handleShowModal = (project) => {
    setActiveProject(project);
    setShowModal(true);
  };


  
  //  Actualiza el estado cada vez que el usuario teclea
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // 4b. Se ejecuta al enviar el formulario
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue
    setFormStatus('Enviando...');

    try {
      //  URL REAL DE FIREBASE!!
      const functionURL = 'https://us-central1-portafolio-jb-54d0d.cloudfunctions.net/enviarMensaje'; 
      
      const response = await fetch(functionURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      setFormStatus('¡Mensaje enviado!');
      setFormData({ name: '', email: '', message: '' }); // Resetea el formulario
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setFormStatus('Error al enviar. Intenta de nuevo.');
    }
  };


  // --- 5. EL RETURN (¡SIEMPRE AL FINAL DE LA FUNCIÓN!) ---
  return (
    // Usamos un Fragment (<>) para agrupa todo
    <>
      {/* 1. Aquí llamas a tu componente Navbar */}
      <MainNavbar />
      
      <div className="App-wrapper">
        {/* SECCIÓN QUIEN SOY - */}
<Container fluid id="quien-soy" className="hero-section text-center d-flex align-items-center justify-content-center">
  <Row className="justify-content-center"> {/* Centramos el contenido */}
    <Col md={10} lg={8}> {/* Ocupa más espacio para el texto */}
      <p className="hero-greeting animate__animated animate__fadeInDown">¡HOLA, SOY</p>
      <h1 className="hero-name animate__animated animate__fadeInLeft">JARVI BARONA</h1>
      <p className="hero-title animate__animated animate__fadeInUp">
        Un Desarrollador Frontend apasionado por construir experiencias web increíbles.
      </p>
      <p className="hero-description animate__animated animate__fadeInUp">
        Apasionado por el desarrollo web y la creación de soluciones innovadoras que impactan positivamente.
      </p>
      <Button 
        variant="outline-warning" 
        size="lg" 
        href="#proyectos" 
        className="hero-cta-button animate__animated animate__zoomIn"
      >
        VER MIS PROYECTOS
      </Button>
        {/* Iconos Sociales Fijos a la izquierda (nueva posición) */}
  <div className="social-icons-fixed animate__animated animate__fadeInLeft">
    <a href="https://www.linkedin.com/in/jarvi-barona-burbano-4a0998252" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <FaLinkedin />
    </a>
    <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
      <FaGithub />
    </a>
    <a href="https://instagram.com/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <FaInstagram />
    </a>
  </div>

    </Col>
  </Row>
</Container>
{/* FIN SECCIÓN QUIEN SOY */}
        
        
        

        {/* 3. Sección Habilidades */}
        <Container fluid className="skills-section">
          <Container>
            <Row>
              <Col className="text-center">
                <h2>Habilidades Técnicas</h2>
                <p className="lead">Estas son las tecnologías con las que he trabajado.</p>
              </Col>
            </Row>
            <Row className="justify-content-center mt-4">
              <Col xs={3} md={3} lg={2} className="skill-icon-container">
                <DiPython className="skill-icon icon-python" />
                <p>Python</p>
              </Col>
              <Col xs={3} md={3} lg={2} className="skill-icon-container">
                <DiJsBadge className="skill-icon icon-js" />
                <p>JavaScript</p>
              </Col>
              <Col xs={3} md={3} lg={2} className="skill-icon-container">
                <DiReact className="skill-icon icon-react" />
                <p>React</p>
              </Col>
              <Col xs={3} md={3} lg={2} className="skill-icon-container">
                <DiDatabase className="skill-icon icon-sql" />
                <p>SQL</p>
              </Col>
              <Col xs={3} md={3} lg={2} className="skill-icon-container">
                <DiHtml5 className="skill-icon icon-html" />
                <p>HTML5</p>
              </Col>
              <Col xs={3} md={3} lg={2} className="skill-icon-container">
                <DiCss3 className="skill-icon icon-css" />
                <p>CSS3</p>
              </Col>
              <Col xs={3} md={3} lg={2} className="skill-icon-container">
                <SiDjango className="skill-icon icon-django" /> {/* Necesitarás un CSS para icon-django */}
                <p>Django</p>
              </Col>

              {/* Icono 8: Godot */}
              <Col xs={3} md={3} lg={2} className="skill-icon-container">
                <SiGodotengine className="skill-icon icon-godot" /> {/* Necesitarás un CSS para icon-godot */}
                <p>Godot</p>
              </Col>

              {/* Icono 9: AWS */}
              <Col xs={3} md={3} lg={2} className="skill-icon-container">
                <FaAws className="skill-icon icon-aws" /> {/* Necesitarás un CSS para icon-aws */}
                <p>AWS</p>
              </Col>

              {/* Icono 10: PostgreSQL */}
              <Col xs={3} md={3} lg={2} className="skill-icon-container">
                <SiPostgresql className="skill-icon icon-postgresql" /> {/* Necesitarás un CSS para icon-postgresql */}
                <p>PostgreSQL</p>
              </Col>

              {/* Icono 11: Docker */}
              <Col xs={3} md={3} xl={2} className="skill-icon-container">
                <SiDocker className="skill-icon icon-docker" /> {/* Necesitarás un CSS para icon-docker */}
                <p>Docker</p>
              </Col>
            </Row>
          </Container>
        </Container>

        {/* 4. Sección Proyectos */}
        <Container fluid id="proyectos" className="projects-section">
          <Container>
            <Row>
              <Col className="text-center mb-5">
                <h2>Mis Proyectos</h2>
                <p className="lead">Una muestra de mis trabajos más recientes.</p>
              </Col>
            </Row>
            <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">

              {/* --- TARJETA DE PROYECTO 1 --- */}
              <Col>
                <Card className="project-card">
                  <Card.Img variant="top" src="/web.png" alt="Imagen del Proyecto 1" />
                  <Card.Body>
                    <Card.Title>Aplicación de Tareas (Full-Stack)</Card.Title>
                    <Card.Text>
                      Una app completa con React, Node.js y base de datos PostgreSQL...
                    </Card.Text>
                    <div>
                      {/* (Botones corregidos a estilo uniforme) */}
                      <Button 
                        variant="outline-dark" 
                        className="me-2 mb-2"
                        onClick={() => handleShowModal({
                          title: 'Aplicación de Tareas (Full-Stack)',
                          image: '/web.png',
                          longDescription: 'Aquí puedes escribir una descripción mucho más larga...',
                          demoLink: '[LINK_A_TU_DEMO_1]',
                          githubLink: '[LINK_A_TU_GITHUB_1]'
                        })}
                      >
                        Ver más
                      </Button>
                      <Button 
                        variant="outline-dark" 
                        href="[LINK_A_TU_DEMO_1]" 
                        target="_blank" 
                        className="me-2 mb-2"
                      >
                        <FaExternalLinkAlt className="me-1" /> Demo
                      </Button>
                      <Button 
                        variant="outline-dark" 
                        href="[LINK_A_TU_GITHUB_1]" 
                        target="_blank"
                        className="mb-2"
                      >
                        <FaGithub className="me-1" /> Código
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* --- TARJETA DE PROYECTO 2 --- */}
              <Col>
                <Card className="project-card">
                  <Card.Img variant="top" src="/proyecto2.png" alt="Imagen del Proyecto 2" />
                  <Card.Body>
                    <Card.Title>Buscador de Películas (API)</Card.Title>
                    <Card.Text>
                      Interfaz interactiva creada con React que consume la API de 'The Movie Database'...
                    </Card.Text>
                    <div>
                                            <Button 
                        variant="outline-dark" 
                        className="me-2 mb-2"
                        onClick={() => handleShowModal({
                          title: 'Aplicación de Tareas (Full-Stack)',
                          image: '/web.png',
                          longDescription: 'Aquí puedes escribir una descripción mucho más larga...',
                          demoLink: '[LINK_A_TU_DEMO_1]',
                          githubLink: '[LINK_A_TU_GITHUB_1]'
                        })}
                      >
                        Ver más
                      </Button>
                    
                      <Button variant="outline-dark" href="[LINK_A_TU_DEMO_2]" target="_blank" className="me-2 mb-2">
                        <FaExternalLinkAlt className="me-1" /> Demo
                      </Button>
                      <Button variant="outline-dark" href="[LINK_A_TU_GITHUB_2]" target="_blank" className="mb-2">
                        <FaGithub className="me-1" /> Código
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* --- TARJETA DE PROYECTO 3 --- */}
              <Col>
                <Card className="project-card">
                  <Card.Img variant="top" src="/proyecto3.png" alt="Imagen del Proyecto 3" />
                  <Card.Body>
                    <Card.Title>Página de Aterrizaje (Landing Page)</Card.Title>
                    <Card.Text>
                      Diseño de una landing page estática responsiva para un cliente...
                    </Card.Text>
                    <div>
                                            <Button 
                        variant="outline-dark" 
                        className="me-2 mb-2"
                        onClick={() => handleShowModal({
                          title: 'Aplicación de Tareas (Full-Stack)',
                          image: '/web.png',
                          longDescription: 'Aquí puedes escribir una descripción mucho más larga...',
                          demoLink: '[LINK_A_TU_DEMO_1]',
                          githubLink: '[LINK_A_TU_GITHUB_1]'
                        })}
                      >
                        Ver más
                      </Button>
                      
                      <Button variant="outline-dark" href="[LINK_A_TU_DEMO_3]" target="_blank" className="me-2 mb-2">
                        <FaExternalLinkAlt className="me-1" /> Demo
                      </Button>
                      <Button variant="outline-dark" href="[LINK_A_TU_GITHUB_3]" target="_blank" className="mb-2">
                        <FaGithub className="me-1" /> Código
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

            </Row>
          </Container>
        </Container>
        
        {/* 5. Sección Contacto */}
        <Container id="contacto" className="contact-section">
          <Row>
            <Col className="text-center">
              <h2>Contacto</h2>
              <p className="lead mb-5">¿Tienes un proyecto en mente o quieres saber más de mí? ¡Hablemos!</p>
            </Col>
          </Row>
          <Row>
            <Col md={7} className="contact-form mb-4 mb-md-0">
              {/* ¡EL FORMULARIO AHORA ESTÁ CONECTADO A LAS FUNCIONES DE ARRIBA! */}
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formNombre">
                  <Form.Label>Tu Nombre</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name" 
                    placeholder="Ej. Juan Pérez" 
                    required 
                    value={formData.name}
                    onChange={handleFormChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Tu Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email" 
                    placeholder="juan.perez@ejemplo.com" 
                    required 
                    value={formData.email}
                    onChange={handleFormChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMensaje">
                  <Form.Label>Tu Mensaje</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    name="message" 
                    rows={5} 
                    placeholder="Hola Jarvi, estoy interesado en..." 
                    required 
                    value={formData.message}
                    onChange={handleFormChange}
                  />
                </Form.Group>
                <Button variant="outline-warning" type="submit" disabled={formStatus === 'Enviando...'}>
                  {formStatus || 'Enviar Mensaje'}
                </Button>
                {formStatus === '¡Mensaje enviado!' && <p className="text-success mt-2">{formStatus}</p>}
                {formStatus.includes('Error') && <p className="text-danger mt-2">{formStatus}</p>}
              </Form>
            </Col>
            
            <Col md={5}>
              <div className="contact-info-box">
                <h4>Otras formas de contactar</h4>
                <p>
                  Si prefieres una vía más directa, no dudes en usar estos canales.
                </p>
                <p>
                  <FaEnvelope className="icon" /> 
                  <a href="mailto:jarvistevel@hotmail.com" className="text-white text-decoration-none">
                    jarvistevel@hotmail.com
                  </a>
                </p>
                <p>
                  <FaLinkedin className="icon" /> 
                  <a href="https://www.linkedin.com/in/jarvi-barona-burbano-4a0998252" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                    LinkedIn
                  </a>
                </p>
                <hr className="text-white-50" />
                <Button 
                  variant="whatsapp" 
                  href="https://wa.me/56931085509" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-100 btn-whatsapp"
                >
                  <FaWhatsapp className="me-2" /> Escríbeme un WhatsApp
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        {/* 6. El Modal */}
        <Modal show={showModal} onHide={handleCloseModal} size="xl" centered>
          {activeProject && (
            <>
              <Modal.Header closeButton closeVariant="white" className="bg-dark text-white">
                <Modal.Title>{activeProject.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body className="bg-dark text-white">
                <Image src={activeProject.image} fluid rounded className="mb-3" />
                <p>
                  {activeProject.longDescription}
                </p>
              </Modal.Body>
              <Modal.Footer className="bg-dark">
                <Button variant="outline-light" href={activeProject.demoLink} target="_blank">
                  <FaExternalLinkAlt className="me-1" /> Ver Demo
                </Button>
                <Button variant="outline-light" href={activeProject.githubLink} target="_blank">
                  <FaGithub className="me-1" /> Código
                </Button>
                <Button variant="outline-light" onClick={handleCloseModal}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>

        {/* 7. El Footer */}
        <footer className="simple-footer">
          <Container>
            <Row>
              <Col className="text-center">
                <p>
                  &copy; {new Date().getFullYear()} By Jarvi Barona.
                </p>
              </Col>
            </Row>
          </Container>
        </footer>

      </div>
    </>
  )
}
export default App