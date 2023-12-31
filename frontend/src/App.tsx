import React, {useEffect, useState} from 'react';
import {Note as NoteModel} from './models/note'
import Note from "./components/Note";
import {Col, Container, Row} from "react-bootstrap";
import styles from "./styles/NotesPage.module.css"

function App() {
    const [notes, setNotes] = useState<NoteModel[]>([]);

    useEffect(() => {
        async function loadNotes() {
            try {
                const response = await fetch("/api/notes", {method: "GET"});
                const notes = await response.json();
                setNotes(notes);

            } catch (error) {
                console.error(error);
                alert(error);
            }

        }

        loadNotes();

    }, [])


    return (
        <Container>
            <Row xs={1} md={2} xl={3} className="g-4">
                {notes.map((note) => (
                    <Col>
                        <Note note={note} key={note._id} className={styles.note}></Note>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default App;
