import express from 'express';
import {createNotes, deleteNode, getNote, getNotes, updateNote} from '../controllers/notes';

const router = express.Router();

router.get('/', getNotes);

router.get('/:noteId', getNote);

router.post('/', createNotes);

router.patch("/:noteId", updateNote)

router.delete("/:noteId", deleteNode)

export default router;
