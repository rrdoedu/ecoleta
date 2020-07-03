import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'

import './styles.css'

interface Props {
    onFileUploaded: (file: File) => void
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {

    const [selectedFileUrl, setSelectedFileUrl] = useState('')
    
    
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]

        const fileUrl = URL.createObjectURL(file)

        setSelectedFileUrl(fileUrl)
        onFileUploaded(file)
    }, [onFileUploaded])
  
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: 'image/*'
    })

    let innerDiv

    if (selectedFileUrl) {
        
        innerDiv = <img src={ selectedFileUrl } alt="Point thumbnail" />
    } else if (isDragActive) {
        
        innerDiv =  <p>
                        <FiUpload />
                        Jogue a imagem aqui...
                    </p>
    } else {
        
        innerDiv =  <p>
                        <FiUpload />
                        Imagem do estabelecimento
                    </p>
    }

    return (
        <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} accept="image/*"/>

        { innerDiv }
        
        </div>
    )
}

export default Dropzone