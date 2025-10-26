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
import { FaLinkedin, FaInstagram, FaGithub ,  FaExternalLinkAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";


// Este es tu nuevo Navbar, puedes llamarlo MainNavbar si quieres
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
            {/* 1. Link a "Quien Soy" */}
            <Nav.Link href="#quien soy">Quien Soy</Nav.Link>
            
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



function App() {

  // --- LÓGICA DEL MODAL (NUEVO) ---

  // 1. Estado para saber si el modal está abierto o cerrado
  const [showModal, setShowModal] = useState(false);

  // 2. Estado para guardar qué proyecto está activo
  const [activeProject, setActiveProject] = useState(null);

  // 3. Función para CERRAR el modal
  const handleCloseModal = () => {
    setShowModal(false);
    setActiveProject(null);
  };

  // 4. Función para ABRIR el modal y pasarle datos
  const handleShowModal = (project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  // --- FIN DE LÓGICA DEL MODAL ---


  return (
    // Usamos un Fragment (<>) para agrupar todo
    <>
      {/* 1. Aquí llamas a tu componente Navbar */}
      <MainNavbar />
    <div className="App-wrapper">
      {/* 2. Aquí añades la nueva sección "Sobre Mí" */}
      {/* 2. Tu sección "Sobre Mí" (NUEVO DISEÑO) */}
      <Container fluid id ="quien soy" style={{ paddingTop: '80px', paddingBottom: '80px', minHeight: '80vh' }}>
        {/* 'align-items-center' centra verticalmente las columnas */}
        <Row className="align-items-center">
          
          {/* Columna del Texto (AHORA VA PRIMERO) */}
          <Col md={7} lg={8} className="hero-text"> {/* Le damos 7 u 8 columnas */}
            
            {/* Título grande, como en el ejemplo */}
            <h1>
              Jarvi Barona. 
            </h1>
            
            {/* Subtítulo (Tu "lead" anterior) */}
            <p className="lead">
              Ingeniero en Informática & Desarrollador de Software.
            </p>
            
            {/* Párrafo de biografía */}
            <p>
              Apasionado por el desarrollo web, trabajando con tecnologías como 
              React, JavaScript y Node.js. Me encanta construir aplicaciones 
              intuitivas y solucionar problemas reales.
            </p>
            <div className="social-icons-hero">

              <a 
                href="https://github.com/tu-usuario" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://instagram.com/tu-usuario" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>



          </Col>

          {/* Columna de la Imagen (AHORA VA SEGUNDA) */}
          {/* Columna de la Imagen (AHORA VA SEGUNDA) */}
          <Col md={5} lg={4} className="text-center hero-image-col"> {/* <-- CLASE AÑADIDA */}
            <Image 
              src="/foto" 
              fluid
              alt="Mi foto de perfil"
            />
          </Col>

        </Row>
      </Container>

      <Container fluid className="skills-section">
  <Container>
    <Row>
      <Col className="text-center">
        <h2>Habilidades Técnicas</h2>
        <p className="lead">Estas son las tecnologías con las que he trabajado.</p>
      </Col>
    </Row>

    {/* Fila de iconos */}
    {/* 'justify-content-center' centra las columnas */}
    <Row className="justify-content-center mt-4">

      {/* Icono 1: Python */}
      <Col xs={6} md={3} lg={2} className="skill-icon-container">
        <DiPython className="skill-icon icon-python" />
        <p>Python</p>
      </Col>

      {/* Icono 2: JavaScript */}
      <Col xs={6} md={3} lg={2} className="skill-icon-container">
        <DiJsBadge className="skill-icon icon-js" />
        <p>JavaScript</p>
      </Col>

      {/* Icono 3: React */}
      <Col xs={6} md={3} lg={2} className="skill-icon-container">
        <DiReact className="skill-icon icon-react" />
        <p>React</p>
      </Col>

      {/* Icono 4: SQL */}
      <Col xs={6} md={3} lg={2} className="skill-icon-container">
        <DiDatabase className="skill-icon icon-sql" />
        <p>SQL</p>
      </Col>

      {/* Icono 5: HTML5 */}
      <Col xs={6} md={3} lg={2} className="skill-icon-container">
        <DiHtml5 className="skill-icon icon-html" />
        <p>HTML5</p>
      </Col>

      {/* Icono 6: CSS3 */}
      <Col xs={6} md={3} lg={2} className="skill-icon-container">
        <DiCss3 className="skill-icon icon-css" />
        <p>CSS3</p>
      </Col>

      {/* Puedes añadir más iconos aquí... */}

    </Row>
  </Container>
</Container>

<Container fluid id="proyectos" className="projects-section">
  <Container>
    <Row>
      <Col className="text-center mb-5">
        <h2>Mis Proyectos</h2>
        <p className="lead">Una muestra de mis trabajos más recientes.</p>
      </Col>
    </Row>

    {/* Fila para las 3 tarjetas */}
    {/* 'g-4' añade un 'gap' (espacio) entre las tarjetas */}
    <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">

      {/* --- TARJETA DE PROYECTO 1 --- */}
      <Col>
        <Card className="project-card">
          <Card.Img variant="top" src="/web.png" alt="Imagen del Proyecto 1" />
          <Card.Body>
            <Card.Title>Aplicación de Tareas (Full-Stack)</Card.Title>
            <Card.Text>
              Una app completa con React, Node.js y base de datos PostgreSQL para 
              gestionar tareas diarias. Incluye autenticación de usuarios.
            </Card.Text>
            <div> {/* Div para alinear botones al final */}
              <Button 
                variant="primary" 
                href="[LINK_A_TU_DEMO_1]" 
                target="_blank" 
                className="me-2 mb-2"
              >
                <FaExternalLinkAlt className="me-1" /> Ver Demo
              </Button>
              <Button 
                variant="secondary" 
                href="[LINK_A_TU_GITHUB_1]" 
                target="_blank"
                className="me-2 mb-2"
              >
                <FaGithub className="me-2" /> Código
              </Button>

              <Button 
                variant="primary" /* Color 'info' (celeste) */
                className="me-2 mb-2" /* 'me-2' (margen derecho) 'mb-2' (margen abajo) */
                onClick={() => handleShowModal({
                  title: 'Aplicación de Tareas (Full-Stack)',
                  image: '/web.png',
                  longDescription: 'Aquí puedes escribir una descripción mucho más larga. Habla sobre los retos, las tecnologías que usaste a fondo, y cómo funciona la autenticación. Puedes añadir más imágenes o un video de YouTube aquí también (lo vemos después).',
                  demoLink: '[LINK_A_TU_DEMO_1]',
                  githubLink: '[LINK_A_TU_GITHUB_1]'
                })}
              >
                Ver más
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
              Interfaz interactiva creada con React que consume la API de
              'The Movie Database' (TMDB) para buscar y mostrar información de películas.
            </Card.Text>
            <div>
              <Button 
                variant="primary" 
                href="[LINK_A_TU_DEMO_2]" 
                target="_blank" 
                className="me-2"
              >
                <FaExternalLinkAlt className="me-1" /> Ver Demo
              </Button>
              <Button 
                variant="secondary" 
                href="[LINK_A_TU_GITHUB_2]" 
                target="_blank"
              >
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
              Diseño de una landing page estática responsiva para un cliente, 
              construida con HTML5, CSS3 y Bootstrap. Enfocada en la velocidad.
            </Card.Text>
            <div>
              <Button 
                variant="primary" 
                href="[LINK_A_TU_DEMO_3]" 
                target="_blank" 
                className="me-2"
              >
                <FaExternalLinkAlt className="me-1" /> Ver Demo
              </Button>
              <Button 
                variant="secondary" 
                href="[LINK_A_TU_GITHUB_3]" 
                target="_blank"
              >
                <FaGithub className="me-1" /> Código
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

    </Row>
  </Container>
</Container>
<Container id="contacto" className="contact-section">
  <Row>
    <Col className="text-center">
      <h2>Contacto</h2>
      <p className="lead mb-5">¿Tienes un proyecto en mente o quieres saber más de mí? ¡Hablemos!</p>
    </Col>
  </Row>

  <Row>
    {/* --- Columna Izquierda: Formulario --- */}
    <Col md={7} className="contact-form mb-4 mb-md-0">
      
      {/* Para un portafolio, un formulario estático de Netlify o Formspree es ideal.
          Este 'action' es un ejemplo de Formspree. 
          (Puedes crear una cuenta gratis en formspree.io y te dan un link) */}
      <Form action="https://formspree.io/f/TU_ID_DE_FORMULARIO" method="POST">
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Tu Nombre</Form.Label>
          <Form.Control type="text" name="name" placeholder="Ej. Juan Pérez" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Tu Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="juan.perez@ejemplo.com" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMensaje">
          <Form.Label>Tu Mensaje</Form.Label>
          <Form.Control 
            as="textarea" 
            name="message" 
            rows={5} 
            placeholder="Hola Jarvi, estoy interesado en..." 
            required 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar Mensaje
        </Button>
      </Form>
    </Col>

    {/* --- Columna Derecha: Info Rápida (WhatsApp) --- */}
    <Col md={5}>
      <div className="contact-info-box">
        <h4>Otras formas de contactar</h4>
        <p>
          Si prefieres una vía más directa, no dudes en usar estos canales.
        </p>

        {/* Email */}
        <p>
          <FaEnvelope className="icon" /> 
          <a href="mailto:jarvistevel@hotmail.com" className="text-white text-decoration-none">
            jarvistevel@hotmail.com
          </a>
        </p>
        
        {/* LinkedIn */}
        <p>
          <FaLinkedin className="icon" /> 
          <a href="https://www.linkedin.com/in/jarvi-barona-burbano-4a0998252" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
            LinkedIn
          </a>
        </p>

        <hr className="text-white-50" />

        {/* Botón de WhatsApp */}
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
{/* --- FIN DE LA SECCIÓN DE CONTACTO --- */}








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
              
              {/* Aquí podrías poner un video de YouTube si lo tienes
              <div className="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/..." title="YouTube video" allowFullScreen></iframe>
              </div>
              */}

            </Modal.Body>
            <Modal.Footer className="bg-dark">
              <Button variant="primary" href={activeProject.demoLink} target="_blank">
                <FaExternalLinkAlt className="me-1" /> Ver Demo
              </Button>
              <Button variant="secondary" href={activeProject.githubLink} target="_blank">
                <FaGithub className="me-1" /> Código
              </Button>
              <Button variant="outline-light" onClick={handleCloseModal}>
                Cerrar
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
      {/* --- FIN DEL MODAL --- */}


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
{/* --- FIN DEL FOOTER --- */}



</div>
  </>
  )
}
export default App