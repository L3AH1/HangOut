import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import Link from "next/link";

export default function ConnectPopup() {

    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    
    return (
        <div>
          <button onClick={onOpenModal} style={{color:"white", fontWeight: "bold", paddingRight: 10, paddingLeft: 10}}>Connexion</button>
          <Modal open={open} onClose={onCloseModal} center>
            <h2 className="text-2xl font-bold">Connectez-vous</h2>
            
            <form>
            <input placeholder="Adresse e-mail" type="email"/>
            <input placeholder="Mot de passe" type="password"/>
            <button className="px-3 py-1 bg-yellow-500 text-white rounded-lg">
            <Link href="/authentication/login">
                Se conneter
            </Link>
            </button>
            <button className="px-3 py-1 bg-yellow-500 text-white rounded-lg">
            <Link href="/authentication/signup">
                S'inscrire
            </Link>
            </button>

            </form>
          </Modal>
        </div>
      );
    };