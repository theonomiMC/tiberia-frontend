import React from 'react';
import ReactQuill from "react-quill";
import { modules, formats } from '../../QuillSettings.js'
import 'react-quill/dist/quill.snow.css'
import './editor.css'

const Editor = ({ ...rest }) => <ReactQuill modules={modules} formats={formats} {...rest} />

export default Editor;
