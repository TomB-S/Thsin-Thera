import styles from '../styles/Contact.module.css';

function Contact() {
  
  return (
    <div className={styles.main}>

      <div className={styles.partnerships}>
        <img src='partners.png' alt='Partners' />
        <span>Les Partenaires qui nous accordent leur confiance</span>
      </div>

      <div className={styles.contact}>
        <span>CONTACT</span>
        <span>Merci de nous contacter par mail</span>
        <span>tshintherasport@gmail.com</span>
        <span>ou à l'adresse suivante</span>
        <span>5 avenue Joseph Railhac 34700</span>
      </div>
      
    </div>
  )  
  
}

export default Contact;
