import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiPower, FiTrash2, FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

function Profile() {
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    const [incidents, setIncidents] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function handleGet() {
            try {
                const response = await api.get('/profile', {
                    headers: {
                        Authorization: ongId,
                    }
                });

                setIncidents(response.data);
            } catch(err) {
                alert('Algo deu errado :/');
            }
        }

        handleGet();
    }, [ongId]);

    function handleDeleteIncident(id) {
        try {
            api.delete(`/incidents/${ id }`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch(err) {
            alert('Erro ao deletar, tente novamente.');
        }
    }

    function handleLogOut() {
        localStorage.clear();

        history.push('/');
    }

    if (ongId) {
        return (
            <div className="profile-container">
                <header>
                    <img src={ logoImg } alt="Be The Hero"/>
                    <span>Bem-vinda, { ongName }</span>
    
                    <Link className='button' to='/incidents/new'>Cadastrar novo caso</Link>
    
                    <button onClick={ handleLogOut }>
                        <FiPower size='18' color='#e02041' />
                    </button>
                </header>
    
                <h1>Casos cadastrados</h1>
    
                <ul>
                    { 
                        incidents.map(incident => (
                            <li key={ incident.id }>
                                <strong>CASO:</strong>
                                <p>{ incident.title }</p>
    
                                <strong>DESCRIÇÃO:</strong>
                                <p>{ incident.description }</p>
    
                                <strong>VALOR:</strong>
                                <p>{ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value) }</p>
    
                                <button onClick={ 
                                    () => {
                                        handleDeleteIncident(incident.id);
                                    }
                                }>
                                    <FiTrash2 size='20' color='#a8a8b3' />
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    } else {
        return (
            <div className="profile-container">
                <h1>Faça login.</h1>
                <Link className='link' to='/'>
                    <FiArrowLeft size='18' color='#e02041' />
                    Voltar para o logon
                </Link>
            </div>
        );
    }
    
}

export default Profile;