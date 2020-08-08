import React from 'react';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
function TeacherItem() {
    return (
        <article className="teacher-item">
                <header>
                    <img src="https://avatars1.githubusercontent.com/u/13675790?s=460&u=dab0b6d4a9de364bb90f9ca40c26d6772fd0e8c1&v=4" alt="Lucas Schiavini"/>
                    <div>
                        <strong>Lucas Schiavini</strong>
                        <span>Química</span>
                    </div>
                </header>

                <p>
                    Entusiasta das melhores tecnologias de química avançada.
                    <br/><br/>
                    Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                </p>

                <footer>
                    <p>
                        Preço/hora
                        <strong>R$ 80,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="WhatsApp"/>
                        Entrar em contato
                    </button>
                </footer>
            </article>
    )
}

export default TeacherItem;
