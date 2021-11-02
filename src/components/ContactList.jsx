import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { mainContext } from './contexts/MainContext';

const ContactList = () => {
    const { getContacts, contacts } = useContext(mainContext)
    useEffect(() => {
        getContacts()
    }, [])
    console.log(contacts)
    return (
        <div className="container d-flex flex-wrap justify-content-between">
            {
                contacts.length ?
                    contacts.map((item, index) => (
                        <Card key={item.id} style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{item.name} </Card.Title>
                                <Card.Text>
                                    {item.phone} <br /> {item.email}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    ))
                    : (
                        <h2>Пока что у вас нету тасков</h2>
                    )
            }
        </div>
    );
};

export default ContactList;